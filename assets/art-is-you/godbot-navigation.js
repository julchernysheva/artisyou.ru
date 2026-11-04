(() => {
  if (location.pathname.replace(/\/$/, '') !== '/projects/godbot' || new URLSearchParams(location.search).has('territory')) return;
  const sections = [
    ['.ay-project-top__concept', 'project-about', 'О проекте'],
    ['#most-entry', 'most-entry', 'Происхождение видов'],
    ['.ay-project-primary--godbot', 'project-network', 'Граф'],
    ['#seven-module', 'seven-module', 'Семь территорий'],
    ['.ay-godbot-history-network', 'project-history', 'История'],
    ['.ay-godbot-authorial-canon', 'project-canon', 'Канон'],
    ['.ay-godbot-archive-reader', 'project-archive', 'Архив'],
    ['.ay-godbot-public-evidence', 'project-materials', 'Материалы']
  ];
  let nav, queued = false, restoredHash = false;
  const observed = new WeakSet();
  const visible = new Map();
  const intersection = new IntersectionObserver(entries => {
    entries.forEach(entry => visible.set(entry.target.id, entry.isIntersecting));
    const active = sections.find(([, id]) => visible.get(id));
    if (nav) nav.querySelectorAll('a').forEach(link => {
      if (active && link.hash === '#' + active[1]) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-10% 0px -65% 0px' });
  function mount() {
    const hero = document.querySelector('.ay-project-top > .ay-approved-hero, .ay-project-top__hero');
    if (!hero) return;
    if (!nav) {
      nav = document.createElement('nav'); nav.className = 'gb-section-nav';
      nav.setAttribute('aria-label', 'Разделы Богобота');
    }
    if (hero.nextElementSibling !== nav) hero.after(nav);
    for (const [selector, id, label] of sections) {
      const section = document.querySelector(selector);
      if (!section) continue;
      section.id = id; section.classList.add('gb-anchor');
      if (!observed.has(section)) { intersection.observe(section); observed.add(section); }
      if (!nav.querySelector('[href="#' + id + '"]')) {
        const link = document.createElement('a'); link.href = '#' + id; link.textContent = label;
        nav.append(link);
        // Keep asynchronous sections in their intended reading order.
        for (const [, orderId] of sections) { const item = nav.querySelector('[href="#' + orderId + '"]'); if (item) nav.append(item); }
      }
    }
    const evidence = document.querySelector('#project-materials');
    if (evidence && !evidence.querySelector('.gb-materials-link')) {
      const link = document.createElement('a'); link.className = 'gb-materials-link';
      link.href = '/projects/godbot/materials/'; link.textContent = 'Все материалы и видео проекта ↗'; evidence.append(link);
    }
    if (!restoredHash && location.hash && document.body.dataset.godbotSevenProduction === 'ready') {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) { restoredHash = true; requestAnimationFrame(() => target.scrollIntoView()); }
    }
  }
  const observer = new MutationObserver(() => {
    if (queued) return; queued = true;
    requestAnimationFrame(() => { queued = false; mount(); });
  });
  observer.observe(document.documentElement, {childList: true, subtree: true});
  mount();
})();
