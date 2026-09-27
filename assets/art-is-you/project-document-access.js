(() => {
  'use strict';
  const selectors = [
    '.likes12-official figure',
    '.programmer12-score figure', '.programmer12-instruction figure', '.programmer12-material figure',
    '.oracle12-documentation__scheme', '.aura12-documentation__field', '.aura12-documentation__technical',
    '.ay-project-top__context-media', '.ay-godbot-history-network__visual',
    '.ay-godbot-archive-reader__primary', '.ay-godbot-archive-reader__secondary figure',
    '.ay-godbot-evidence'
  ].join(',');
  const update = () => {
    document.querySelectorAll(selectors).forEach(figure => {
      const image = figure.querySelector('img');
      if (!image?.getAttribute('src')) return;
      let caption = figure.querySelector('figcaption');
      if (!caption) { caption = document.createElement('figcaption'); caption.className = 'ay-document-caption'; figure.append(caption); }
      let link = caption.querySelector('.ay-document-source');
      if (!link) {
        link = document.createElement('a');link.className = 'ay-document-source';
        link.textContent = 'Открыть оригинал ↗';link.target = '_blank';link.rel = 'noopener';caption.append(link);
      }
      const href = image.getAttribute('src');
      const label = `Открыть оригинал: ${image.alt || 'документ'} (новая вкладка)`;
      if (link.getAttribute('href') !== href) link.setAttribute('href', href);
      if (link.getAttribute('aria-label') !== label) link.setAttribute('aria-label', label);
    });
  };
  let scheduled = false;
  const schedule = () => { if (scheduled) return; scheduled = true; queueMicrotask(() => { scheduled = false; update(); }); };
  // Reader replaces captions/file sources on selection; follow it, do not replace its mechanics.
  new MutationObserver(schedule).observe(document.documentElement, {subtree:true,childList:true,attributes:true,attributeFilter:['src']});
  update();
})();
