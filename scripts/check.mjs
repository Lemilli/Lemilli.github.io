import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(id), `Missing anchor: ${id}`);
const files = [...html.matchAll(/(?:src|href)="(assets\/[^"#]+)"/g)].map(match => match[1]);
for (const css of ['assets/base.css', 'assets/home.css', 'assets/image-previews.css']) {
  const source = await readFile(new URL(css, root), 'utf8');
  for (const [, path] of source.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) {
    if (!path.startsWith('data:')) await access(new URL(path, new URL(css, root)));
  }
}
for (const file of files) await access(new URL(file, root));
const previews = await readFile(new URL('assets/image-previews.css', root), 'utf8');
for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
  assert(/width="\d+"/.test(tag) && /height="\d+"/.test(tag), 'Images must reserve their aspect ratio');
  const name = tag.match(/data-image="([^"]+)"/)?.[1];
  assert(name && previews.includes(`[data-image="${name}"]`), 'Images must have a loading preview');
  const srcset = tag.match(/srcset="([^"]+)"/)?.[1];
  assert(srcset && /sizes="[^"]+"/.test(tag), 'Images must provide responsive sources and sizes');
  for (const candidate of srcset.split(', ')) {
    const [path, width] = candidate.split(' ');
    assert(path.endsWith('.webp') && /^\d+w$/.test(width), `Invalid image candidate: ${candidate}`);
    await access(new URL(path, root));
  }
  if (name === 'portrait') assert(/fetchpriority="high"/.test(tag) && !/loading="lazy"/.test(tag), 'Hero must load with high priority');
  else assert(/loading="lazy"/.test(tag), 'Project screenshots should load lazily');
}
console.log(`Checked ${ids.length} anchors and all referenced images, styles, scripts, and fonts.`);
