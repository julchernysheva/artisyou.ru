// EVOLVE PASS 01 / desktop steps 1–2. Mobile and shared renderer stay intact.
(() => {
  if (location.pathname.replace(/\/$/, '') !== '/projects') return;
  function mount() {
    const original = document.querySelector('.index-baseline__projects-layout');
    if (!original || document.querySelector('#projects-evolve-desktop')) return;
    const media = matchMedia('(min-width: 769px)');
    let desktop, stabilize;
    function build() {
      // Read the current renderer's records and confirmed media, rather than
      // maintaining a second copy of its descriptions, operations or routes.
      const originalRows = [...original.querySelectorAll('.index-baseline__project-item')];
      const oldDetail = original.querySelector('.index-baseline__selected-content');
      const records = originalRows.map(row => {
        row.dispatchEvent(new MouseEvent('mouseenter'));
        const link = row.querySelector('a');
        const image = oldDetail.querySelector('img');
        return {
          route: link.getAttribute('href'), title: row.querySelector('strong').textContent,
          description: oldDetail.querySelector('.index-baseline__selected-description').textContent,
          operation: oldDetail.querySelector('.index-baseline__project-process').textContent,
          src: image?.getAttribute('src') || '', alt: image?.alt || ''
        };
      });
      originalRows[0].dispatchEvent(new MouseEvent('mouseenter'));
      const identities = [
        { route: '/projects/godbot/', format: 'Цифровая мифология', date: '2018–2026', role: 'DOCUMENTATION / Физическая реализация', width: 1680, height: 2240 },
        { route: '/projects/likes-pond/', format: 'Медиаинсталляция', date: '2018', role: 'DOCUMENTATION / Реализация', width: 1920, height: 1080 },
        { route: '/projects/artact/', format: 'Art corpus', role: '', width: 0, height: 0 },
        { route: '/projects/talking-city/', title: 'Говорящий город 2.0', format: 'Интерактивный арт-объект', role: 'RENDER / Оракул', width: 1680, height: 945 },
        { route: '/projects/programmer/', format: 'Перформанс', date: '2018', role: 'PERFORMANCE / Документация', width: 960, height: 640 },
        { route: '/projects/nowords/', title: 'Без слов', format: 'AI-арт · Серия из трёх изображений', date: '2022', role: 'ARTWORK / Изображение 01 из 03', width: 1024, height: 1024 }
      ];
      const projects = identities.map((identity, i) => ({ ...records.find(p => p.route === identity.route), ...identity, number: String(i + 1).padStart(2, '0') }));
      const el = (tag, cls, text) => { const e = document.createElement(tag); e.className = cls; if (text) e.textContent = text; return e; };
      const metadata = p => [p.format, p.date].filter(Boolean).join(' · ');
      desktop = el('div', 'index-baseline__two-column index-baseline__projects-layout');
      desktop.id = 'projects-evolve-desktop';
      const list = el('nav', 'projects-evolve__selector'); list.setAttribute('aria-label', 'Выбор проекта');
      const field = el('aside', 'projects-evolve__field'); field.setAttribute('aria-live', 'polite');
      desktop.append(el('div','index-navigation__label','ВЫБРАТЬ ПРОЕКТ'),el('div','index-navigation__label','ПРЕДПРОСМОТР'),list, field);
      let current = 0, active = null;
      const content = index => {
        const p = projects[index];
        const title = el('h2', 'projects-evolve__title', p.title);
        const meta = el('p', 'projects-evolve__metadata', metadata(p));
        const header = el('header', 'index-preview__header');
        const heading = el('div', 'index-preview__identity'); heading.append(title, meta);
        const number=el('span','index-preview__number',p.number);
        header.append(number, heading);
        let figure = null;
        if (p.src) {
          figure = el('figure', 'projects-evolve__evidence');
          const image = el('img', 'projects-evolve__image');
          image.src = p.src; image.alt = p.alt; image.width = p.width; image.height = p.height; image.decoding = 'async';
          const area=el('div','index-preview__media');area.append(image);
          figure.append(area, el('figcaption', 'projects-evolve__caption', p.role));
        }
        if(p.route==='/projects/artact/')figure=window.ayCreateArtactIndexVisual();
        const cta = el('a', 'projects-evolve__cta', 'Открыть проект →'); cta.href = p.route;
        return [header, ...(figure ? [figure] : []),
          el('p', 'projects-evolve__description', p.description), cta];
      };
      const preview = () => {
        const index = current;
        list.querySelectorAll('.projects-evolve__row').forEach((row, i) => {
          row.classList.remove('is-selected');
          row.classList.toggle('is-preview', i === index);
          row.querySelector('a').removeAttribute('aria-current');
        });
        if (active === index) return;
        active = index;
        field.replaceChildren(...content(index));
      };
      projects.forEach((p, i) => {
        const row = el('div', 'projects-evolve__row');
        const link = el('a', 'projects-evolve__link'); link.href = p.route;
        const copy = el('span', 'projects-evolve__identity');
        copy.append(el('strong', 'projects-evolve__name', p.title), el('small', 'projects-evolve__metadata', metadata(p)));
        const arrow = el('span', 'projects-evolve__link-arrow', '→'); arrow.setAttribute('aria-hidden', 'true');
        link.append(el('span', 'projects-evolve__number', p.number), copy, arrow);
        row.append(link); list.append(row);
        row.addEventListener('mouseenter', () => { current = i; preview(); });
        link.addEventListener('focus', () => { current = i; preview(); });
      });
      // Pointer exit and focus exit preserve the last inspected record, so
      // moving to its media or CTA never restores a stale default preview.
      preview();
      let measuredWidth = 0;
      stabilize = () => {
        if (!desktop.isConnected || !media.matches) return;
        const width = field.getBoundingClientRect().width;
        if (!width) return;
        // Measure the same six content layouts off-flow at their real width.
        // Keep the tallest content field; the shared media slot never crops.
        const probe = field.cloneNode(false);
        probe.removeAttribute('aria-live'); probe.setAttribute('aria-hidden', 'true');
        probe.inert = true;
        probe.style.cssText = `position:absolute;visibility:hidden;pointer-events:none;width:${width}px;min-height:0!important;height:auto;top:0;left:0;`;
        desktop.append(probe);
        let height = 0;
        projects.forEach((_, i) => {
          probe.replaceChildren(...content(i));
          height = Math.max(height, probe.getBoundingClientRect().height);
        });
        probe.remove();
        field.style.minHeight = `${Math.ceil(height)}px`;
        measuredWidth = width;
      };
      new ResizeObserver(() => {
        if (desktop.isConnected && field.getBoundingClientRect().width !== measuredWidth) stabilize();
      }).observe(field);
      document.fonts.ready.then(stabilize);
    }
    function sync() {
      if (media.matches) {
        if (!desktop) build();
        if (original.isConnected) original.replaceWith(desktop);
        stabilize();
      } else if (desktop?.isConnected) {
        // Restore the original live nodes, including their existing listeners.
        desktop.replaceWith(original);
      }
    }
    sync(); media.addEventListener('change', sync);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
