// STEP 3: mobile-only inline disclosure. Desktop source and handlers stay intact.
(() => {
  if (location.pathname.replace(/\/$/, '') !== '/projects') return;
  function mount() {
    const root = document.querySelector('.index-baseline__projects-layout');
    if (!root) return;
    const media = matchMedia('(max-width: 768px)');
    let originalChildren, list, projects;
    const saved = history.state?.projectsIndexMobile;
    let selected = Number.isInteger(saved) && saved >= -1 && saved < 6 ? saved : 0;
    const el = (tag, cls, text) => {
      const node = document.createElement(tag); node.className = cls;
      if (text) node.textContent = text;
      return node;
    };
    function build() {
      const rows = [...root.querySelectorAll('.index-baseline__project-item')];
      const detail = root.querySelector('.index-baseline__selected-content');
      const records = rows.map(row => {
        row.dispatchEvent(new MouseEvent('mouseenter'));
        const image = detail.querySelector('img');
        return {
          route: row.querySelector('a').getAttribute('href'),
          description: detail.querySelector('.index-baseline__selected-description').textContent,
          operation: detail.querySelector('.index-baseline__project-process').textContent,
          src: image?.getAttribute('src') || '', alt: image?.alt || ''
        };
      });
      rows[0].dispatchEvent(new MouseEvent('mouseenter'));
      const identities = [
        {route:'/projects/godbot/',title:'Богобот',meta:'Цифровая мифология · 2018–2026',role:'DOCUMENTATION / Физическая реализация',width:1680,height:2240},
        {route:'/projects/likes-pond/',title:'Лайков пруд',meta:'Медиаинсталляция · 2018',role:'DOCUMENTATION / Реализация',width:1920,height:1080},
        {route:'/projects/artact/',title:'АртАкт',meta:'Art corpus',role:'',width:0,height:0},
        {route:'/projects/talking-city/',title:'Говорящий город 2.0',meta:'Интерактивный арт-объект',role:'RENDER / Оракул',width:1680,height:945},
        {route:'/projects/programmer/',title:'Медитирующий программист',meta:'Перформанс · 2018',role:'PERFORMANCE / Документация',width:960,height:640},
        {route:'/projects/nowords/',title:'Без слов',meta:'AI-art · Серия из трёх изображений · 2022',role:'ARTWORK / Изображение 01 из 03',width:1024,height:1024}
      ];
      projects = identities.map(identity => ({...records.find(p => p.route === identity.route), ...identity}));
      list = el('div', 'projects-mobile__list');
      projects.forEach((p, i) => {
        const row = el('section', 'projects-mobile__row');
        const heading = el('h2', 'projects-mobile__heading');
        const button = el('button', 'projects-mobile__toggle'); button.type = 'button';
        button.id = `projects-mobile-toggle-${i}`;
        button.setAttribute('aria-controls', `projects-mobile-panel-${i}`);
        const identity = el('span', 'projects-mobile__identity');
        identity.append(el('span', 'projects-mobile__name', p.title), el('span', 'projects-mobile__metadata', p.meta));
        const cue = el('span', 'projects-mobile__cue', '+'); cue.setAttribute('aria-hidden', 'true');
        const number = el('span', 'projects-mobile__number', String(i + 1).padStart(2, '0')); number.setAttribute('aria-hidden', 'true');
        button.append(number, identity, cue); heading.append(button);
        const panel = el('div', 'projects-mobile__panel'); panel.id = `projects-mobile-panel-${i}`;
        panel.setAttribute('role', 'region'); panel.setAttribute('aria-labelledby', button.id);
        let figure = null;
        if (p.src) {
          figure = el('figure', 'projects-mobile__evidence');
          const image = el('img', 'projects-mobile__image'); image.src = p.src; image.alt = p.alt;
          image.width = p.width; image.height = p.height; image.decoding = 'async';
          figure.append(image, el('figcaption', 'projects-mobile__caption', p.role));
        }
        if(p.route==='/projects/artact/')figure=window.ayCreateArtactIndexVisual();
        const cta = el('a', 'projects-mobile__cta', 'Открыть проект →'); cta.href = p.route;
        panel.append(...(figure ? [figure] : []), el('p', 'projects-mobile__description', p.description), cta);
        row.append(heading, panel); list.append(row);
        button.addEventListener('click', () => {
          const previousTop = button.getBoundingClientRect().top;
          selected = selected === i ? -1 : i; update();
          // Persist only this history entry, without changing URLs or routing.
          try { history.replaceState({...history.state, projectsIndexMobile: selected}, ''); } catch (_) {}
          const rect = button.getBoundingClientRect();
          const headerBottom = document.querySelector('.ay-menu-header')?.getBoundingClientRect().bottom || 0;
          const targetTop = Math.max(Math.max(0, headerBottom) + 12,
            Math.min(previousTop, innerHeight - rect.height - 180));
          const correction = rect.top - targetTop;
          if (Math.abs(correction) > 1) window.scrollBy({top:correction, behavior:'instant'});
        });
      });
      update();
    }
    function update() {
      [...list.children].forEach((row, i) => {
        const open = i === selected;
        row.classList.toggle('is-open', open);
        row.querySelector('button').setAttribute('aria-expanded', String(open));
        row.querySelector('.projects-mobile__panel').hidden = !open;
        row.querySelector('.projects-mobile__cue').textContent = open ? '−' : '+';
      });
    }
    function activate() {
      if (!media.matches || !root.isConnected || root.id === 'projects-evolve-mobile') return;
      if (!list) build();
      originalChildren = [...root.childNodes];
      root.id = 'projects-evolve-mobile'; root.replaceChildren(list);
    }
    // Registered before the desktop module: restore original live nodes before
    // its desktop build; defer mobile activation until its mobile restore ends.
    media.addEventListener('change', () => {
      if (media.matches) requestAnimationFrame(activate);
      else if (root.id === 'projects-evolve-mobile') {
        root.removeAttribute('id'); root.replaceChildren(...originalChildren);
      }
    });
    if (media.matches) activate();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();
