// Keep a destination as an element, not a pixel coordinate from an old layout.
export function createNavigation(view, page, header) {
  let destination = null;
  let frame = 0;
  const headerHeight = () => header.getBoundingClientRect().height;

  function cancel() {
    destination = null;
    view.cancelAnimationFrame(frame);
    frame = 0;
  }

  function apply(behavior = 'instant') {
    if (!destination) return;
    const bounds = destination.element.getBoundingClientRect();
    const top = view.scrollY + bounds.top + bounds.height * destination.progress
      - headerHeight() - destination.offset;
    const maximum = Math.max(0,page.documentElement.scrollHeight - view.innerHeight);
    view.scrollTo({top:Math.max(0,Math.min(top,maximum)),behavior});
  }

  function schedule(behavior = 'instant') {
    view.cancelAnimationFrame(frame);
    frame = view.requestAnimationFrame(() => {
      frame = 0;
      apply(behavior);
    });
  }

  function restore(position, behavior = 'instant') {
    cancel();
    if (!position) return;
    destination = position;
    schedule(behavior);
    // A late font can change every section above the destination.
    if (page.fonts?.status === 'loading') page.fonts.ready.then(() => {
      if (destination === position) schedule();
    });
  }

  function target(hash = view.location.hash) {
    try { return hash ? page.getElementById(decodeURIComponent(hash.slice(1))) : null; }
    catch (_) { return null; }
  }

  function navigate(hash, behavior = 'instant') {
    const element = target(hash);
    restore(element ? {element,progress:0,offset:-1} : null,behavior);
  }

  function capture() {
    // Retain the intended section even if a smooth scroll is still in flight.
    if (destination) return destination;
    const edge = headerHeight();
    const sections = [...page.querySelectorAll('main section[id],main article[id]')];
    const section = sections.filter(element => {
      const bounds = element.getBoundingClientRect();
      return bounds.top <= edge + 1 && bounds.bottom > edge;
    }).pop();
    if (!section) return null;
    const bounds = section.getBoundingClientRect();
    if (Math.abs(bounds.top - edge) <= 2) return {element:section,progress:0,offset:-1};
    // Preserve the visible text or image when reading halfway through a section.
    const blocks = [...section.querySelectorAll('[data-i18n],img')];
    const element = blocks.find(block => {
      const rect = block.getBoundingClientRect();
      return rect.height > 0 && rect.bottom > edge && rect.top < view.innerHeight;
    }) || section;
    const rect = element.getBoundingClientRect();
    return {element,progress:Math.max(0,(edge - rect.top) / rect.height),offset:Math.max(0,rect.top - edge)};
  }

  // Explicit user scrolling cancels pending corrections; never pull the reader back.
  view.addEventListener('wheel',cancel,{passive:true});
  view.addEventListener('touchmove',cancel,{passive:true});
  view.addEventListener('pointerdown',event => {
    if (event.clientX >= page.documentElement.clientWidth - 16) cancel();
  });
  view.addEventListener('keydown',event => {
    if (event.target.closest('input,textarea,select,[contenteditable]')) return;
    if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' ','Tab'].includes(event.key)) cancel();
  });
  view.addEventListener('load',() => schedule());
  view.addEventListener('resize',() => schedule());
  if ('ResizeObserver' in view) {
    // Images, translations, and responsive headers can all shift the destination.
    const observer = new view.ResizeObserver(() => schedule());
    observer.observe(page.querySelector('main'));
    observer.observe(header);
  }

  page.addEventListener('click',event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const url = new URL(link.href,view.location.href);
    const current = new URL(view.location.href);
    if (url.origin !== current.origin || url.pathname !== current.pathname || url.search !== current.search || !target(url.hash)) return;
    event.preventDefault();
    if (url.hash !== current.hash) view.history.pushState(view.history.state,'',url);
    navigate(url.hash,view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth');
    // Retain native anchor keyboard behavior without another browser scroll.
    const element = target(url.hash);
    if (!element.hasAttribute('tabindex')) {
      element.setAttribute('tabindex','-1');
      element.addEventListener('blur',() => element.removeAttribute('tabindex'),{once:true});
    }
    element.focus({preventScroll:true});
  });

  return {capture,restore,navigate,target};
}
