/* Approved Project first-screen integration. Moves existing nodes; no media or copy is duplicated. */
(() => {
  const route = location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  const configurations = {
    godbot: {
      host: '.ay-project-top__hero', title: '.ay-project-top__title', lead: '.ay-project-top__descriptor',
      meta: '.ay-project-top__meta', media: ['.ay-project-top__hero-media'], className: 'godbot'
    },
    'likes-pond': {
      host: '.likes12-opening', title: '.likes12-opening__title h1', lead: '.likes12-opening__title p',
      meta: '.likes12-opening__meta', media: ['.likes12-opening__water'], className: 'likes-pond'
    },
    artact: {
      host: '.artact-opening', title: '.artact-opening__hero h1', lead: '.artact-opening__hero > p',
      meta: '.artact-opening__technical', media: ['.artact-opening__stage'], className: 'artact',
      retained: '.artact-opening__context'
    },
    'talking-city': {
      host: '.oracle12-opening', title: '.oracle12-opening h1', lead: '.oracle12-opening > div > p',
      meta: '.oracle12-opening__meta', media: ['.oracle12-opening figure'], className: 'talking-city'
    },
    programmer: {
      host: '.programmer12-score', title: '.programmer12-instruction h1',
      lead: '.programmer12-instruction h1 + p', meta: '.programmer12-score > p',
      media: ['.programmer12-score figure', '.programmer12-instruction figure'],
      extra: '.programmer12-instruction .v12-index', className: 'programmer',
      secondaryHost: '.programmer12-instruction'
    },
    nowords: {
      host: '.nowords12-entry', title: '.nowords12-entry h1', lead: '.nowords12-entry__lead',
      meta: '.nowords12-entry .v12-index', media: ['.nowords12-entry figure'], className: 'nowords'
    }
  };
  const config = configurations[route];
  if (!config) return;
  const mount = () => {
    const host = document.querySelector(config.host);
    const title = document.querySelector(config.title);
    const lead = document.querySelector(config.lead);
    const meta = document.querySelector(config.meta);
    const media = config.media.map(selector => document.querySelector(selector));
    if (!host || !title || !lead || !meta || media.some(node => !node)) return;

    const hero = document.createElement('section');
    hero.className = `ay-approved-hero ay-approved-hero--${config.className}`;
    hero.setAttribute('aria-label', `${title.textContent.trim()} — вступление проекта`);
    host.before(hero);
    meta.classList.add('ay-approved-hero__meta');
    title.classList.add('ay-approved-hero__title');
    lead.classList.add('ay-approved-hero__lead');
    hero.append(meta, title, lead);
    const godbotDate = route === 'godbot' ? meta.querySelector('span:last-child') : null;
    if (godbotDate) {
      godbotDate.classList.add('ay-approved-hero__date');
      hero.append(godbotDate);
    }
    media.forEach((node, index) => {
      node.classList.add('ay-approved-hero__media', `ay-approved-hero__media--${index + 1}`);
      hero.append(node);
    });
    if (config.extra) {
      const extra = document.querySelector(config.extra);
      if (extra) { extra.classList.add('ay-approved-hero__extra'); hero.append(extra); }
    }
    if (config.retained) {
      host.querySelectorAll(':scope > :not(' + config.retained + ')').forEach(node => node.remove());
    } else {
      host.remove();
    }
    if (config.secondaryHost) document.querySelector(config.secondaryHost)?.remove();
    document.body.classList.add('ay-approved-project-hero');

    // Older route styles use highly specific !important typography. Keep the
    // approved shared contract authoritative after those styles are loaded.
    const applyAnchors = () => {
      const mobile = innerWidth <= 800;
      const x = mobile ? 20 : 32;
      const offset = innerWidth <= 600 ? 64 : innerWidth <= 800 ? 64 : 66;
      const values = [
        [title, mobile ? 128 : 136, mobile ? innerWidth - 40 : 760,
          mobile ? 44 : 64, mobile ? 44 : 64],
        [lead, mobile ? 280 : 298,
          mobile ? (route === 'godbot' ? 350 : Math.min(440, innerWidth - 40)) : 440,
          mobile ? 16 : 18, mobile ? 20 : 23]
      ];
      for (const [element, y, width, size, lineHeight] of values) {
        const declarations = {
          position: 'absolute', left: `${x}px`, top: `${y - offset}px`,
          width: `${width}px`, 'font-family': "'Source Sans 3', sans-serif",
          'font-size': `${size}px`, 'font-weight': '400',
          'line-height': `${lineHeight}px`, 'text-transform': 'none',
          'letter-spacing': element === title ? '-.025em' : '0'
        };
        for (const [property, value] of Object.entries(declarations)) {
          if (hero.hasAttribute('data-opening-shell') && ['position', 'left', 'top', 'width'].includes(property)) continue;
          element.style.setProperty(property, value, 'important');
        }
      }
      if (godbotDate) {
        const dateDeclarations = innerWidth <= 800 ? {
          position: 'absolute', left: '20px', right: '20px', width: 'auto',
          top: `${lead.getBoundingClientRect().bottom - hero.getBoundingClientRect().top + 12}px`,
          'font-size': '11px', 'line-height': '16px', 'white-space': 'normal',
          'text-align': 'left'
        } : {
          position: 'absolute', left: 'auto', right: '32px', width: 'auto',
          top: '24px', 'font-size': '11px', 'line-height': '14px',
          'white-space': 'nowrap', 'text-align': 'right'
        };
        for (const [property, value] of Object.entries(dateDeclarations)) {
          if (hero.hasAttribute('data-opening-shell') && ['position', 'left', 'right', 'top', 'width', 'white-space'].includes(property)) continue;
          godbotDate.style.setProperty(property, value, 'important');
        }
      }
    };
    applyAnchors();
    addEventListener('resize', applyAnchors, { passive: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
