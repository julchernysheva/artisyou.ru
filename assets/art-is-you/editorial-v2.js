(() => {
  const normalizeRoute = (value) => {
    const clean = value.replace(/index\.html$/, '').replace(/\/+$/, '');
    return clean || '/';
  };

  const leadSelectors = {
    '/': '.ay-home__lead',
    '/projects': '.projects-index__lead',
    '/research': '.research-index__lead',
    '/artist-statement': '.statement-header__lead > p',
    '/about': '.about-header__grid > p',
    '/about/press': '.press-index__lead',
    '/research/essays': '.essays-index__lead',
    '/projects/oracul': '.or-hero__lead > p',
    '/projects/programmer': '.programmer-header__lead > p',
    '/research/lab': '.lab-header__lead > p',
    '/research/interview': '.interview-index__lead',
    '/projects/post_human': '.ph-hero__lead > p',
    '/projects/archive': '.archive-header__lead > p',
    '/protoarchive': '.pl-lead',
    '/research/russian-bioart-history': '.bio-timeline__lead'
  };

  const firstModuleTargets = {
    '/': ['.ay-home__manifesto p', 'replace'],
    '/projects': ['.projects-index__grid', 'prepend'],
    '/research': ['.research-index__grid', 'prepend'],
    '/artist-statement': ['.statement-position__lead', 'replace'],
    '/about': ['.about-profile__statement p', 'replace'],
    '/about/press': ['.press-position__lead', 'replace'],
    '/research/essays': ['.essays-position__content p', 'replace'],
    '/projects/godbot': ['.t195__text p', 'replace'],
    '/projects/likes-pond': ['.t119__preface p', 'replace'],
    '/projects/oracul': ['.or-concept__copy .or-lead', 'replace'],
    '/projects/programmer': ['.programmer-concept__lead', 'replace'],
    '/projects/nowords': ['.ay-nowords-intro-copy p', 'replace'],
    '/projects/special-projects': ['.t119__preface p', 'replace'],
    '/science-quarter': ['.t-slds__descr', 'replace'],
    '/research/lab': ['.lab-position__lead', 'replace'],
    '/research/interview': ['.interview-manifesto__content p', 'replace'],
    '/projects/post_human': ['.ph-premise__statement p', 'replace'],
    '/projects/archive': ['.archive-crypto__lead', 'replace'],
    '/protoarchive': ['.pl-side-text', 'replace'],
    '/research/russian-bioart-history': ['.bio-timeline__controls', 'before']
  };

  const replaceText = (node, value) => {
    if (!node) return false;
    if (node.matches('.t015__descr, .t030__descr')) {
      const wrapper = node.querySelector('[data-customstyle]') || node;
      wrapper.replaceChildren(Object.assign(document.createElement('p'), { textContent: value }));
    } else {
      node.textContent = value;
    }
    node.dataset.ayV2Role = 'lead';
    return true;
  };

  const lockBodyTypography = (node) => {
    node.style.setProperty('font-family', 'var(--ay-font-sans)', 'important');
    node.style.setProperty('font-size', '16px', 'important');
    node.style.setProperty('font-style', 'normal', 'important');
    node.style.setProperty('font-weight', '400', 'important');
    node.style.setProperty('line-height', '1.5', 'important');
    node.style.setProperty('letter-spacing', 'normal', 'important');
    node.style.setProperty('text-transform', 'none', 'important');
  };

  const apply = async () => {
    const response = await fetch('/assets/art-is-you/editorial-v2.json?v=master-cycle-1');
    if (!response.ok) throw new Error(`Editorial V2 mapping unavailable: ${response.status}`);
    const source = await response.json();
    window.__AY_EDITORIAL_V2__ = source;
    const alias = document.querySelector('#allrecords')?.dataset?.tildaPageAlias || '';
    const route = alias ? normalizeRoute('/' + alias) : normalizeRoute(location.pathname);
    const entry = source.routes.find((item) => normalizeRoute(item.route) === route);
    if (!entry) return;

    if (route !== '/research') {
      let lead = document.querySelector('.ay-injected-hero__lead p');
      if (!lead) lead = leadSelectors[route] ? document.querySelector(leadSelectors[route]) : null;
      if (!lead) lead = document.querySelector('.ay-composition-intro :is(.t015__descr, .t030__descr)');
      if (!lead) {
        const intro = document.querySelector('.ay-composition-intro');
        if (intro) {
          lead = document.createElement('p');
          lead.className = 'ay-v2-lead ay-type-lead';
          intro.append(lead);
        }
      }
      replaceText(lead, entry.lead);
    }

    if (entry.first_module) {
      const targetSpec = firstModuleTargets[route];
      const target = targetSpec && document.querySelector(targetSpec[0]);
      if (target) {
        const paragraph = document.createElement('p');
        paragraph.className = 'ay-v2-first-module';
        paragraph.dataset.ayV2Role = 'first-module';
        paragraph.textContent = entry.first_module;
        lockBodyTypography(paragraph);
        if (targetSpec[1] === 'replace') {
          target.textContent = entry.first_module;
          target.classList.add('ay-v2-first-module');
          target.dataset.ayV2Role = 'first-module';
          lockBodyTypography(target);
          target.closest('section')?.classList.add('ay-v2-first-module-host');
        } else {
          const module = document.createElement('section');
          module.className = 'ay-v2-text-module ay-composition-section';
          module.append(paragraph);
          target.before(module);
        }
      }
    }

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      if (node.parentElement?.closest('script, style')) return;
      if (!/[А-Яа-яЁё]/.test(node.data)) return;
      node.data = node.data
        .replace(/Worldbuilding-проект/gi, 'Проект о проектировании миров')
        .replace(/worldbuilding director/gi, 'куратор проектирования миров')
        .replace(/миростроительств[а-я]*/gi, 'проектирование миров')
        .replace(/worldbuilding/gi, 'проектирование миров');
    });

    document.documentElement.dataset.ayEditorialV2 = 'applied';
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();
})();
