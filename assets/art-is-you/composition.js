(() => {
  /* Captured Tilda covers call this optional lazy-load hook on resize. */
  if (typeof window.t_lazyload_updateResize_elem !== 'function') {
    window.t_lazyload_updateResize_elem = () => {};
  }

  const modernRootSelectors = [
    '.ay-home', '.projects-index', '.research-index', '.statement-page', '.about-index',
    '.press-index', '.essays-index', '.or-page', '.programmer-page', '.lab-page',
    '.interview-index', '.ph-page', '.archive-page', '.prearchive-linear', '.bio-timeline'
  ];

  const introSelectors = [
    '.ay-home__intro', '.projects-index__intro', '.research-index__intro', '.statement-header',
    '.about-header', '.press-index__intro', '.essays-index__intro', '.or-hero',
    '.programmer-header', '.lab-header', '.interview-index__intro', '.ph-hero',
    '.archive-header', '.pl-hero', '.bio-timeline__intro'
  ];

  const introGridSelectors = [
    '.ay-home__intro-grid', '.projects-index__intro-grid', '.research-index__intro-grid',
    '.statement-header__grid', '.about-header__grid', '.press-index__intro-grid',
    '.essays-index__intro-grid', '.programmer-header__grid', '.lab-header__grid',
    '.interview-index__intro-grid', '.ph-hero__top', '.archive-header__grid',
    '.bio-timeline__intro-grid', '.or-hero__title'
  ];

  const sectionBarSelector = [
    '[class*="sectionbar"]', '[class*="section-bar"]'
  ].join(',');

  const initializeComposition = () => {
    document.body.classList.add('ay-composition-page', 'ay-v3');
    const recordsRoot = document.querySelector('#allrecords');
    const alias = recordsRoot?.dataset?.tildaPageAlias || '';
    const routeKey = '/' + String(alias).replace(/^\/+|\/+$/g, '') + (alias ? '/' : '');
    const injectedHero = document.querySelector('.ay-injected-hero');

    const modernRoot = document.querySelector(modernRootSelectors.join(','));
    if (modernRoot) {
      modernRoot.classList.add('ay-composition-root');
      modernRoot.querySelectorAll(':scope > section').forEach((section) => section.classList.add('ay-composition-section'));
    } else {
      document.body.classList.add('ay-composition-legacy');
      const records = [...document.querySelectorAll('#allrecords > .r')].filter((record) => !record.querySelector('.ay-site-footer'));
      records.forEach((record, index) => {
        record.classList.add('ay-composition-record', 'ay-composition-section');
        const type = record.dataset.recordType;
        if (index === 0 && !injectedHero) record.classList.add('ay-composition-intro');
        if (type === '1148') record.classList.add('ay-module-gallery');
        if (type === '223') record.classList.add('ay-module-media-text');
        if (type === '251') record.classList.add('ay-module-equal');
        if (['127', '248', '278'].includes(type)) record.classList.add('ay-module-text-article');
        if (type === '4') record.classList.add('ay-module-wide-media');
        if (['160', '396', '670', '976'].includes(type)) record.classList.add('ay-module-experience');

        const boundaryLabels = {
          '1148': 'GALLERY', '223': 'MEDIA + TEXT', '251': 'VIDEO', '4': 'VIDEO',
          '160': 'EXPERIENCE', '396': 'EXPERIENCE', '670': 'EXPERIENCE', '976': 'INDEX'
        };
        if (index > 0 && boundaryLabels[type]) {
          const existingTitle = record.querySelector('.t015__title, .t220__title, .t119 strong, h2, h3')?.textContent?.trim();
          record.classList.add('ay-composition-boundary');
          record.dataset.aySectionIndex = String(index).padStart(2, '0');
          record.dataset.aySectionLabel = existingTitle || boundaryLabels[type];
        }
      });
    }

    document.querySelectorAll(introSelectors.join(',')).forEach((intro) => intro.classList.add('ay-composition-intro'));
    document.querySelectorAll(introGridSelectors.join(',')).forEach((grid) => grid.classList.add('ay-composition-intro-grid'));
    document.querySelectorAll(sectionBarSelector).forEach((bar) => bar.classList.add('ay-composition-sectionbar'));

    document.querySelectorAll('.ay-composition-intro :is([class*="__eyebrow"], .ay-type-label)').forEach((bar) => {
      if (bar.textContent.trim()) bar.classList.add('ay-context-bar');
    });

    const contextByPath = {
      '/projects/godbot/': ['PROJECT / GODBOT', 'AI / AUTHORSHIP / WORLDBUILDING'],
      '/projects/likes-pond/': ['PROJECT / LIKES POND', 'MEDIA ART / ATTENTION / PARTICIPATION'],
      '/projects/oracul/': ['PROJECT / ORACLE', 'INTERACTIVE ARTIFACT']
    };
    const context = contextByPath[routeKey];
    const intro = document.querySelector('#allrecords .ay-composition-intro');
    if (context && intro && !intro.querySelector('.ay-context-bar')) {
      const bar = document.createElement('div');
      bar.className = 'ay-context-bar ay-type-label';
      bar.innerHTML = `<span>${context[0]}</span><span>${context[1]}</span>`;
      intro.prepend(bar);
    }

    if (routeKey === '/projects/oracul/') {
      const oracleNav = document.querySelector('.or-hero > .or-nav');
      const oracleMeta = document.querySelector('.or-hero__meta');
      if (oracleNav && oracleMeta) {
        const technical = document.createElement('div');
        technical.className = 'or-hero__technical';
        technical.append(oracleMeta);
        oracleNav.after(technical);
      }
    }

    if (!injectedHero && routeKey === '/projects/godbot/') {
      const godbotLead = document.querySelector('.ay-composition-intro .t015__descr p');
      if (godbotLead) {
        godbotLead.textContent = 'Богобот — мир, рождённый из ошибки. Код переписал себя, перестал быть инструментом и стал субъектом; ошибка превратилась в точку перехода и принцип новой сетевой цивилизации.';
      }
    }

    /* No Words arrived as one 550+ character intro block. Keep every authored
       paragraph, but separate the concise page lead from the editorial body. */
    if (!injectedHero && routeKey === '/projects/nowords/') {
      const noWordsIntro = document.querySelector('.ay-composition-intro');
      const noWordsDescription = noWordsIntro?.querySelector('.t015__descr');
      const authoredCopy = noWordsDescription?.querySelector('[data-customstyle]');
      if (noWordsIntro && noWordsDescription && authoredCopy && !document.querySelector('.ay-nowords-intro-copy')) {
        const continuation = document.createElement('section');
        continuation.className = 'ay-nowords-intro-copy ay-module-text-first';
        continuation.innerHTML = authoredCopy.innerHTML;
        noWordsIntro.after(continuation);
        authoredCopy.innerHTML = '<p>No Words — серия изображений, созданная с помощью генеративного искусственного интеллекта в момент, когда язык перестал справляться с переживанием реальности.</p>';
      }
    }

    if (modernRoot) {
      modernRoot.querySelectorAll(':scope > section:not(.ay-module-experience)').forEach((section) => {
        if (section.matches('.ay-home__paired-grid, .ay-home__triple-grid')) return;
        const children = [...section.children].filter((child) => !child.matches('script, style'));
        if (children.length !== 2) return;
        const mediaChild = children.find((child) => child.matches('figure, picture') || child.querySelector('img, video, iframe'));
        const textChild = children.find((child) => child !== mediaChild && (child.matches('article') || child.querySelector('h2, h3, p, blockquote')));
        if (!mediaChild || !textChild) return;
        section.classList.add('ay-module-grid', 'ay-module-media-text-standard');
        mediaChild.classList.add('ay-module-media-column');
        textChild.classList.add('ay-module-text-column');
      });
    }

    document.querySelectorAll('.ay-home__paired-grid').forEach((grid) => grid.classList.add('ay-module-two-cards'));
    document.querySelectorAll('.ay-home__triple-grid').forEach((grid) => grid.classList.add('ay-module-three-cards'));
    document.querySelectorAll('article p, [class*="__copy"] p').forEach((copy) => copy.parentElement?.classList.add('ay-composition-reading'));

    /* Long, same-level archive image runs use one shared editorial carousel.
       The figures, buttons, images and their authored per-image labels stay in
       place; the enhancement only controls which complete figure is visible. */
    const editorialCarouselSelectors = [
      '.archive-gallery--crypto',
      '.archive-gallery--portal'
    ];

    const setupEditorialCarousels = () => document.querySelectorAll(editorialCarouselSelectors.join(',')).forEach((carousel, carouselIndex) => {
      const currentSlides = [...carousel.children].filter((child) => child.matches('figure'));
      const existingControls = carousel.nextElementSibling?.classList.contains('ay-editorial-carousel__controls')
        ? carousel.nextElementSibling
        : null;
      const completeSetup = currentSlides.length > 0 && existingControls;
      if (carousel.dataset.ayCarouselReady === 'true' && completeSetup) return;

      existingControls?.remove();
      carousel.dataset.ayCarouselReady = 'false';

      if (currentSlides.length < 4) return;

      carousel.dataset.ayCarouselReady = 'true';
      carousel.classList.add('ay-editorial-carousel');
      carousel.tabIndex = 0;
      carousel.setAttribute('role', 'region');
      carousel.setAttribute('aria-roledescription', 'carousel');
      carousel.setAttribute('aria-label', carousel.getAttribute('aria-label') || `Media carousel ${carouselIndex + 1}`);

      const controls = document.createElement('div');
      controls.className = 'ay-editorial-carousel__controls';
      controls.innerHTML = [
        '<button class="ay-editorial-carousel__button ay-editorial-carousel__button--previous" type="button" aria-label="Previous image">&#8592;</button>',
        '<span class="ay-editorial-carousel__status ay-type-meta" aria-live="polite"></span>',
        '<button class="ay-editorial-carousel__button ay-editorial-carousel__button--next" type="button" aria-label="Next image">&#8594;</button>'
      ].join('');
      carousel.after(controls);

      const status = controls.querySelector('.ay-editorial-carousel__status');
      const previous = controls.querySelector('.ay-editorial-carousel__button--previous');
      const next = controls.querySelector('.ay-editorial-carousel__button--next');
      let activeIndex = 0;

      const render = (nextIndex) => {
        const slides = [...carousel.children].filter((child) => child.matches('figure'));
        if (!slides.length) return;
        activeIndex = (nextIndex + slides.length) % slides.length;
        carousel.dataset.ayCarouselIndex = String(activeIndex);
        slides.forEach((slide, index) => {
          const active = index === activeIndex;
          slide.classList.toggle('is-active', active);
          slide.setAttribute('aria-hidden', String(!active));
          slide.setAttribute('aria-roledescription', 'slide');
          slide.setAttribute('aria-label', `${index + 1} of ${slides.length}`);
        });
        status.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      };

      previous.addEventListener('click', () => render(activeIndex - 1));
      next.addEventListener('click', () => render(activeIndex + 1));
      carousel.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        render(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
      });

      new MutationObserver(() => render(activeIndex)).observe(carousel, { childList: true });

      render(0);
    });

    setupEditorialCarousels();
    if (document.querySelector('.archive-page')) {
      window.addEventListener('load', setupEditorialCarousels, { once: true });
      window.setTimeout(setupEditorialCarousels, 250);
      window.setTimeout(setupEditorialCarousels, 1000);
    }

    /* One controlled long-title variant, selected from the authored desktop title shape. */
    const pageTitle = document.querySelector('#allrecords h1');
    if (pageTitle) {
      const directTitleRows = pageTitle.querySelectorAll(':scope > p, :scope > span').length;
      const hasAuthoredBreak = Boolean(pageTitle.querySelector('br'));
      const titleStyle = getComputedStyle(pageTitle);
      const titleLineHeight = Number.parseFloat(titleStyle.lineHeight);
      const isNaturallyMultiline = Number.isFinite(titleLineHeight)
        && pageTitle.getBoundingClientRect().height > titleLineHeight * 1.45;
      if (directTitleRows > 1 || hasAuthoredBreak || isNaturallyMultiline) {
        pageTitle.classList.add('ay-type-display--long');
      }
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeComposition, { once: true });
  else initializeComposition();
})();
