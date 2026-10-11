import assert from 'node:assert/strict';
import test from 'node:test';
import { createNavigation } from '../assets/navigation.js';

function fixture() {
  const listeners = new Map();
  const frames = new Map();
  let frameId = 0;
  let finishFonts;
  let resize;
  const view = {
    scrollY:0,innerHeight:800,
    location:{href:'https://example.com/?lang=ru#contact',hash:'#contact'},
    history:{state:null,pushState(_state,_title,url) { view.location.href = String(url); view.location.hash = url.hash; }},
    addEventListener(name,callback) { listeners.set(name,callback); },
    requestAnimationFrame(callback) { frames.set(++frameId,callback); return frameId; },
    cancelAnimationFrame(id) { frames.delete(id); },
    scrollTo(options) { view.scrollY = options.top; view.lastScroll = options; },
    matchMedia() { return {matches:false}; },
    ResizeObserver:class { constructor(callback) { resize = callback; } observe() {} }
  };
  const element = (y,height) => ({
    y,height,attributes:new Map(),
    getBoundingClientRect() { return {top:this.y - view.scrollY,bottom:this.y - view.scrollY + this.height,height:this.height}; },
    querySelectorAll() { return this.blocks || []; },
    hasAttribute(key) { return this.attributes.has(key); },
    setAttribute(key,value) { this.attributes.set(key,value); },
    removeAttribute(key) { this.attributes.delete(key); },
    addEventListener() {}, focus() {}
  });
  const header = element(0,80);
  const contact = element(4000,1200);
  const work = element(1200,2500);
  const page = {
    documentElement:{scrollHeight:5200,clientWidth:1200},
    fonts:{status:'loaded',ready:new Promise(resolve => { finishFonts = resolve; })},
    getElementById(id) { return {contact,work}[id] || null; },
    querySelector() { return work; },
    querySelectorAll() { return [work,contact]; },
    addEventListener(name,callback) { listeners.set(`page:${name}`,callback); }
  };
  const navigation = createNavigation(view,page,header);
  function flush() {
    const callbacks = [...frames.values()];
    frames.clear();
    callbacks.forEach(callback => callback());
  }
  return {view,page,header,contact,work,navigation,element,flush,finishFonts,resize:() => resize(),emit:(name,event = {}) => listeners.get(name)?.(event)};
}

test('deep links use translated geometry and current header height after layout',() => {
  const f = fixture();
  f.navigation.navigate('#contact');
  f.contact.y = 4200;
  f.page.documentElement.scrollHeight = 5600;
  f.header.height = 96;
  f.flush();
  assert.equal(f.contact.getBoundingClientRect().top,95);
  // A late image or responsive change moves the target again.
  f.contact.y += 100;
  f.resize();
  f.flush();
  assert.equal(f.contact.getBoundingClientRect().top,95);
});

test('late fonts correct the destination, but never override newer navigation',async () => {
  const f = fixture();
  f.page.fonts.status = 'loading';
  f.navigation.navigate('#contact');
  f.flush();
  f.contact.y += 160;
  f.finishFonts();
  await Promise.resolve();
  f.flush();
  assert.equal(f.contact.getBoundingClientRect().top,79);
  f.navigation.navigate('#contact');
  f.navigation.navigate('#work');
  f.flush();
  assert.equal(f.work.getBoundingClientRect().top,79);
});

test('language switching preserves a section during an unfinished smooth scroll',() => {
  const f = fixture();
  f.navigation.navigate('#contact','smooth');
  const position = f.navigation.capture();
  f.contact.y += 200;
  f.page.documentElement.scrollHeight += 200;
  f.header.height = 72;
  f.navigation.restore(position);
  f.flush();
  assert.equal(f.contact.getBoundingClientRect().top,71);
  assert.equal(f.view.lastScroll.behavior,'instant');
});

test('manual reading keeps the visible block when translation changes its height',() => {
  const f = fixture();
  f.view.scrollY = 1450;
  const paragraph = f.element(1480,200);
  f.work.blocks = [paragraph];
  const position = f.navigation.capture();
  paragraph.y += 240;
  paragraph.height = 400;
  f.navigation.restore(position);
  f.flush();
  assert.equal(paragraph.getBoundingClientRect().top,-20);
});

test('user scrolling cancels queued and late layout corrections',async () => {
  const f = fixture();
  f.page.fonts.status = 'loading';
  f.navigation.navigate('#contact');
  f.emit('wheel');
  f.view.scrollY = 1000;
  f.resize();
  f.finishFonts();
  await Promise.resolve();
  f.flush();
  assert.equal(f.view.scrollY,1000);
});

test('a pending font correction for an old target cannot override a new target',async () => {
  const f = fixture();
  f.page.fonts.status = 'loading';
  f.navigation.navigate('#contact');
  f.flush();
  f.navigation.navigate('#work');
  f.work.y += 100;
  f.finishFonts();
  await Promise.resolve();
  f.flush();
  assert.equal(f.work.getBoundingClientRect().top,79);
});

test('reduced motion uses an instant anchor transition',() => {
  const f = fixture();
  f.view.matchMedia = () => ({matches:true});
  const link = {href:'https://example.com/?lang=ru#work',target:'',hasAttribute:() => false};
  f.emit('page:click',{button:0,target:{closest:() => link},preventDefault() {}});
  f.flush();
  assert.equal(f.view.lastScroll.behavior,'instant');
  assert.equal(f.view.location.href,link.href);
});

test('repeated same-hash clicks return to the target and retain the language query',() => {
  const f = fixture();
  const link = {href:f.view.location.href,target:'',hasAttribute:() => false};
  let prevented = false;
  f.emit('page:click',{button:0,target:{closest:() => link},preventDefault() { prevented = true; }});
  f.flush();
  assert.equal(prevented,true);
  assert.equal(f.contact.getBoundingClientRect().top,79);
  assert.equal(f.view.location.href,'https://example.com/?lang=ru#contact');
  f.emit('wheel');
  f.view.scrollY = 1000;
  f.emit('page:click',{button:0,target:{closest:() => link},preventDefault() {}});
  f.flush();
  assert.equal(f.contact.getBoundingClientRect().top,79);
});

test('invalid anchors and modified clicks retain native browser behavior',() => {
  const f = fixture();
  assert.doesNotThrow(() => f.navigation.navigate('#%broken'));
  for (const options of [{ctrlKey:true},{href:'https://elsewhere.com/#contact'},{href:'https://example.com/?lang=ru#missing'}]) {
    const link = {href:options.href || f.view.location.href,target:'',hasAttribute:() => false};
    f.emit('page:click',{button:0,...options,target:{closest:() => link},preventDefault() { assert.fail('Must retain native behavior'); }});
  }
});

test('destinations are clamped at the document end',() => {
  const f = fixture();
  f.contact.y = 4900;
  f.navigation.navigate('#contact');
  f.flush();
  assert.equal(f.view.scrollY,4400);
});
