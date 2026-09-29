/* Opt-in on Home / About / Reverse Prompt only. Mobile keeps its existing owners. */
(() => {
  const desktop = matchMedia('(min-width: 961px)');
  const root = document.documentElement;
  // One first-paint boundary: the opening owner, fonts and native diagrams must
  // finish before presentation. No timed entrance or UA-dependent choreography.
  if (desktop.matches) {
    root.classList.add('desktop-motion-preparing');
    const release = () => {
      root.classList.remove('desktop-motion-preparing');
      observer.disconnect();
      clearTimeout(fallback);
    };
    let scheduled = false;
    const check = () => {
      if (scheduled || root.dataset.openingSystem !== 'ready' || root.dataset.textGridSystem !== 'ready') return;
      if (location.pathname === '/' && root.dataset.methodMap !== 'ready') return;
      scheduled = true;
      document.fonts.ready.then(() => requestAnimationFrame(() => requestAnimationFrame(release)));
    };
    const observer = new MutationObserver(check);
    observer.observe(root, {attributes:true, attributeFilter:['data-opening-system','data-text-grid-system','data-method-map']});
    // Fail open if an existing page owner fails; content never stays hidden.
    const fallback = setTimeout(release, 3000);
    desktop.addEventListener('change', release, {once:true});
    check();
  }
  const start = () => {
    const diagram = document.querySelector('.rp-native-scheme__diagram');
    if (!diagram) return;
    const nodes = [...diagram.querySelectorAll('.rp-native-scheme__module')];
    const connectors = [...diagram.querySelectorAll('.rp-native-scheme__connector')];
    let selected = null, hovered = null, focused = null;
    const paint = () => {
      const active = selected ?? focused ?? hovered;
      nodes.forEach((node, index) => {
        node.classList.toggle('is-active', desktop.matches && index === active);
        node.classList.toggle('is-selected', desktop.matches && index === selected);
        node.classList.toggle('is-related', desktop.matches && active !== null && index === active + 1);
        if (desktop.matches) { node.setAttribute('role','button'); node.setAttribute('aria-pressed',String(index === selected)); }
        else { node.removeAttribute('role'); node.removeAttribute('aria-pressed'); }
      });
      connectors.forEach((connector,index) => connector.classList.toggle('is-active',desktop.matches && index === active));
    };
    const clear = () => { selected = hovered = focused = null; paint(); };
    const select = index => { selected = selected === index ? null : index; hovered = focused = null; paint(); };
    nodes.forEach((node,index) => {
      node.addEventListener('pointerenter',e => { if (desktop.matches && e.pointerType === 'mouse') { hovered=index;paint(); } });
      node.addEventListener('pointerleave',() => { hovered=null;paint(); });
      node.addEventListener('focus',() => { if (desktop.matches && node.matches(':focus-visible')) { focused=index;paint(); } });
      node.addEventListener('blur',() => { focused=null;paint(); });
      node.addEventListener('click',() => { if (desktop.matches) select(index); });
      node.addEventListener('keydown',e => {
        if (!desktop.matches) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault();select(index); }
        if (e.key === 'Escape') { e.preventDefault();clear(); }
        if (['ArrowRight','ArrowLeft'].includes(e.key)) {
          e.preventDefault();nodes[Math.max(0,Math.min(nodes.length-1,index+(e.key==='ArrowRight'?1:-1)))].focus();
        }
      });
    });
    document.addEventListener('pointerdown',e => { if (desktop.matches && !diagram.contains(e.target)) clear(); });
    desktop.addEventListener('change',clear);
    paint();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
