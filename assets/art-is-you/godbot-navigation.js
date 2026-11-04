(() => {
  if (location.pathname.replace(/\/$/, '') !== '/projects/godbot' || new URLSearchParams(location.search).has('territory')) return;
  if (location.hash === '#project-archive') { location.replace('/projects/godbot/materials/#archive-documents'); return; }
  const sections = [
    ['.ay-project-top__concept', 'project-about', 'О проекте'],
    ['#most-entry', 'most-entry', 'Происхождение видов'],
    ['.ay-project-primary--godbot', 'project-network', 'Карта мира'],
    ['#seven-module', 'seven-module', 'Архив несбывшегося будущего'],
    ['.ay-godbot-history-network', 'project-history', 'История сети'],
    ['.ay-godbot-authorial-canon', 'project-canon', 'Авторский канон'],
    ['.ay-godbot-quantum-threshold', 'project-quantum', 'Квантовый апокалипсис'],
    ['.ay-godbot-public-evidence', 'project-materials', 'Публичные свидетельства']
  ];
  let nav, queued = false, restoredHash = false;
  let scrollQueued = false;
  function updateCurrent() {
    if (!nav) return;
    const targets = sections.map(([,id]) => document.getElementById(id)).filter(Boolean);
    const threshold = Math.min(180, innerHeight * .25);
    let current = targets[0];
    for (const target of targets) {
      if (target.getBoundingClientRect().top <= threshold) current = target;
    }
    nav.querySelectorAll('a').forEach(link => {
      if (current && link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  addEventListener('scroll', () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => { scrollQueued = false; updateCurrent(); });
  }, {passive:true});
  addEventListener('resize', updateCurrent);
  addEventListener('hashchange', updateCurrent);
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
      if (!nav.querySelector('[href="#' + id + '"]')) {
        const link = document.createElement('a'); link.href = '#' + id;
        const number = document.createElement('span'); number.className = 'gb-nav-number';
        number.textContent = String(sections.findIndex(item => item[1] === id) + 1).padStart(2, '0');
        number.setAttribute('aria-hidden', 'true');
        const title = document.createElement('span'); title.className = 'gb-nav-label'; title.textContent = label;
        link.append(number, title);
        nav.append(link);
        // Keep asynchronous sections in their intended reading order.
        for (const [, orderId] of sections) { const item = nav.querySelector('[href="#' + orderId + '"]'); if (item) nav.append(item); }
      }
    }
    // Section numbers match the index; subordinate headings are not separate chapters.
    const labels = [
      ['#project-concept-title', '01 / О проекте'],
      ['#project-research-title', 'Исследовательская система'],
      ['#project-method-title', 'Метод'],
      ['#most-entry .most-kicker', '02 / Происхождение видов'],
      ['.ay-godbot-public-evidence > .ay-project-lower__bar > span:first-child', '08 / Публичные свидетельства'],
      ['.ay-godbot-quantum-threshold > h2', 'Квантовый апокалипсис'],
      ['#project-network .godbot-research__eyebrow > span:first-child', '03 / Карта мира'],
      ['.ay-godbot-quantum-threshold .ay-project-lower__bar > span:first-child', '07 / Квантовый апокалипсис']
    ];
    for (const [selector, text] of labels) {
      const element = document.querySelector(selector);
      if (element && element.textContent !== text) element.textContent = text;
    }
    // GitHub is not a reader destination on the project pages.
    document.querySelectorAll('a[href*="github.com"],a[href*="github.io"]').forEach(link => link.remove());
    updateCurrent();
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
    queueMicrotask(() => { queued = false; mount(); });
  });
  observer.observe(document.documentElement, {childList: true, subtree: true});
  mount();
})();
