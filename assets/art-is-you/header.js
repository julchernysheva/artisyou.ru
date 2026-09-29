(function () {
  'use strict';
  // Public opening geometry is independent of navigation content.
  if (!document.querySelector('script[data-opening-system-loader]')) {
    const opening = document.createElement('script');
    opening.src = '/assets/art-is-you/opening-system.js?v=godbot-release-20260926';
    opening.dataset.openingSystemLoader = '';
    document.head.append(opening);
  }

  const normalizePath = (value) => {
    const path = value.replace(/index\.html$/, '');
    return path.endsWith('/') ? path : `${path}/`;
  };

  const currentPath = normalizePath(window.location.pathname);
  const isCurrent = (href) => currentPath === normalizePath(href);
  const isSectionCurrent = (prefixes) => prefixes.some((prefix) => currentPath.startsWith(prefix));

  const projectPaths = ['/projects/', '/dark/', '/nikola-lenivets/', '/science-quarter/', '/pavlov-dogs/'];
  const researchNavigation = Object.freeze([
    { key: 'index', index: '00', title: 'Исследования', menuLabel: 'Все исследования', type: 'INDEX', href: '/research/' },
    { key: 'intellect', index: '01', title: 'Русский интеллект', menuLabel: '|RU| Интеллект', type: 'INTELLECTUAL HISTORY', href: '/research/russian-intellect/' },
    { key: 'reverse', index: '02', title: 'Обратный промпт', menuLabel: 'Обратный промпт', type: 'MACHINE READING', href: '/research/reverse-prompt/' },
    { key: 'field', index: '03', title: 'Полевые исследования', menuLabel: 'Полевые исследования', type: 'FIELD METHODS', href: '/research/lab/' },
    { key: 'protoarchive', index: '04', title: 'Преархив', menuLabel: 'Преархив', type: 'MEMORY & EVIDENCE', href: '/protoarchive/' },
    { key: 'bioart', index: '05', title: 'Живое как медиум', menuLabel: 'Живое как медиум', type: 'LIVING SYSTEMS', href: '/research/russian-bioart-history/' }
  ]);
  window.ART_IS_YOU_RESEARCH_NAVIGATION = researchNavigation;
  const researchDetailPaths = researchNavigation.slice(1).map((item) => item.href);
  const publicationPaths = ['/publications/', '/research/essays/', '/research/interview/'];
  const aboutPaths = ['/about/'];

  // Current WORKING_SITE contract; legacy routes are not redirected/promoted.
  const currentProjects = [
    ['/projects/godbot/', 'Богобот'],
    ['/projects/likes-pond/', 'Лайков пруд'],
    ['/projects/artact/', 'АртАкт'],
    ['/projects/talking-city/', 'Говорящий город 2.0'],
    ['/projects/programmer/', 'Медитирующий программист'],
    ['/projects/nowords/', 'Без слов']
  ];
  // Deep links remain available without receiving top-level Projects weight.
  const supportingProjectRuntimePaths = [
    '/projects/talking-city/',
    '/projects/special-projects/',
    '/dark/'
  ];
  // The four former V1.2 source URLs remain runtime-compatible only until
  // Tilda applies the separately approved HTTP 301 rules. They are not menu
  // destinations and never participate in the public Projects contract.
  const v12MigrationSourcePaths = [
    '/design-tests/likes-pond-v1-2/',
    '/design-tests/meditating-programmer-v1-2/',
    '/design-tests/oracle-v1-2/',
    '/design-tests/no-words-v1-2/'
  ];
  const isCurrentProjectRuntime = [...currentProjects.map(([href]) => href), ...supportingProjectRuntimePaths, ...v12MigrationSourcePaths]
    .some((href) => isCurrent(href));
  const currentProjectContract = isCurrentProjectRuntime || isCurrent('/projects/');
  if (currentProjectContract) {
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = '/assets/art-is-you/project-functional-p1.css';
    document.head.append(styles);
    if (isCurrentProjectRuntime) {
      const access = document.createElement('script');
      access.src = '/assets/art-is-you/project-document-access.js';
      document.head.append(access);
    }
  }

  class ArtIsYouHeader extends HTMLElement {
    connectedCallback() {
      const projectCurrent = isSectionCurrent(projectPaths) || isCurrentProjectRuntime;
      const researchCurrent = isCurrent('/research/') || isSectionCurrent(researchDetailPaths);
      const publicationsCurrent = isSectionCurrent(publicationPaths);
      const aboutCurrent = isSectionCurrent(aboutPaths);

      const link = (href, label) => `<a href="${href}"${isCurrent(href) ? ' aria-current="page"' : ''}>${label}</a>`;
      const familyLink = (href, label, prefix) => `<a href="${href}"${isCurrent(href) ? ' aria-current="page"' : (currentPath.startsWith(prefix) ? ' aria-current="location"' : '')}>${label}</a>`;
      const researchLink = (item) => `<li><a class="ay-research-menu__link" href="${item.href}"${isCurrent(item.href) ? ' aria-current="page"' : ''}><span class="ay-research-menu__number">${item.index}</span><span class="ay-research-menu__copy"><span class="ay-research-menu__label">${item.menuLabel}</span><span class="ay-research-menu__type">${item.type}</span></span></a></li>`;

      this.innerHTML = `<header class="ay-desktop-header ay-desktop-header--flat ay-menu-header${researchCurrent ? ' is-research-context' : ''}"${currentProjectContract ? ' data-project-navigation="current"' : ''}>
        <div class="ay-desktop-header__identity">
          <a class="ay-desktop-header__brand-name${isCurrent('/') ? ' is-current' : ''}" href="/" aria-label="ART.IS.YOU — главная страница"${isCurrent('/') ? ' aria-current="page"' : ''}>
            <img class="ay-desktop-header__brand-logo" src="/assets/static.tildacdn.com/artisyoufavikon.png" width="180" height="180" alt="" decoding="async">
            <span>ART.IS.YOU</span>
          </a>
        </div>
        <button class="ay-menu-toggle" type="button" aria-expanded="false" aria-controls="ay-primary-menu" aria-label="Открыть меню"><span>Меню</span><i aria-hidden="true"></i></button>
        <nav aria-label="Основная навигация" class="ay-desktop-header__nav">
          <ul class="ay-desktop-header__menu" id="ay-primary-menu">
            <li class="ay-desktop-header__item ay-menu-group${researchCurrent ? ' is-current' : ''}">
              <div class="ay-menu-toprow">
                <a class="ay-desktop-header__toplink" href="/research/"${isCurrent('/research/') ? ' aria-current="page"' : (researchCurrent ? ' aria-current="location" aria-label="Вернуться к индексу исследований"' : '')}>Исследования</a>
                <button class="ay-menu-trigger ay-menu-caret" type="button" aria-expanded="false" aria-label="Открыть разделы исследований"><span class="ay-desktop-header__arrow" aria-hidden="true"></span></button>
              </div>
              <ul class="ay-desktop-header__submenu ay-menu-panel ay-menu-panel--research">
                ${researchNavigation.map(researchLink).join('')}
              </ul>
            </li>
            <li class="ay-desktop-header__item ay-menu-group${projectCurrent ? ' is-current' : ''}">
              <div class="ay-menu-toprow">
                <a class="ay-desktop-header__toplink" href="/projects/"${isCurrent('/projects/') ? ' aria-current="page"' : (projectCurrent ? ' aria-current="location"' : '')}>Проекты</a>
                <button class="ay-menu-trigger ay-menu-caret" type="button" aria-expanded="false" aria-label="Открыть разделы проектов"><span class="ay-desktop-header__arrow" aria-hidden="true"></span></button>
              </div>
              <ul class="ay-desktop-header__submenu ay-menu-panel ay-menu-panel--projects">
                <li>${link('/projects/', 'Все проекты')}</li>
                ${currentProjects.map(([href, title]) => `<li>${link(href, title)}</li>`).join('')}
              </ul>
            </li>
            <li class="ay-desktop-header__item ay-menu-group${publicationsCurrent ? ' is-current' : ''}">
              <div class="ay-menu-toprow">
                <a class="ay-desktop-header__toplink" href="/publications/"${isCurrent('/publications/') ? ' aria-current="page"' : (publicationsCurrent ? ' aria-current="location"' : '')}>Публикации</a>
                <button class="ay-menu-trigger ay-menu-caret" type="button" aria-expanded="false" aria-label="Открыть разделы публикаций"><span class="ay-desktop-header__arrow" aria-hidden="true"></span></button>
              </div>
              <ul class="ay-desktop-header__submenu ay-menu-panel ay-menu-panel--publications">
                <li>${link('/publications/', 'Все публикации')}</li>
                <li>${familyLink('/research/interview/', 'Интервью', '/research/interview/')}</li>
              </ul>
            </li>
            <li class="ay-desktop-header__item${aboutCurrent ? ' is-current' : ''}">${familyLink('/about/', '<span class="ay-desktop-header__toplink">Обо мне</span>', '/about/')}</li>
          </ul>
        </nav>
        <span class="ay-desktop-header__balance" aria-hidden="true"></span>
      </header>
      <style>
        @layer header-navigation-contract {
          .ay-menu-header .ay-menu-group > .ay-menu-toprow :is(.ay-desktop-header__toplink,.ay-menu-caret){color:var(--ink,#2c2927)!important;background:transparent!important}
          .ay-menu-header .ay-menu-group:is(:hover,:focus-within) > .ay-menu-toprow :is(.ay-desktop-header__toplink,.ay-menu-caret){color:var(--ui-accent,#064cff)!important}
          .ay-menu-header .ay-menu-toprow .ay-desktop-header__arrow{color:inherit!important;border-color:currentColor!important}
          .ay-menu-header .ay-menu-toprow .ay-desktop-header__toplink::after{display:none!important}
          .ay-menu-header .ay-menu-panel > li > a{display:flex!important;align-items:center!important;width:100%!important;box-sizing:border-box!important;min-height:44px!important;color:var(--ink,#2c2927)!important;background:transparent!important;pointer-events:auto!important;transition:none!important}
          .ay-menu-header .ay-menu-panel > li > a :is(span,small,strong){color:inherit!important}
          .ay-menu-header .ay-menu-panel > li > a:is(:hover,:focus-visible){color:var(--ui-accent,#064cff)!important;background:transparent!important}
          .ay-menu-header :is(.ay-menu-panel > li > a,.ay-menu-caret,.ay-desktop-header__toplink):focus-visible{outline:2px solid var(--ui-accent,#064cff)!important;outline-offset:-2px!important;box-shadow:none!important}
          @media(min-width:961px){
            .ay-menu-header .ay-menu-group{position:relative!important}
            .ay-menu-header .ay-menu-group > .ay-menu-panel{top:100%!important;margin-top:0!important;transform:none!important;transition:none!important;pointer-events:auto!important}
            .ay-menu-header .ay-menu-group:not(.is-dismissed):is(:hover,:focus-within,.is-open) > .ay-menu-panel{opacity:1!important;visibility:visible!important}
            .ay-menu-header .ay-menu-group.is-dismissed > .ay-menu-panel{opacity:0!important;visibility:hidden!important}
          }
        }
        html,body{overflow-x:clip!important}
        /* Keep the trigger in viewport even while the menu locks body scrolling. */
        html:root body art-is-you-header{display:block!important;height:66px;position:relative!important;z-index:10000!important}
        html:root body art-is-you-header .ay-menu-header.ay-desktop-header{position:fixed!important;inset:0 0 auto!important;width:100%!important;z-index:10000!important}
        @media(max-width:960px){html:root body art-is-you-header{height:64px}}
        .ay-menu-header button{border:0;margin:0;padding:0;background:none;color:var(--ay-text);font:inherit;cursor:pointer}
        .ay-menu-header .ay-menu-toprow{display:flex;align-items:center;height:100%}
        .ay-menu-header .ay-menu-toprow>.ay-desktop-header__toplink{width:auto}
        .ay-menu-header .ay-menu-trigger{display:flex;align-items:center;gap:8px}
        .ay-menu-header .ay-menu-caret{display:flex;align-items:center;justify-content:center;width:22px;height:32px;margin-left:2px}
        .ay-menu-header .ay-menu-panel--research,
        .ay-menu-header .ay-menu-panel--publications{width:max-content;min-width:0;max-width:calc(100vw - 40px)}
        .ay-menu-header :is(.ay-menu-panel--research,.ay-menu-panel--publications)>li>a{box-sizing:border-box;line-height:18px}
        .ay-menu-header .ay-desktop-header__submenu a[aria-current="location"]{color:var(--ay-accent)!important;background:rgba(208,205,199,.24)}
        .ay-menu-header .ay-menu-panel--research{width:282px;--ay-research-current:#4f7e55}
        .ay-menu-header .ay-menu-panel--research .ay-research-menu__link{display:grid;grid-template-columns:24px minmax(0,1fr);align-items:center;gap:10px;min-height:50px;padding:8px 14px!important;border-bottom:1px solid rgba(208,205,199,.72);color:var(--ay-text)!important;background:transparent;line-height:1.15;transition:color 160ms ease,background-color 160ms ease,border-color 220ms ease}
        .ay-menu-header .ay-menu-panel--research li:last-child .ay-research-menu__link{border-bottom:0}
        .ay-menu-header .ay-research-menu__number{align-self:start;padding-top:2px;color:currentColor;font:500 10px/12px "Source Sans 3",sans-serif;letter-spacing:.06em;opacity:.32}
        .ay-menu-header .ay-research-menu__copy{display:grid;gap:3px;min-width:0}
        .ay-menu-header .ay-research-menu__label{font-size:13px;line-height:16px}
        .ay-menu-header .ay-research-menu__type{color:currentColor;font:500 9px/11px "Source Sans 3",sans-serif;letter-spacing:.06em;opacity:.5;text-transform:uppercase}
        .ay-menu-header .ay-menu-panel--research .ay-research-menu__link:hover,.ay-menu-header .ay-menu-panel--research .ay-research-menu__link:focus-visible{color:var(--ay-accent)!important;background:rgba(6,76,255,.055);outline:none}
        .ay-menu-header .ay-menu-panel--research .ay-research-menu__link:focus-visible{box-shadow:inset 2px 0 0 var(--ay-accent)}
        .ay-menu-header .ay-menu-panel--research .ay-research-menu__link[aria-current="page"]{color:var(--ay-research-current)!important;background:rgba(79,126,85,.07)}
        .ay-menu-header .ay-menu-panel--research .ay-research-menu__link[aria-current="page"] .ay-research-menu__number{opacity:1}
        .ay-menu-header .ay-menu-panel--projects{padding:0}
        .ay-menu-header .ay-menu-panel--projects>li>a{display:flex;align-items:center;box-sizing:border-box;min-height:50px;padding:8px 14px!important;border-bottom:1px solid rgba(184,177,168,.72);color:var(--ay-text)!important;background:transparent;line-height:18px;transition:color 160ms ease,background-color 160ms ease,border-color 220ms ease}
        .ay-menu-header .ay-menu-panel--projects>li:last-child>a{border-bottom:0}
        .ay-menu-header .ay-menu-panel--projects>li>a:hover,.ay-menu-header .ay-menu-panel--projects>li>a:focus-visible{color:var(--ay-accent)!important;background:rgba(6,76,255,.055);outline:none}
        .ay-menu-header .ay-menu-panel--projects>li>a:focus-visible{box-shadow:inset 2px 0 0 var(--ay-accent)}
        .ay-menu-header .ay-menu-panel--projects>li>a[aria-current="page"]{color:var(--ay-accent)!important;background:rgba(6,76,255,.07)}
        .ay-menu-header .ay-menu-nested-trigger{display:flex;width:100%;align-items:center;justify-content:space-between;padding:9px 18px;text-align:left;font-size:13px;line-height:1.25}
        .ay-menu-header .ay-menu-nested-trigger:hover,.ay-menu-header .ay-menu-nested-trigger:focus-visible{color:var(--ay-accent);background:rgba(208,205,199,.24);outline:none}
        .ay-menu-toggle{display:none}
        @media(min-width:961px){
          .ay-menu-header .ay-menu-group:not(.is-open):not(:hover):not(:focus-within)>.ay-menu-panel{opacity:0!important;visibility:hidden!important;transition-delay:0s!important}
          .ay-menu-header .ay-desktop-header__submenu{max-height:min(76vh,620px);overflow-y:auto}
          .ay-menu-header .ay-desktop-header__submenu--nested{overflow-y:auto}
          .ay-menu-group.is-open>.ay-menu-panel,.ay-desktop-header__nested.is-open>.ay-menu-panel{opacity:1!important;visibility:visible!important;transform:translateY(0)!important;transition-delay:0s!important}
        }
        @media(max-width:960px){
          html.ay-menu-lock,html.ay-menu-lock body{overflow:hidden!important}
          .ay-menu-header{grid-template-columns:1fr auto!important;height:64px!important;overflow:visible}
          .ay-menu-header .ay-menu-toggle{display:flex;align-items:center;gap:9px;justify-self:end;min-width:64px;min-height:44px;font-size:13px!important}
          .ay-menu-header .ay-menu-toggle i{display:block;width:14px;height:10px;border-top:1px solid currentColor;border-bottom:1px solid currentColor}
          .ay-menu-header .ay-desktop-header__nav{display:none;position:absolute;top:63px;left:0;right:0;height:calc(100vh - 63px);height:calc(100dvh - 63px);overflow:auto;overscroll-behavior:contain;background:#EFEFEA;border-bottom:1px solid var(--ay-line);padding:12px 20px 40px}
          .ay-menu-header.is-mobile-open .ay-desktop-header__nav{display:block}
          .ay-menu-header .ay-desktop-header__menu{display:block;height:auto}
          .ay-menu-header .ay-desktop-header__item{display:block;height:auto;border-bottom:1px solid var(--ay-line)}
          .ay-menu-header .ay-menu-toprow{display:grid;grid-template-columns:1fr 40px;height:auto}
          .ay-menu-header .ay-desktop-header__toplink{display:flex;width:100%;align-items:center;justify-content:space-between;padding:15px 0;font-size:14px!important;text-align:left}
          .ay-menu-header .ay-menu-caret{width:40px;height:46px;margin:0;justify-self:end}
          .ay-menu-header a>.ay-desktop-header__toplink{padding:15px 0}
          .ay-menu-header .ay-desktop-header__toplink::after{display:none}
          .ay-menu-header .ay-desktop-header__submenu{display:none;position:static;min-width:0;max-height:none;margin:0;padding:0 0 12px 14px;border:0;border-left:1px solid var(--ay-line);box-shadow:none;opacity:1;visibility:visible;transform:none;background:transparent;transition:none}
          .ay-menu-header .is-open>.ay-menu-panel{display:block}
          .ay-menu-header .ay-desktop-header__submenu a,.ay-menu-header .ay-menu-nested-trigger{display:flex;align-items:center;min-height:44px;padding:8px 12px;font-size:13px!important;white-space:normal}
          .ay-menu-header .ay-menu-panel--research{width:100%;max-width:none}
          .ay-menu-header .ay-menu-panel--research .ay-research-menu__link{min-height:52px;padding:10px 12px!important}
          .ay-menu-header .ay-menu-panel--projects{padding-bottom:0}
          .ay-menu-header .ay-menu-panel--projects>li>a{min-height:52px;padding:10px 12px!important}
          .ay-menu-header .ay-desktop-header__submenu--nested{margin:3px 0 5px 12px}
          .ay-menu-header .ay-desktop-header__arrow{margin-right:3px}
          .ay-menu-header .ay-desktop-header__brand-name{display:inline-flex!important;align-items:center!important;gap:8px!important;min-height:44px!important}
        }
        @media(min-width:961px){
          html:root body art-is-you-header .ay-menu-header.ay-desktop-header.ay-desktop-header--flat{position:fixed!important;top:0!important;left:0!important;right:0!important;width:100%!important;max-width:none!important;height:66px!important;min-height:66px!important;margin:0!important;padding:0 32px!important;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;align-items:center!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__identity{grid-column:1!important;justify-self:start!important;gap:9px!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__brand-mark{width:20px!important;height:20px!important;min-width:20px!important;min-height:20px!important;flex:0 0 20px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__brand-logo{width:20px!important;height:20px!important;min-width:20px!important;min-height:20px!important;flex:0 0 20px!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__nav{grid-column:2!important;justify-self:center!important;height:100%!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__balance{grid-column:3!important;justify-self:end!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__menu{height:100%!important;width:auto!important;max-width:none!important;display:flex!important;gap:36px!important;align-items:stretch!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__item{height:100%!important;display:flex!important;align-items:center!important}
          html:root body art-is-you-header .ay-menu-header .ay-menu-toprow{height:100%!important;display:flex!important;align-items:center!important}
          html:root body art-is-you-header .ay-menu-header .ay-menu-caret{width:22px!important;min-width:22px!important;height:32px!important;min-height:32px!important;margin-left:2px!important}
          html:root body art-is-you-header .ay-menu-header :is(.ay-desktop-header__brand-name,.ay-desktop-header__toplink){font-family:"Source Sans 3",sans-serif!important;font-size:14px!important;font-weight:500!important;line-height:18px!important;letter-spacing:-.01em!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__brand-name{display:inline-flex!important;align-items:center!important;gap:9px!important;height:auto!important;min-height:20px!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__toplink{height:auto!important;min-height:0!important;margin:0!important;padding:0!important}
          html:root body art-is-you-header .ay-menu-header .ay-menu-toprow>.ay-desktop-header__toplink{display:inline-flex!important;align-items:center!important}
          html:root body art-is-you-header .ay-menu-header .ay-desktop-header__item>a{height:auto!important;min-height:0!important;margin:0!important;padding:0!important;display:inline-flex!important;align-items:center!important}
        }
      </style>`;

      const header = this.querySelector('.ay-menu-header');
      const mobileToggle = this.querySelector('.ay-menu-toggle');
      const groups = [...this.querySelectorAll('.ay-menu-group')];
      const desktopMedia = matchMedia('(min-width:961px)');
      const desktop = () => desktopMedia.matches;
      const triggerFor = group => group.querySelector('.ay-menu-caret');
      const setOpen = (group, open) => {
        group.classList.toggle('is-open', open);
        triggerFor(group).setAttribute('aria-expanded', String(open));
        if (!open) group.classList.remove('is-hover-open');
      };
      const closeGroups = except => groups.forEach(group => { if (group !== except) setOpen(group, false); });
      const setMobileOpen = open => {
        header.classList.toggle('is-mobile-open', open);
        document.documentElement.classList.toggle('ay-menu-lock', open);
        mobileToggle.setAttribute('aria-expanded', String(open));
        mobileToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
      };
      const closeAll = () => { closeGroups(); setMobileOpen(false); };
      groups.forEach((group, index) => {
        const trigger = triggerFor(group), panel = group.querySelector('.ay-menu-panel');
        panel.id = `ay-current-menu-${index}`;
        trigger.setAttribute('aria-controls', panel.id);
        trigger.addEventListener('click', event => {
          event.stopPropagation();
          const open = !group.classList.contains('is-open');
          closeGroups(group); group.classList.toggle('is-dismissed', !open); setOpen(group, open);
        });
        group.addEventListener('pointerenter', event => {
          if (!desktop() || event.pointerType !== 'mouse' || group.classList.contains('is-open')) return;
          group.classList.remove('is-dismissed'); closeGroups(group); setOpen(group, true);
        });
        group.addEventListener('focusin', event => {
          if (!desktop() || group.contains(event.relatedTarget)) return;
          group.classList.remove('is-dismissed'); closeGroups(group); setOpen(group, true);
        });
        group.addEventListener('pointerleave', () => { if (desktop() && !group.contains(document.activeElement)) { group.classList.remove('is-dismissed'); setOpen(group, false); } });
        group.addEventListener('focusout', event => { if (desktop() && !group.contains(event.relatedTarget)) { group.classList.remove('is-dismissed'); setOpen(group, false); } });
      });
      mobileToggle.addEventListener('click', () => {
        const open = !header.classList.contains('is-mobile-open');
        closeGroups(); setMobileOpen(open);
      });
      this.addEventListener('keydown', event => {
        if (event.key === 'Tab' && header.classList.contains('is-mobile-open')) {
          const focusable = [...new Set([mobileToggle, ...header.querySelectorAll('a[href],button:not([disabled])')])]
            .filter(node => node.offsetParent !== null);
          const first = focusable[0], last = focusable.at(-1);
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
          return;
        }
        if (event.key !== 'Escape') return;
        event.preventDefault();
        const wasMobileOpen = header.classList.contains('is-mobile-open');
        const trigger = groups.find(group => group.contains(document.activeElement)) || groups.find(group => group.classList.contains('is-open'));
        closeAll();
        if (wasMobileOpen) mobileToggle.focus(); else if (trigger) { triggerFor(trigger).focus(); trigger.classList.add('is-dismissed'); setOpen(trigger, false); }
      });
      document.addEventListener('click', event => { if (!this.contains(event.target)) closeAll(); });
      desktopMedia.addEventListener('change', closeAll);
    }
  }

  if (!customElements.get('art-is-you-header')) customElements.define('art-is-you-header', ArtIsYouHeader);
})();
