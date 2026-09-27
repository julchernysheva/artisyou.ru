(() => {
  'use strict';

  // Pre-exported index-only poster. The canonical detail corpus is untouched.
  window.ayCreateArtactIndexVisual = () => {
    const figure=document.createElement('figure');figure.className='index-artact-visual';
    figure.setAttribute('aria-label','АртАкт — пять художественных ответов');
    const area=document.createElement('div');area.className='index-preview__media';
    const image=document.createElement('img');
    image.src='/assets/art-is-you/artact/index-preview-five-works.jpg';
    image.width=2752;image.height=964;image.alt='АртАкт: Любовь, Ненависть, Жизнь, Смерть и Мечта — композиция пяти работ';
    image.loading='eager';area.append(image);figure.append(area,document.createElement('figcaption'));
    figure.dataset.source='/projects/artact/';
    return figure;
  };

  const projects = [
    {
      id: '01', title: 'Богобот', type: 'ЦИФРОВАЯ МИФОЛОГИЯ', year: '2018–2026',
      description: 'От храма для бота — к цифровой мифологии со своим языком, архивом и персонажами.',
      logic: 'Документы → персонажи → связи → мир, собираемый читателем.',
      route: '/projects/godbot/', visual: '/assets/static.tildacdn.com/_27072018_21_58_12.jpg', alt: 'Храм Богобота, Архстояние 2018: посетители у красной кирпичной инсталляции'
    },
    {
      id: '02', title: 'Лайков пруд', type: 'МЕДИАИНСТАЛЛЯЦИЯ', year: '2018',
      description: 'Like / dislike выходят за пределы интерфейса и становятся реальными объектами.',
      logic: 'Цифровая реакция → физический знак → публичное пространство.',
      route: '/projects/likes-pond/', visual: '/assets/art-is-you/likes-pond-primary-video-frame-00-50.jpg', alt: 'Лайков пруд: ночной вид пруда со световыми знаками и отражениями'
    },
    {
      id: '03', title: 'АртАкт', type: 'ART CORPUS', year: '',
      description: 'Визуальные ответы современных художников собираются вокруг повторяющихся тем.',
      logic: 'Тема → авторский ответ → повторение протокола → художественный корпус.',
      route: '/projects/artact/', visualCorpus: true, alt: ''
    },
    {
      id: '04', title: 'Говорящий город 2.0', type: 'ИНТЕРАКТИВНЫЙ ОБЪЕКТ', year: '',
      description: 'Живая архитектура отвечает на личный вопрос, но окончательное решение оставляет человеку.',
      logic: 'Вопрос → сигнал «да», «нет» или «возможно» → решение человека.',
      route: '/projects/talking-city/', visual: '/assets/art-is-you/oracle-space-preview-p72b.jpg', alt: 'Оракул: пространственная конфигурация интерактивного объекта'
    },
    {
      id: '05', title: 'Медитирующий программист', type: 'ПЕРФОРМАНС', year: '',
      description: 'Программный код соединяется с ба-гуа и каллиграфией, а восемь материнских плат становятся партитурой.',
      logic: 'Код → ба-гуа и каллиграфия → пространственная партитура.',
      route: '/projects/programmer/', visual: '/assets/static.tildacdn.com/30739110_19178589882.jpg', alt: 'Медитирующий программист: исполнительница среди материнских плат и листов'
    },
    {
      id: '06', title: 'Без слов', type: 'СЕРИЯ ИЗОБРАЖЕНИЙ', year: '2022',
      description: 'Когда для состояния не находится слов, изображение становится другим способом его зафиксировать.',
      logic: 'Состояние → граница языка → изображение.',
      route: '/projects/nowords/', visual: '/assets/static.tildacdn.com/IMAGE_2022-03-22_133.jpg', alt: 'Без слов, изображение 01 из серии'
    }
  ];


  const research = [
    { id: '01', title: 'Русский интеллект', type: 'INTELLECTUAL HISTORY', question: 'Как идеи, люди и институты складываются в историю вычислительной культуры?', process: 'Люди → школы → методы → технологии.', conclusion: 'История технологий складывается из траекторий передачи знания между поколениями и институциями, а не из изолированных эпох.', route: '/research/russian-intellect/', visual: '/assets/art-is-you/russian-intellect-poster.webp', alt: 'Карта интеллектуальной генеалогии' },
    { id: '02', title: 'Обратный промпт', type: 'MACHINE READING', question: 'Что сохраняется и теряется, когда произведение переводится из изображения в текст и обратно?', process: 'Оригинал → экфрасис → промпт → две системы → сопоставление.', conclusion: 'Корпус показывает диапазон машинных операций — от прерывания до нормализации, редукции и перекодировки.', route: '/research/reverse-prompt/', visual: '/assets/art-is-you/research/reverse-prompt/reverse-prompt-experiment-schema-snob.png', alt: 'Схема эксперимента Обратный промпт' },
    { id: '03', title: 'Полевые исследования', type: 'FIELD METHODS', question: 'Как наблюдение территории превращается в проектное решение?', process: 'Территория → наблюдение → метод → материал.', conclusion: 'Территория меняет проект через наблюдение, архив, поведение, материал и моделирование, переводя условия места в художественную форму.', route: '/research/lab/', visual: '/assets/static.tildacdn.com/topviewcube_.jpg', alt: 'Научный квартал, Куб Докучаева, 2021: вид сверху' },
    { id: '04', title: 'Преархив', type: 'MEMORY & EVIDENCE', question: 'Почему сконструированное прошлое начинает выглядеть как документ?', process: 'Кейс → режим документа → механизм доверия → сопоставление.', conclusion: 'Документ может создавать прошлое, авторов, институции и материальные следы для вымышленного мира.', route: '/protoarchive/', visual: '/assets/art-is-you/research/prearchive-vertical-temp.png', alt: 'Документ и типология исследования Преархив' },
    { id: '05', title: 'Живое как медиум', type: 'LIVING SYSTEMS', question: 'Что меняется в произведении, когда живое становится героем?', process: 'Объект → модель → материал → действующая система.', conclusion: 'Сопоставление показывает изменение художественной операции с живым — от описания и моделирования к включению в материал и условия работы.', route: '/research/russian-bioart-history/', visual: '/assets/art-is-you/research/living-metabolai-2017.jpg', alt: '18 Apples, MetabolA.I., 2017: DIY-биопринтер в лабораторной среде' }
  ];

  function visualMarkup(item, kind) {
    if (item.visualCorpus) return window.ayCreateArtactIndexVisual().outerHTML;
    if (item.visual === 'morphology') return `<figure class="index-baseline__selected-visual index-baseline__selected-visual--morphology" role="img" aria-label="Морфология живого: объект, модель, материал, действующая система"><svg viewBox="0 0 900 230" aria-hidden="true"><path d="M98 116H800"/><circle cx="100" cy="116" r="8"/><circle cx="330" cy="116" r="8"/><circle cx="565" cy="116" r="8"/><circle cx="800" cy="116" r="8"/><text x="100" y="72">ОБЪЕКТ</text><text x="330" y="72">МОДЕЛЬ</text><text x="565" y="72">МАТЕРИАЛ</text><text x="800" y="72">ДЕЙСТВУЮЩАЯ</text><text x="800" y="92">СИСТЕМА</text></svg></figure>`;
    return `<figure class="index-baseline__selected-visual index-baseline__selected-visual--${kind}"><img src="${item.visual}" alt="${item.alt}" loading="lazy" decoding="async"></figure>`;
  }

  function makeProjectIndex(root) {
    root.dataset.screenshotBaseline = '20260910-architecture';
    root.replaceChildren();
    root.insertAdjacentHTML('afterbegin', `<section class="index-baseline index-baseline--projects" aria-labelledby="projects-baseline-title"><p class="index-baseline__eyebrow">PROJECTS / ИЗБРАННЫЕ ПРОЕКТЫ</p><header class="index-baseline__section-intro"><h1 id="projects-baseline-title">Проекты</h1><p>Культурные вопросы и исследования переводятся в материальные, пространственные и интерактивные формы — от знака на воде до мира, собранного из документов.</p></header><div class="index-baseline__two-column index-baseline__projects-layout"><nav class="index-baseline__index-list" aria-label="Выбор проекта"></nav><aside class="index-baseline__selected-content" aria-live="polite"></aside></div></section>`);
    const list = root.querySelector('.index-baseline__index-list');
    const detail = root.querySelector('.index-baseline__selected-content');
    const select = index => {
      const item = projects[index];
      list.querySelectorAll('.index-baseline__index-item').forEach((node, nodeIndex) => {
        const selected = nodeIndex === index;
        node.classList.toggle('is-selected', selected);
        node.querySelector('a').setAttribute('aria-current', selected ? 'true' : 'false');
      });
      detail.innerHTML = `<div class="index-baseline__detail-meta">${item.type}</div><div class="index-baseline__detail-number">${item.id}</div><p class="index-baseline__selected-description">${item.description}</p><div class="index-baseline__project-logic" aria-label="Логика проекта"><span>КУЛЬТУРНЫЙ СДВИГ</span><i aria-hidden="true">→</i><span>ИДЕЯ</span><i aria-hidden="true">→</i><span>РЕЗУЛЬТАТ</span></div><p class="index-baseline__project-process">${item.logic}</p><a class="index-baseline__detail-cta" href="${item.route}">Открыть проект <span aria-hidden="true">→</span></a>${visualMarkup(item, 'project')}`;
    };
    projects.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'index-baseline__index-item index-baseline__project-item';
      row.innerHTML = `<a href="${item.route}"><span class="index-baseline__number">${item.id}</span><span class="index-baseline__index-copy"><strong>${item.title}</strong><small>${item.type}${item.year ? ` <b>${item.year}</b>` : ''}</small><span>${item.description}</span></span><span aria-hidden="true">→</span></a>`;
      row.addEventListener('mouseenter', () => select(index));
      row.querySelector('a').addEventListener('focus', () => select(index));
      list.append(row);
    });
    select(0);
  }

  function researchDetail(item) {
    return `<div class="index-baseline__detail-meta">${item.type}</div><div class="index-baseline__detail-number">${item.id}</div><h2>${item.question}</h2><div class="index-baseline__detail-logic"><span>ВОПРОС</span><i>→</i><span>КОРПУС</span><i>→</i><span>ВЫВОД</span></div><p class="index-baseline__detail-process"><strong>КОРПУС</strong><br>${item.process}</p><p class="index-baseline__detail-process"><strong>ВЫВОД</strong><br>${item.conclusion}</p><a class="index-baseline__detail-cta" href="${item.route}">Открыть исследование <span aria-hidden="true">→</span></a>${visualMarkup(item, 'research')}`;
  }

  function makeResearchIndex(root) {
    root.dataset.screenshotBaseline = '20260910-architecture';
    const legacyCatalogue = document.querySelector('.research-canon-content');
    if (legacyCatalogue) legacyCatalogue.remove();
    root.replaceChildren();
    root.insertAdjacentHTML('afterbegin', `<section class="index-baseline index-baseline--research" aria-labelledby="research-baseline-title"><p class="index-baseline__eyebrow">RESEARCH / ИССЛЕДОВАНИЯ</p><header class="index-baseline__section-intro"><h1 id="research-baseline-title">Исследования</h1><p>Новое редко возникает с нуля. Меня интересует, как старые идеи продолжают жить внутри современных технологий и что происходит с ними в культуре эпохи AI.<br><br>Можно ли доверять документу, если события не было? Где находится авторство, когда результат создаёт уже не один человек?<br><br>Исследование позволяет увидеть в технологии больше, чем техническое решение. Оно показывает, какие представления и отношения она меняет вокруг себя.</p></header><div class="index-baseline__two-column index-baseline__research-layout"><div class="index-baseline__index-list" role="tablist" aria-label="Выбор исследования"></div><aside class="index-baseline__selected-content index-baseline__research-detail" id="research-selected-detail" role="tabpanel" aria-live="polite"></aside></div></section>`);
    const list = root.querySelector('.index-baseline__index-list');
    const detail = root.querySelector('.index-baseline__research-detail');
    let active = 1;
    const select = (index, focus) => {
      active = index;
      list.querySelectorAll('[role="tab"]').forEach((node, nodeIndex) => {
        const selected = nodeIndex === index;
        node.setAttribute('aria-selected', String(selected));
        node.closest('.index-baseline__research-row').classList.toggle('is-selected', selected);
        if (selected && focus) node.focus();
      });
      detail.innerHTML = researchDetail(research[index]);
    };
    research.forEach((item, index) => {
      const row = document.createElement('article');
      row.className = 'index-baseline__research-row';
      row.innerHTML = `<div class="index-baseline__research-row-main"><button type="button" role="tab" aria-selected="${index === active}" aria-controls="research-selected-detail" data-index="${index}"><span class="index-baseline__number">${item.id}</span><span><strong>${item.title}</strong><small>${item.type}</small></span></button><a href="${item.route}" aria-label="Открыть исследование: ${item.title}">Открыть <span aria-hidden="true">→</span></a></div><p>${item.question}</p>`;
      list.append(row);
    });
    list.addEventListener('click', event => { const button = event.target.closest('[data-index]'); if (button) select(Number(button.dataset.index), false); });
    list.addEventListener('keydown', event => {
      if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? research.length - 1 : (active + (event.key === 'ArrowDown' ? 1 : research.length - 1)) % research.length;
      select(next, true);
    });
    select(active, false);
    const atlasAnchor = root.querySelector('.index-baseline__research-layout');
    document.dispatchEvent(new CustomEvent('art-is-you:mount-research-atlas', { detail: { root, anchor: atlasAnchor } }));
    const atlas = root.querySelector('.research-analytics--atlas');
    if (atlas) {
      const selectAtlas = system => {
        const selected = atlas.dataset.selectedSystem === system;
        if (selected) {
          delete atlas.dataset.selectedSystem;
          delete atlas.dataset.activeSystem;
        } else {
          atlas.dataset.selectedSystem = system;
          atlas.dataset.activeSystem = system;
        }
        atlas.querySelectorAll('.research-analytics__system-link').forEach(link => link.toggleAttribute('data-instrument-selected', !selected && link.dataset.system === system));
      };
      atlas.querySelectorAll('.research-analytics__system-link').forEach(link => {
        link.addEventListener('click', event => { event.preventDefault(); selectAtlas(link.dataset.system); });
        link.addEventListener('keydown', event => { if (event.key === ' ') { event.preventDefault(); selectAtlas(link.dataset.system); } });
      });
    }
  }

  function apply() {
    const projectRoot = document.querySelector('.projects-index--screenshot-baseline');
    if (projectRoot && !projectRoot.dataset.screenshotBaseline) makeProjectIndex(projectRoot);
    const researchRoot = document.querySelector('.research-index--screenshot-baseline, .research-index--premium-air');
    if (researchRoot && !researchRoot.dataset.screenshotBaseline) {
      researchRoot.classList.add('research-index--screenshot-baseline');
      makeResearchIndex(researchRoot);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();
})();
