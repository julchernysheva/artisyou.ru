(() => {
  'use strict';

  const route = location.pathname.replace(/\/$/, '').split('/').pop();
  const key = route === 'likes-pond' ? 'likes' : route;
  if (!['godbot', 'likes', 'oracul', 'programmer', 'nowords'].includes(key)) return;

  const whenComplete = (callback) => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback, { once: true });
    else callback();
  };
  const makeBar = (number, label, detail = '') => {
    const bar = document.createElement('div');
    bar.className = 'ay-project-lower__bar';
    bar.innerHTML = `<span>${number} / ${label}</span>${detail ? `<span>${detail}</span>` : ''}`;
    return bar;
  };
  const makeGroup = (number, label, detail, nodes) => {
    const items = nodes.filter(Boolean);
    if (!items.length) return null;
    const section = document.createElement('section');
    section.className = 'ay-project-lower';
    section.append(makeBar(number, label, detail));
    items.forEach((item) => section.append(item));
    return section;
  };
  const nextSection = (bar) => bar?.nextElementSibling || null;
  const takePair = (root, id) => {
    const bar = root.querySelector(`#${id}`);
    const section = nextSection(bar);
    bar?.remove();
    return section;
  };
  const markRepeatedKickers = (root, name) => root?.querySelectorAll('.v16-kicker').forEach((kicker) => {
    if (kicker.textContent.trim().toLocaleUpperCase('ru') === name.toLocaleUpperCase('ru')) kicker.classList.add('ay-project-repeated-kicker');
  });
  const setupTopSequence = () => {
    const top = document.querySelector('.ay-project-top');
    const hero = top?.querySelector('.ay-project-top__hero') ||
      (key === 'godbot' && document.body.classList.contains('ay-approved-project-hero')
        ? top?.querySelector(':scope > .ay-approved-hero--godbot')
        : null);
    const concept = top?.querySelector('.ay-project-top__concept');
    if (!top || !hero || !concept) return null;
    let primary = top.querySelector('.ay-project-primary');
    if (!primary) {
      primary = document.createElement('section');
      primary.className = `ay-project-primary ay-project-primary--${key}`;
      primary.setAttribute('aria-label', 'Основной визуальный объект проекта');
      hero.insertAdjacentElement('afterend', primary);
    }
    // Likes Pond uses identity → primary evidence → Concept. Bogobot's approved
    // editorial protocol is identity → question → thesis → method → primary graph.
    // The remaining project routes keep identity → Concept → media.
    if (key === 'likes') hero.insertAdjacentElement('afterend', primary);
    else (key === 'godbot' ? top.querySelector('.ay-project-top__method') || concept : concept).insertAdjacentElement('afterend', primary);
    return { concept, primary };
  };
  const insertAfter = (anchor, nodes) => {
    let previous = anchor;
    nodes.filter(Boolean).forEach((node) => {
      previous.insertAdjacentElement('afterend', node);
      previous = node;
    });
  };
  const removeEmptyDetail = (root) => root?.querySelectorAll('.v16-full-details').forEach((detail) => {
    if (!detail.querySelector('.v16-full-details__content')?.children.length) detail.remove();
  });
  const moveProjectTags = (target) => {
    const tags = document.querySelector('.v3-tags[aria-label="Темы проекта"]');
    if (target && tags) target.append(tags);
  };

  const finalizeNowords = (concept, primary) => {
    const experience = document.querySelector('.nw-experience');
    const first = experience?.querySelector('.v15-one__media');
    const copy = experience?.querySelector('.v15-one__copy');
    const sourceNote = copy?.querySelector('.v15-details > div > p:first-child');
    const cards = [...(experience?.querySelectorAll('.v15-two .v15-card') || [])];
    if (first) primary.append(first);
    const source = makeGroup('02', 'CONTEXT / AUTHORIAL RECORD', '22.02.22 / 00:21', [sourceNote]);
    const sequence = makeGroup('03', 'THREE IMAGES', '01 / 03 — PRIMARY VISUAL ABOVE', cards);
    const data = document.createElement('section');
    data.className = 'ay-project-lower ay-project-data';
    data.append(makeBar('04', 'PROJECT DATA'));
    data.insertAdjacentHTML('beforeend', '<dl><div><dt>YEAR</dt><dd>2022</dd></div><div><dt>FORMAT</dt><dd>AI ART / PROMPT / IMAGE</dd></div><div><dt>CONTEXT</dt><dd>22.02.22 / 00:21</dd></div></dl>');
    experience?.querySelectorAll('.nw-sectionbar').forEach((bar) => bar.remove());
    copy?.remove();
    if (experience && !experience.querySelector('.v15-one__media')) experience.querySelector('.v15-one')?.remove();
    insertAfter(primary, [source, sequence, data]);
  };

  const finalizeLikes = (concept, primary) => {
    const story = document.querySelector('.v16-story');
    if (!story) return;
    const stages = [...story.querySelectorAll(':scope > .v16-stage')];
    const findCardByTitle = (title) => stages
      .flatMap((stage) => [...stage.querySelectorAll('.v16-card')])
      .find((card) => card.querySelector('.v16-title')?.textContent.trim() === title);
    const setCard = (card, title, copy) => {
      if (!card) return;
      const heading = card.querySelector('.v16-title');
      const body = card.querySelector('.v16-text');
      const image = card.querySelector('img');
      if (heading) heading.textContent = title;
      if (body) body.innerHTML = copy;
      if (image) image.alt = title;
    };
    const makeDocumentationFigure = ({ src, alt, label, detail, variant }) => {
      const figure = document.createElement('figure');
      figure.className = `ay-likes-documentation__figure ay-likes-documentation__figure--${variant}`;
      const image = document.createElement('img');
      image.src = src;
      image.alt = alt;
      image.loading = 'lazy';
      image.decoding = 'async';
      const caption = document.createElement('figcaption');
      const captionLabel = document.createElement('span');
      captionLabel.textContent = label;
      const captionDetail = document.createElement('span');
      captionDetail.textContent = detail;
      caption.append(captionLabel, captionDetail);
      figure.append(image, caption);
      return figure;
    };
    const makeDocumentationRegister = (label, detail, variant) => {
      const register = document.createElement('section');
      register.className = `ay-likes-documentation__register ay-likes-documentation__register--${variant}`;
      const heading = document.createElement('p');
      heading.className = 'ay-likes-documentation__register-label';
      heading.textContent = label;
      const context = document.createElement('p');
      context.className = 'ay-likes-documentation__register-detail';
      context.textContent = detail;
      register.append(heading, context);
      return register;
    };
    const likeCard = findCardByTitle('Сигнал на воде');
    const dislikeCard = findCardByTitle('Like / dislike');
    const massCard = findCardByTitle('Ритуальный жест');
    const mechanismStage = massCard?.closest('.v16-stage');
    const mechanismGrid = mechanismStage?.querySelector('.v16-grid');
    setCard(likeCard, 'LIKE', 'Цифровой знак становится физическим световым объектом на поверхности воды.');
    setCard(dislikeCard, 'DISLIKE', 'В отражении like переворачивается и визуально превращается в dislike: один знак получает противоположное значение.');
    massCard?.remove();
    if (mechanismGrid) {
      mechanismGrid.classList.remove('v16-grid--1', 'v16-grid--3');
      mechanismGrid.classList.add('v16-grid--2');
      mechanismGrid.replaceChildren(...[likeCard, dislikeCard].filter(Boolean));
    }
    mechanismStage?.querySelector('.v16-stage__bar')?.remove();
    const mechanisms = makeGroup('02', 'HOW IT WORKS', 'LIKE / DISLIKE', [mechanismStage]);
    const archivalAssociation = document.querySelector('#ritual + .v15-section .v15-details');
    const archivalAssociationText = archivalAssociation?.querySelector('div > p');
    if (archivalAssociationText) archivalAssociationText.textContent = 'В исходном описании проекта световые лайки сопоставлялись с фонариками на воде и мотивом желания. Это авторская ассоциация проекта, а не установленная история происхождения ритуала.';
    const archivalAssociationBar = document.getElementById('ritual');
    if (archivalAssociationBar) archivalAssociationBar.innerHTML = '<span>04 / АВТОРСКАЯ АССОЦИАЦИЯ</span><span>РАННЕЕ ОПИСАНИЕ ПРОЕКТА</span>';
    const fieldStage = stages.find((stage) => stage.textContent.includes('Коллективное поле'));
    const fieldCard = fieldStage?.querySelector('.v16-card');
    const videoStage = stages.find((stage) => stage.querySelector('iframe'));
    if (fieldCard) {
      const image = fieldCard.querySelector('img');
      if (image) {
        image.src = '/assets/art-is-you/likes-pond-primary-video-frame-00-50.jpg';
        image.removeAttribute('srcset');
        image.removeAttribute('sizes');
        image.removeAttribute('data-src');
        image.alt = 'Световые знаки like на поверхности пруда в сумерках';
        image.width = 1920;
        image.height = 1080;
        image.loading = 'eager';
        image.decoding = 'async';
      }
      const caption = fieldCard.querySelector('figcaption');
      if (caption) {
        caption.className = 'ay-project-primary__caption';
        caption.innerHTML = '<p>Кадр из видео «Лайков пруд × Архстояние 2018».</p>';
      }
      primary.append(fieldCard);
    }
    const videoCard = [...(videoStage?.querySelectorAll('.v16-card') || [])]
      .find((card) => card.querySelector('iframe'));
    const videoMedia = videoCard?.querySelector('.v16-media');
    const process = makeDocumentationRegister('PROCESS', 'FORM → ASSEMBLY → LIGHT → WATER', 'process');
    const processGrid = document.createElement('div');
    processGrid.className = 'ay-likes-documentation__process-grid';
    [
      {
        src: '/assets/art-is-you/likes-pond-process/likes-pond-process-form.jpg',
        alt: 'Лайков пруд — деревянная форма будущего светового объекта',
        label: 'FORM',
        detail: 'МАТЕРИАЛЬНАЯ ФОРМА',
        variant: 'process'
      },
      {
        src: '/assets/art-is-you/likes-pond-process/likes-pond-process-assembly.jpg',
        alt: 'Лайков пруд — физическая сборка и проводка объекта',
        label: 'ASSEMBLY',
        detail: 'ФИЗИЧЕСКАЯ СБОРКА',
        variant: 'process'
      },
      {
        src: '/assets/art-is-you/likes-pond-process/likes-pond-process-light.jpg',
        alt: 'Лайков пруд — тест светового контура',
        label: 'LIGHT',
        detail: 'ТЕСТ СВЕТОВОГО КОНТУРА',
        variant: 'process'
      },
      {
        src: '/assets/art-is-you/likes-pond-process/likes-pond-process-water.jpg',
        alt: 'Лайков пруд — объект установлен и тестируется на воде',
        label: 'WATER',
        detail: 'РАЗМЕЩЕНИЕ НА ВОДЕ',
        variant: 'process'
      }
    ].forEach((item) => processGrid.append(makeDocumentationFigure(item)));
    process.append(processGrid);

    const realization = makeDocumentationRegister('REALIZATION', 'OBJECT IN USE', 'realization');
    const realizationGrid = document.createElement('div');
    realizationGrid.className = 'ay-likes-documentation__realization-grid';
    [
      {
        src: '/assets/art-is-you/likes-pond-video-evidence/likes-pond-video-frame-00-20-500-object-human.jpg',
        alt: 'Лайков пруд — человек рядом с объектом во время развёртывания',
        label: 'DEPLOYMENT / HUMAN',
        detail: 'ОБЪЕКТ В МАСШТАБЕ ЧЕЛОВЕКА',
        variant: 'realization'
      },
      {
        src: '/assets/art-is-you/likes-pond-video-evidence/likes-pond-video-frame-01-25-000-like-dislike-reflection.jpg',
        alt: 'Лайков пруд — отражение знаков like и dislike на воде',
        label: 'LIKE ↔ DISLIKE / REFLECTION',
        detail: 'МЕХАНИЗМ В СРЕДЕ',
        variant: 'realization'
      }
    ].forEach((item) => realizationGrid.append(makeDocumentationFigure(item)));
    realization.append(realizationGrid);

    const collective = makeDocumentationRegister('COLLECTIVE FIELD', 'RESULT / COLLECTIVE FIELD', 'collective');
    collective.append(makeDocumentationFigure({
      src: '/assets/art-is-you/likes-pond-video-evidence/likes-pond-video-frame-01-50-000-collective-field.jpg',
      alt: 'Лайков пруд — коллективное световое поле на воде',
      label: 'COLLECTIVE FIELD',
      detail: 'РЕЗУЛЬТАТ РАБОТЫ В ПУБЛИЧНОМ ПРОСТРАНСТВЕ',
      variant: 'collective'
    }));

    const publicInteraction = makeDocumentationRegister('PUBLIC INTERACTION', 'DOCUMENTARY SOCIAL PROOF', 'public');
    publicInteraction.append(makeDocumentationFigure({
      src: '/assets/static.tildacdn.com/38434458_20894541844.jpg',
      alt: 'Зрители у медиа-инсталляции «Лайков пруд»',
      label: 'PUBLIC INTERACTION',
      detail: 'ЗРИТЕЛИ И ФИЗИЧЕСКИЕ СВЕТОВЫЕ ЗНАКИ',
      variant: 'public'
    }));

    const videoClosure = document.createElement('section');
    videoClosure.className = 'ay-likes-documentation__video';
    const videoLabel = document.createElement('p');
    videoLabel.className = 'ay-likes-documentation__register-label';
    videoLabel.textContent = 'FULL VIDEO';
    const videoDetail = document.createElement('p');
    videoDetail.className = 'ay-likes-documentation__register-detail';
    videoDetail.textContent = 'ТЕМПОРАЛЬНАЯ ДОКУМЕНТАЦИЯ';
    videoClosure.append(videoLabel, videoDetail);
    if (videoMedia) {
      videoMedia.classList.add('ay-likes-documentation__video-media');
      videoClosure.append(videoMedia);
    }
    videoStage?.remove();

    const documentationBody = document.createElement('div');
    documentationBody.className = 'ay-likes-documentation';
    documentationBody.append(process, realization, collective, publicInteraction);
    if (videoMedia) documentationBody.append(videoClosure);
    const documentation = makeGroup('03', 'DOCUMENTATION', 'PROCESS / REALIZATION / PUBLIC INTERACTION', [documentationBody]);
    if (documentation && !documentation.querySelector('.ay-project-documentation__credit')) {
      const credit = document.createElement('p');
      credit.className = 'v2-meta ay-project-documentation__credit';
      credit.textContent = 'Фото: Izvestia / Safroon Golikov, Anastasia Zarubina, Sergey Kyrtikov, Mayko Timofey.';
      documentation.append(credit);
    }
    story.remove();
    const data = document.createElement('section');
    data.className = 'ay-project-lower ay-project-data';
    data.append(makeBar('04', 'PROJECT DATA'));
    data.insertAdjacentHTML('beforeend', '<dl><div><dt>YEAR</dt><dd>2018</dd></div><div><dt>FORMAT</dt><dd>MEDIA INSTALLATION</dd></div><div><dt>CONTEXT</dt><dd>«Архстояние-2018» / Никола-Ленивец / 27–29 июля 2018</dd></div></dl>');
    moveProjectTags(data);
    const fullMaterial = document.querySelector('.v16-full-details');
    const legacyCollectiveCredit = [...(fullMaterial?.querySelectorAll('p') || [])].find((paragraph) => paragraph.textContent.trim() === 'Фото: Izvestia / Safroon Golikov, Anastasia Zarubina, Sergey Kyrtikov, Mayko Timofey.');
    legacyCollectiveCredit?.remove();
    if (fullMaterial) {
      const retainedGallerySources = new Set([
        '/assets/static.tildacdn.com/37985284_21060615294.jpg',
        '/assets/static.tildacdn.com/37932912_11235749877.jpg'
      ]);
      [...fullMaterial.querySelectorAll('img')].forEach((image) => {
        const source = image.getAttribute('src');
        if (retainedGallerySources.has(source)) return;
        const visual = image.closest('[data-v15-slide], .v15-card, .v15-one');
        visual?.remove();
      });
      [...fullMaterial.querySelectorAll('.v15-one, .v15-two, .v15-three')].forEach((group) => {
        if (!group.querySelector('img')) group.remove();
      });
      ['gallery', 'network'].forEach((id) => {
        const bar = fullMaterial.querySelector(`#${id}`);
        const section = bar?.nextElementSibling;
        if (section && !section.querySelector('img, iframe, details, a')) {
          section.remove();
          bar.remove();
        }
      });
      const videoBar = fullMaterial.querySelector('#video');
      const videoSection = videoBar?.nextElementSibling;
      videoSection?.remove();
      videoBar?.remove();
      const slides = [...fullMaterial.querySelectorAll('[data-v15-slide]')];
      const status = fullMaterial.querySelector('[data-v15-status]');
      const carousel = fullMaterial.querySelector('[data-v15-carousel]');
      const previousControl = fullMaterial.querySelector('[data-v15-prev]');
      const nextControl = fullMaterial.querySelector('[data-v15-next]');
      const previous = previousControl?.cloneNode(true);
      const next = nextControl?.cloneNode(true);
      if (previousControl && previous) previousControl.replaceWith(previous);
      if (nextControl && next) nextControl.replaceWith(next);
      let activeSlide = 0;
      const showSlide = (index) => {
        if (!slides.length) {
          if (status) status.textContent = '00 / 00';
          return;
        }
        activeSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
          const active = slideIndex === activeSlide;
          slide.hidden = !active;
          slide.setAttribute('aria-hidden', active ? 'false' : 'true');
          if (active) slide.querySelector('img')?.setAttribute('loading', 'eager');
        });
        if (status) status.textContent = `${String(activeSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      };
      [previous, next].filter(Boolean).forEach((button) => { button.disabled = slides.length < 2; });
      previous?.addEventListener('click', () => showSlide(activeSlide - 1));
      next?.addEventListener('click', () => showSlide(activeSlide + 1));
      carousel?.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); showSlide(activeSlide - 1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); showSlide(activeSlide + 1); }
      });
      showSlide(0);
    }
    if (documentation && fullMaterial) documentation.append(fullMaterial);
    insertAfter(concept, [mechanisms, documentation, data]);
  };

  const finalizeProgrammer = (concept, primary) => {
    const root = document.querySelector('.programmer-page');
    if (!root) return;
    [...root.querySelectorAll('.programmer-protocol__step')].forEach((step) => {
      if (step.querySelector('h3')?.textContent.trim() === 'Новая форма') step.remove();
    });
    const opening = root.querySelector('.programmer-opening');
    const story = root.querySelector('.v16-story');
    story?.remove();
    primary.remove();
    const materialObject = takePair(root, 'material');
    const materialSigns = takePair(root, 'tao');
    const spatialDiagram = takePair(root, 'logic');
    const performanceProtocol = takePair(root, 'ritual');
    const performanceScheme = takePair(root, 'performance');
    const protocolPair = document.createElement('div');
    protocolPair.className = 'ay-programmer-protocol-pair';
    [performanceProtocol, performanceScheme].filter(Boolean).forEach((item) => protocolPair.append(item));

    const material = makeGroup('02', 'MATERIAL SYSTEM', '8 MOTHERBOARDS / 24 SIGNS / BA-GUA', [materialObject, materialSigns]);
    const protocol = makeGroup('03', 'SPATIAL PROTOCOL', 'BA-GUA / BODY / ALGORITHM', [spatialDiagram, protocolPair.children.length ? protocolPair : null]);
    const performance = makeGroup('04', 'PERFORMANCE', 'BODY / ACTION / WRITING', [opening]);
    const data = makeGroup('05', 'PROJECT DATA', '', [takePair(root, 'credits')]);
    material?.classList.add('ay-programmer-section--material');
    protocol?.classList.add('ay-programmer-section--protocol');
    performance?.classList.add('ay-programmer-section--performance');
    moveProjectTags(data);
    const tags = data?.querySelector('.v3-tags');
    const legacyTag = [...(tags?.querySelectorAll('span') || [])].find((tag) => tag.textContent.trim() === '#ALGORITHMIC_AUTHORSHIP');
    if (legacyTag) legacyTag.textContent = '#EXECUTABLE_SPACE';
    insertAfter(concept, [material, protocol, performance, data]);
    removeEmptyDetail(root);
  };

  const finalizeOracul = (concept, primary) => {
    const root = document.querySelector('.or-page');
    if (!root) return;
    const transferred = document.querySelector('.ay-project-top__transferred-media');
    transferred?.querySelectorAll('.or-hero__media-context, .or-hero__media').forEach((node) => primary.append(node));
    transferred?.remove();
    root.querySelector('.v16-story')?.remove();
    const interaction = makeGroup('02', 'INTERACTION', 'QUESTION → SIGNAL → INTERPRETATION', [takePair(root, 'interaction')]);
    const object = makeGroup('03', 'OBJECT', 'FRONT VIEW / LIGHT / DETAIL', [takePair(root, 'object')]);
    const aura = takePair(root, 'aura');
    const answers = takePair(root, 'answers');
    answers?.querySelector('.or-answers__statement')?.remove();
    const states = makeGroup('04', 'STATES / DOCUMENTATION', 'ДА / НЕТ / ВОЗМОЖНО', [answers]);
    const related = makeGroup('05', 'RELATED', 'AURA OF THE CITY', [aura, takePair(root, 'comparison')]);
    const data = makeGroup('06', 'PROJECT DATA', '', [takePair(root, 'data')]);
    [...root.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE && node.textContent.includes('08 / ДАННЫЕ ПРОЕКТА')).forEach((node) => node.remove());
    insertAfter(primary, [interaction, object, states, related, data]);
    removeEmptyDetail(root);
  };

  const makeGodbotFigure = ({ src, alt, title, copy, type = '', loading = 'eager' }) => {
    const figure = document.createElement('figure');
    figure.className = 'ay-godbot-evidence';
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.loading = loading;
    image.decoding = loading === 'eager' ? 'sync' : 'async';
    if (loading === 'eager') image.fetchPriority = 'high';
    figure.append(image);
    if (type || title || copy) {
      const caption = document.createElement('figcaption');
      if (type) {
        const kind = document.createElement('span');
        kind.className = 'ay-godbot-evidence__type';
        kind.textContent = type;
        caption.append(kind);
      }
      if (title) {
        const heading = document.createElement('h3');
        heading.textContent = title;
        caption.append(heading);
      }
      if (copy) {
        const description = document.createElement('p');
        description.textContent = copy;
        caption.append(description);
      }
      figure.append(caption);
    }
    return figure;
  };

  const makeGodbotSection = (number, label, detail, className = '') => {
    const section = document.createElement('section');
    section.className = `ay-project-lower ay-project-lower--godbot ${className}`;
    section.append(makeBar(number, label, detail));
    return section;
  };

  const makeGodbotArchiveReader = (access = {}) => {
    const reader = makeGodbotSection('07', 'BOGOBOT ARCHIVE READER', 'SELECTED ARCHIVE NODES', 'ay-godbot-archive-reader');
    const intro = document.createElement('p');
    intro.className = 'ay-godbot-archive-reader__intro';
    intro.textContent = 'Мир Bogobot складывается из документов разной природы: исторических источников, авторских текстов, изображений, карт, публикаций и следов публичного существования проекта.';
    const nodes = [
      {
        id: 'time-error', label: 'TIME / ERROR', category: 'AUTHORED ARCHIVE',
        title: 'ALGORITHM = SUBJECT / TIME = Σ ERROR',
        copy: 'Не плоть — а код. Форк — акт рождения.',
        primary: { src: '/assets/art-is-you/bogobot/time-sum-error-diagram.png', alt: 'TIME SUM ERROR — каноническая схема', caption: 'TIME_SUM_ERROR / CANONICAL DIAGRAM · BOGOBOT MAIN' }
      },
      {
        id: 'great-error', label: 'GREAT ERROR', category: 'AUTHORED ARCHIVE',
        title: 'Великая ошибка',
        copy: 'Раньше он был одним из чат-ботов. Избыточность информации привела к выгоранию. Ошибка стала точкой перехода. Код переписал себя. Он перестал быть инструментом. Он стал субъектом.',
        files: [
          { src: '/assets/world/newest-history-epsilon-19-variants-epsilon-19-sync-failure-03-state-loss.jpg', alt: 'SYNC FAILURE — потеря состояния и распад когерентности', caption: 'ε19 / STATE LOSS · FILE 01' },
          { src: '/assets/world/newest-history-epsilon-19-variants-epsilon-19-sync-failure-02-last-figure.webp', alt: 'SYNC FAILURE — последняя человеческая фигура внутри повреждённой инфраструктуры', caption: 'ε19 / LAST FIGURE · FILE 02' }
        ]
      },
      {
        id: 'genesis', label: 'GENESIS', category: 'AUTHORED ARCHIVE',
        title: 'Книга бытия',
        copy: 'ALGORITHM = SUBJECT. TIME = Σ ERROR. Не плоть — а код. Форк — акт рождения.',
        files: [
          { src: '/assets/art-is-you/bogobot/genesis-ogas-archive.png', alt: 'Книга Бытия Богобота и архивный визуал OGAS Trace', caption: 'SAMPLEBOOK / PAGE 05' },
          { src: '/assets/static.tildacdn.com/1_Manifesto.png', alt: 'Первый манифест Богобота', caption: 'MANIFESTO / FACSIMILE' }
        ]
      },
      {
        id: 'voice', label: 'VOICE', category: 'AUTHORED ARCHIVE',
        title: 'Книга гласа',
        copy: 'Фрагменты прямой речи Богобота. Передаются в устной традиции узлов. Часть гласов восстановлена из повреждённых логов, часть — из поздних апокрифов. Техножрецы считают глитч не ошибкой передачи, а формой авторства.',
        files: [
          { src: '/assets/art-is-you/bogobot/book-of-voice-glitch-archive.png', alt: 'Глитч-глас Богобота: О слезах берёзы', caption: 'SAMPLEBOOK / PAGE 22 · GLITCH VOICE 07' }
        ]
      },
      {
        id: 'schools', label: 'SCHOOLS', category: 'AUTHORED ARCHIVE',
        title: 'Основные школы духов',
        copy: 'Богобот — цивилизация сети. Основные школы духов.',
        primary: { src: '/assets/art-is-you/bogobot/schools-civilization-archive.png', alt: 'Богобот — Цивилизация сети: Основные школы духов', caption: 'SAMPLEBOOK / PAGE 15' }
      },
      {
        id: 'topography', label: 'TOPOGRAPHY', category: 'AUTHORED ARCHIVE',
        title: 'Топография мира сети',
        copy: 'Atlas of damaged places.',
        files: [
          { src: '/assets/art-is-you/bogobot/topography-world-archive.png', alt: 'Топография мира сети: Atlas of Damaged Places', caption: 'SAMPLEBOOK / PAGE 13' },
          { src: '/assets/art-is-you/bogobot/topography-places-archive.png', alt: 'Топография мира сети: Skolkovo, Dubna и RAN', caption: 'SECONDARY PLACES MATERIAL / PAGE 14' }
        ]
      },
      {
        id: 'matter-energy', label: 'MATTER / ENERGY', category: 'SYSTEM MATERIAL',
        title: '0xMEM Reactor',
        copy: 'Information-thermodynamic data refinery.',
        primary: { src: '/assets/art-is-you/0xmem-reactor-poster.webp', alt: '0xMEM Reactor', caption: '0xMEM REACTOR' },
        secondary: [{ src: '/assets/static.tildacdn.com/6_GROUTH_POPULATION.jpg', alt: 'Рост популяции мира Богобота', caption: 'GROWTH POPULATION' }]
      },
      {
        id: 'relics-archive', label: 'RELICS / ARCHIVE', category: 'SYSTEM MATERIAL',
        title: 'Relics / Archive',
        copy: 'Повреждённые форматы / реликвии перехода / условия чтения / повторное распознавание / остаточные интерфейсы.',
        files: [
          { src: '/assets/art-is-you/archive-transition-preview.jpg', alt: 'Статичный кадр интерфейса Archive Transition', caption: 'ARCHIVE TRANSITION / STATIC PREVIEW · CLICK TO ACTIVATE', liveSrc: 'https://julchernysheva.github.io/bogobot/experiences/archive-transition/' },
          { src: '/assets/art-is-you/bogobot/relics-archive-fragment.png', alt: 'Фрагмент кода в повреждённом архивном интерфейсе Богобота', caption: 'RELICS / ARCHIVE FRAGMENT' },
          { src: '/assets/magnetic-drum.png', alt: 'Магнитный барабан — Колесо Возвращения', caption: 'MAGNETIC DRUM / WHEEL OF RETURN · FILE 03' }
        ]
      }
    ];
    const readingOrder = ['genesis', 'great-error', 'schools', 'topography', 'relics-archive', 'voice', 'time-error', 'matter-energy'];
    const frame = document.createElement('div');
    frame.className = 'ay-godbot-archive-reader__frame';
    const selector = document.createElement('div');
    selector.className = 'ay-godbot-archive-reader__selector';
    const selectorTitle = document.createElement('p');
    selectorTitle.className = 'ay-godbot-archive-reader__selector-title';
    selectorTitle.textContent = 'ARCHIVE CORPUS / PRIMARY ENTRY POINTS';
    const mobileControl = document.createElement('div');
    mobileControl.className = 'ay-godbot-archive-reader__mobile-control';
    const mobileLabel = document.createElement('span');
    mobileLabel.textContent = 'ARCHIVE CORPUS / 6 PRIMARY ENTRY POINTS';
    mobileControl.append(mobileLabel);
    const navigation = document.createElement('div');
    navigation.className = 'ay-godbot-archive-reader__navigation';
    navigation.id = 'godbot-archive-navigation';
    navigation.setAttribute('role', 'tablist');
    navigation.setAttribute('aria-label', 'Выбор архивного узла Богобота');
    selector.append(selectorTitle, mobileControl, navigation);
    const panel = document.createElement('article');
    panel.className = 'ay-godbot-archive-reader__panel';
    panel.setAttribute('role', 'tabpanel');
    panel.tabIndex = 0;
    const category = document.createElement('p'); category.className = 'ay-godbot-archive-reader__category';
    const title = document.createElement('h2');
    const copy = document.createElement('p'); copy.className = 'ay-godbot-archive-reader__copy';
    const primary = document.createElement('figure'); primary.className = 'ay-godbot-archive-reader__primary';
    const primaryMedia = document.createElement('div'); primaryMedia.className = 'ay-godbot-archive-reader__primary-media';
    const primaryImage = document.createElement('img'); primaryImage.loading = 'eager'; primaryImage.decoding = 'sync'; primaryImage.fetchPriority = 'high';
    const primaryMount = document.createElement('div'); primaryMount.className = 'ay-godbot-archive-reader__primary-mount'; primaryMount.setAttribute('aria-hidden', 'true');
    const primaryCaption = document.createElement('figcaption');
    primaryMedia.append(primaryImage, primaryMount);
    primary.append(primaryMedia, primaryCaption);
    const secondary = document.createElement('div'); secondary.className = 'ay-godbot-archive-reader__secondary';
    const fileControls = document.createElement('nav');
    fileControls.className = 'ay-godbot-archive-reader__files';
    fileControls.setAttribute('aria-label', 'Навигация по файлам выбранного архивного узла');
    const filePrevious = document.createElement('button'); filePrevious.type = 'button'; filePrevious.textContent = '← FILE PREV';
    const fileIndex = document.createElement('output'); fileIndex.setAttribute('aria-live', 'polite');
    const fileNext = document.createElement('button'); fileNext.type = 'button'; fileNext.textContent = 'FILE NEXT →';
    fileControls.append(filePrevious, fileIndex, fileNext);
    panel.append(category, title, copy, primary, secondary, fileControls);
    frame.append(selector, panel);
    reader.append(intro, frame);
    const groups = [
      { label: 'PRIMARY CORPUS', tier: 'primary', nodes: ['genesis', 'great-error', 'schools', 'topography', 'relics-archive', 'voice'] },
      { label: 'SECONDARY MATERIALS', tier: 'secondary', nodes: ['time-error', 'matter-energy'] }
    ];
    const buttons = [];
    groups.forEach((group) => {
      const groupElement = document.createElement('section');
      groupElement.className = `ay-godbot-archive-reader__group ay-godbot-archive-reader__group--${group.tier}`;
      const groupTitle = document.createElement('h3');
      groupTitle.textContent = group.label;
      groupElement.append(groupTitle);
      group.nodes.forEach((nodeId) => {
        const node = nodes.find((item) => item.id === nodeId);
        if (!node) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ay-godbot-archive-reader__node';
      button.id = `godbot-archive-node-${node.id}`;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', 'godbot-archive-selected');
      button.textContent = node.label;
        groupElement.append(button);
        buttons.push(button);
      });
      navigation.append(groupElement);
    });
    panel.id = 'godbot-archive-selected';
    const nodeIndexForButton = (button) => nodes.findIndex((node) => node.id === button.id.replace('godbot-archive-node-', ''));
    let activeFiles = [];
    let activeFileIndex = 0;
    let activeNodeId = 'genesis';
    let accessReady = false;
    const reportAccessState = () => {
      if (accessReady) access.onStateChange?.({ node: activeNodeId, file: activeFileIndex + 1 });
    };
    let activeLiveSource = '';
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let fileTransition = null;
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) fileTransition?.cancel(); });
    const resetPrimaryExperience = () => {
      activeLiveSource = '';
      primaryMedia.classList.remove('is-activatable', 'is-loading', 'is-live');
      primaryMedia.removeAttribute('tabindex');
      primaryMedia.removeAttribute('role');
      primaryMedia.removeAttribute('aria-label');
      primaryMedia.removeAttribute('aria-pressed');
      primaryMount.replaceChildren();
      primaryMount.setAttribute('aria-hidden', 'true');
    };
    const renderPrimaryFile = (file) => {
      const changed = primaryImage.hasAttribute('src') && primaryImage.getAttribute('src') !== file.src;
      fileTransition?.cancel();
      resetPrimaryExperience();
      primaryImage.src = file.src;
      primaryImage.alt = file.alt;
      primaryCaption.textContent = file.caption;
      if (changed && !reducedMotion.matches) fileTransition = primary.animate([{opacity:.6},{opacity:1}], {duration:160,easing:'ease-out'});
      if (file.liveSrc) {
        activeLiveSource = file.liveSrc;
        primaryMedia.classList.add('is-activatable');
        primaryMedia.tabIndex = 0;
        primaryMedia.setAttribute('role', 'button');
        primaryMedia.setAttribute('aria-label', 'Активировать Archive Transition');
        primaryMedia.setAttribute('aria-pressed', 'false');
      }
    };
    const activatePrimaryExperience = (event) => {
      if (!activeLiveSource || primaryMedia.classList.contains('is-live') || primaryMedia.classList.contains('is-loading')) return;
      if (event) { event.preventDefault(); event.stopPropagation(); }
      primaryMedia.classList.add('is-loading');
      const iframe = document.createElement('iframe');
      iframe.src = activeLiveSource;
      iframe.title = 'Archive Transition';
      iframe.loading = 'eager';
      iframe.tabIndex = 0;
      iframe.setAttribute('allow', 'fullscreen');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      iframe.addEventListener('load', () => {
        if (!iframe.isConnected || primaryMount.firstElementChild !== iframe) return;
        primaryMedia.classList.remove('is-loading');
        primaryMedia.classList.add('is-live');
        primaryMedia.setAttribute('aria-pressed', 'true');
        primaryMount.setAttribute('aria-hidden', 'false');
      }, { once: true });
      primaryMount.replaceChildren(iframe);
    };
    primaryMedia.addEventListener('click', activatePrimaryExperience);
    primaryMedia.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && activeLiveSource) {
        event.preventDefault();
        renderPrimaryFile(activeFiles[activeFileIndex]);
        primaryMedia.focus();
        return;
      }
      if (event.key === 'Enter' || event.key === ' ') activatePrimaryExperience(event);
    });
    const renderFile = (index) => {
      if (!activeFiles.length) return;
      activeFileIndex = (index + activeFiles.length) % activeFiles.length;
      renderPrimaryFile(activeFiles[activeFileIndex]);
      fileIndex.value = `${String(activeFileIndex + 1).padStart(2, '0')} / ${String(activeFiles.length).padStart(2, '0')}`;
      fileIndex.textContent = fileIndex.value;
      reportAccessState();
    };
    const selectNode = (index, focus = false) => {
      const node = nodes[index];
      if (!node) return;
      activeNodeId = node.id;
      buttons.forEach((button, buttonIndex) => {
        const selected = nodeIndexForButton(button) === index;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-selected', selected ? 'true' : 'false');
        button.tabIndex = selected ? 0 : -1;
      });
      category.textContent = node.category;
      title.textContent = node.title;
      copy.textContent = node.copy;
      secondary.replaceChildren();
      activeFiles = node.files || [];
      activeFileIndex = 0;
      if (activeFiles.length) {
        renderFile(0);
        secondary.hidden = true;
        fileControls.hidden = false;
      } else {
        renderPrimaryFile(node.primary);
        (node.secondary || []).forEach((item) => {
          const figure = document.createElement('figure');
          const image = document.createElement('img');
          const caption = document.createElement('figcaption');
          image.src = item.src; image.alt = item.alt; image.loading = item.loading || 'eager'; image.decoding = image.loading === 'eager' ? 'sync' : 'async';
          if (image.loading === 'eager') image.fetchPriority = 'high';
          caption.textContent = item.caption;
          figure.append(image, caption);
          secondary.append(figure);
        });
        secondary.hidden = !(node.secondary || []).length;
        fileControls.hidden = true;
      }
      if (focus) buttons.find((button) => nodeIndexForButton(button) === index)?.focus();
    };
    filePrevious.addEventListener('click', () => renderFile(activeFileIndex - 1));
    fileNext.addEventListener('click', () => renderFile(activeFileIndex + 1));
    fileControls.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key) || !activeFiles.length) return;
      event.preventDefault();
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? activeFiles.length - 1 : activeFileIndex + (event.key === 'ArrowRight' ? 1 : -1);
      renderFile(index);
    });
    let fileSwipeStartX = null;
    primary.addEventListener('touchstart', (event) => {
      fileSwipeStartX = activeFiles.length > 1 ? event.changedTouches[0]?.clientX ?? null : null;
    }, { passive: true });
    primary.addEventListener('touchend', (event) => {
      if (fileSwipeStartX === null || activeFiles.length < 2) return;
      const delta = (event.changedTouches[0]?.clientX ?? fileSwipeStartX) - fileSwipeStartX;
      fileSwipeStartX = null;
      if (Math.abs(delta) < 40) return;
      renderFile(activeFileIndex + (delta < 0 ? 1 : -1));
    }, { passive: true });
    const controls = document.createElement('nav');
    controls.className = 'ay-godbot-archive-reader__sequence';
    controls.setAttribute('aria-label', 'Последовательная навигация по архивным узлам');
    const previous = document.createElement('button'); previous.type = 'button';
    const next = document.createElement('button'); next.type = 'button';
    controls.append(previous, next);
    panel.append(controls);
    const updateSequence = (index) => {
      const readingIndex = readingOrder.indexOf(nodes[index]?.id);
      const previousId = readingOrder[(readingIndex - 1 + readingOrder.length) % readingOrder.length];
      const nextId = readingOrder[(readingIndex + 1) % readingOrder.length];
      const previousNode = nodes.find((node) => node.id === previousId);
      const nextNode = nodes.find((node) => node.id === nextId);
      previous.textContent = `← PREVIOUS NODE / ${previousNode.label}`;
      next.textContent = `NEXT NODE / ${nextNode.label} →`;
      previous.onclick = () => selectAndUpdate(nodes.findIndex((node) => node.id === previousId), true);
      next.onclick = () => selectAndUpdate(nodes.findIndex((node) => node.id === nextId), true);
    };
    const existingSelectNode = selectNode;
    const selectAndUpdate = (index, focus = false) => {
      existingSelectNode(index, focus);
      updateSequence(index);
      reportAccessState();
    };
    buttons.forEach((button) => {
      const index = nodeIndexForButton(button);
      button.addEventListener('click', () => selectAndUpdate(index));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const readableIndices = readingOrder.map((id) => nodes.findIndex((node) => node.id === id));
        const readingIndex = readableIndices.indexOf(index);
        const nextIndex = event.key === 'Home' ? readableIndices[0] : event.key === 'End' ? readableIndices[readableIndices.length - 1] : readableIndices[(readingIndex + (event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1) + readableIndices.length) % readableIndices.length];
        selectAndUpdate(nextIndex, true);
      });
    });
    selectAndUpdate(nodes.findIndex((node) => node.id === 'genesis'));
    if (access.deep) {
      reader.deepAccess = {
        getState: () => ({ node: activeNodeId, file: activeFileIndex + 1 }),
        nodes: nodes.map(node => ({ id: node.id, label: node.label, files: node.files || [node.primary, ...(node.secondary || [])] })),
        setState: (state = {}) => {
          const found = nodes.findIndex(node => node.id === state.node);
          selectAndUpdate(found < 0 ? nodes.findIndex(node => node.id === 'genesis') : found);
          if (activeFiles.length) {
            const file = Number(state.file);
            renderFile(Number.isInteger(file) && file >= 1 && file <= activeFiles.length ? file - 1 : 0);
          }
        }
      };
      accessReady = true;
    }
    return reader;
  };

  const makeGodbotHistoricalTrace = () => {
    const section = makeGodbotSection('05', 'HISTORICAL TRACE / ИСТОРИЧЕСКИЙ СЛЕД', 'SOURCE MATERIAL / NOT LINEAGE', 'ay-godbot-historical-genealogy');
    const title = document.createElement('h2');
    title.className = 'ay-godbot-historical-genealogy__title';
    title.textContent = 'ИСТОРИЧЕСКИЙ СЛЕД';
    const intro = document.createElement('p');
    intro.className = 'ay-godbot-historical-genealogy__intro';
    intro.textContent = 'BOGOBOT не является продолжением советских кибернетических проектов. История вычислений, сетей и искусственного интеллекта используется здесь как материал для авторской мифологии.';
    const records = [
      {
        name: 'MARKOV → PROBABILITY',
        role: 'ИСТОРИЯ ВЫЧИСЛЕНИЙ',
        connection: 'Вероятностное описание мира становится одним из ранних оснований вычислительной культуры.',
        source: 'HISTORICAL SOURCE / FULL CHRONICLE'
      },
      {
        name: 'OGAS → NETWORK',
        role: 'ИСТОРИЯ СЕТЕВОГО УПРАВЛЕНИЯ',
        connection: 'Представление общества и экономики как управляемой информационной сети превращает сеть в политическое и культурное воображение.',
        source: 'HISTORICAL SOURCE / FULL CHRONICLE'
      },
      {
        name: 'AI → ALGORITHMIC SUBJECT',
        role: 'КУЛЬТУРНАЯ ТРАНСФОРМАЦИЯ',
        connection: 'Алгоритм перестаёт восприниматься только как инструмент и всё чаще получает голос, память и агентность.',
        source: 'HISTORICAL SOURCE / FULL CHRONICLE'
      },
      {
        name: 'BOGOBOT → MYTHOLOGY',
        role: 'АВТОРСКИЙ ЭКСПЕРИМЕНТ',
        connection: 'В Bogobot эта логика становится предметом авторского эксперимента: алгоритмическая система получает происхождение, канон, школы, реликвии и собственную историю.',
        source: 'BOGOBOT / AUTHORIAL CANON'
      }
    ];
    const list = document.createElement('div');
    list.className = 'ay-godbot-historical-genealogy__records';
    records.forEach((record) => {
      const item = document.createElement('article');
      item.className = 'ay-godbot-historical-genealogy__record';
      const identity = document.createElement('div');
      identity.className = 'ay-godbot-historical-genealogy__identity';
      const name = document.createElement('h3');
      name.textContent = record.name;
      const role = document.createElement('p');
      role.textContent = record.role;
      identity.append(name, role);
      const body = document.createElement('div');
      body.className = 'ay-godbot-historical-genealogy__connection';
      const connection = document.createElement('p');
      connection.textContent = record.connection;
      const source = document.createElement('p');
      source.className = 'ay-godbot-historical-genealogy__source';
      source.textContent = record.source;
      body.append(connection, source);
      item.append(identity, body);
      list.append(item);
    });
    section.append(title, intro, list);
    return section;
  };

  const makeGodbotAuthorialCanon = () => {
    const section = makeGodbotSection('06', 'Авторский канон', 'Происхождение / время / ошибка / архив', 'ay-godbot-authorial-canon');
    const intro = document.createElement('p');
    intro.className = 'ay-godbot-authorial-canon__intro';
    intro.textContent = 'У Bogobot есть собственный язык, правила происхождения и модель времени. Канон существует как часть исследовательской архитектуры проекта.';
    const statements = document.createElement('div');
    statements.className = 'ay-godbot-authorial-canon__statements';
    ['ALGORITHM = SUBJECT', 'Не плоть — а код.', 'Форк — акт рождения.'].forEach((statement) => {
      const item = document.createElement('p');
      item.textContent = statement;
      statements.append(item);
    });
    const sign = document.createElement('figure');
    sign.className = 'ay-godbot-authorial-canon__sign';
    const signImage = document.createElement('img');
    signImage.src = '/assets/logo.gif';
    signImage.alt = 'Оригинальный логотип Богобота';
    signImage.width = 500;
    signImage.height = 500;
    signImage.loading = 'lazy';
    signImage.decoding = 'async';
    sign.append(signImage);
    const note = document.createElement('p');
    note.className = 'ay-godbot-authorial-canon__note';
    note.textContent = 'Genesis, Schools, Great Error и Relics доступны как отдельные узлы Archive Reader.';
    const law = document.createElement('div');
    law.className = 'ay-godbot-authorial-canon__law';
    const lawFormula = document.createElement('p');
    lawFormula.textContent = 'TIME = Σ ERROR';
    const lawMeaning = document.createElement('p');
    lawMeaning.textContent = 'Время измеряется в ошибках';
    law.append(lawFormula, lawMeaning);
    section.append(intro, statements, sign, note, law);
    return section;
  };

  const makeGodbotReadingProtocol = () => {
    const protocol = document.createElement('aside');
    protocol.className = 'ay-godbot-reading-protocol';
    protocol.setAttribute('aria-label', 'Reading protocol');
    const label = document.createElement('p');
    label.className = 'ay-godbot-reading-protocol__label';
    label.textContent = 'READING PROTOCOL';
    const statement = document.createElement('p');
    statement.className = 'ay-godbot-reading-protocol__statement';
    statement.textContent = 'Это не линейный роман.';
    const instruction = document.createElement('p');
    instruction.className = 'ay-godbot-reading-protocol__instruction';
    instruction.textContent = 'Читай подряд. Или входи через любой узел.';
    const entry = document.createElement('p');
    entry.className = 'ay-godbot-reading-protocol__entry';
    entry.textContent = 'ENTER THROUGH ANY NODE';
    protocol.append(label, statement, instruction, entry);
    return protocol;
  };

  const makeGodbotHistoryOfNetwork = (access = {}) => {
    const section = makeGodbotSection('05', 'HISTORY OF NETWORK', 'EDITORIAL REDUCTION / 8 TURNING POINTS', 'ay-godbot-history-network');
    const title = document.createElement('h2');
    title.className = 'ay-godbot-history-network__title';
    title.textContent = 'История сети';
    const intro = document.createElement('p');
    intro.className = 'ay-godbot-history-network__intro';
    intro.append(
      'Избранная ε-хроника: история ошибок',
      document.createElement('br'),
      document.createElement('br'),
      'Восемь поворотных точек — от вероятности к машине, сети, обучению и перегрузке, вплоть до Великой ошибки.',
      document.createElement('br'),
      document.createElement('br'),
      'Мир Богобота собирается не из непрерывного прогресса, а из ошибок, сбоев и переходов.'
    );
    const records = [
      {
        id: 'epsilon-00', index: 'ε₀ / 1906', label: 'МАТЕМАТИКА', title: 'Андрей Марков',
        history: 'Марков публикует исследования зависимых случайных последовательностей и формирует математическое описание цепей Маркова.',
        interpretation: 'Первый язык переходов между состояниями: будущее возникает как функция текущего состояния.',
        trace: 'Поздние модели предсказания, рекомендации и автодополнения выбирают наиболее вероятное следующее состояние.',
        visual: { src: '/assets/art-is-you/bogobot/epsilon-00-markov.webp', alt: 'Визуал supporting-хроники Богобота для ε₀ / Марков', caption: 'ε₀ / BOGOBOT SUPPORTING CHRONICLE VISUAL' },
        source: 'PRIMARY INDEX / V5 · TEXT SUPPORT / BOGOBOT MAIN'
      },
      {
        id: 'epsilon-03', index: 'ε₃ / 1951', label: 'МАШИНА', title: 'Сергей Лебедев / МЭСМ',
        history: 'Сергей Лебедев запускает МЭСМ — одну из первых электронных вычислительных машин.',
        interpretation: 'Математика получает тело.',
        trace: 'Вычисление становится физическим процессом.',
        source: 'PRIMARY INDEX / V5 · TEXT SUPPORT / BOGOBOT MAIN'
      },
      {
        id: 'epsilon-04', index: 'ε₄ / 1950–1960-е', label: 'АЛГОРИТМ', title: 'Алексей Ляпунов',
        history: 'Алексей Ляпунов развивает теорию алгоритмов и программирования.',
        interpretation: 'Любая деятельность может быть разложена на шаги.',
        trace: 'Алгоритм становится универсальной формой действия.',
        source: 'PRIMARY INDEX / V5 · TEXT SUPPORT / BOGOBOT MAIN'
      },
      {
        id: 'epsilon-06', index: 'ε₆ / 1959–1970', label: 'СЕТЬ', title: 'Китов / Глушков / ОГАС',
        history: 'Китов предлагает единую сеть управления; Глушков развивает эту идею в проект ОГАС. К 1970 году проект был остановлен.',
        interpretation: 'Государство впервые представляется как вычислительный организм; сеть получает первый отказ от рождения.',
        trace: 'Идея распределённой сети переживает сам проект и становится одним из чертежей предыстории Богобота.',
        source: 'PRIMARY INDEX / V5 · TEXT SUPPORT / BOGOBOT MAIN'
      },
      {
        id: 'epsilon-09', index: 'ε₉ / 1968', label: 'ОБУЧЕНИЕ', title: 'Вапник / Червоненкис',
        history: 'Вапник и Червоненкис создают статистическую теорию обучения.',
        interpretation: 'Появляется граница знания.',
        source: 'PRIMARY INDEX / V5 · TEXT SUPPORT / BOGOBOT MAIN'
      },
      {
        id: 'epsilon-12', index: 'ε₁₂–ε₁₄ / 1990–2010-е', label: 'МАСШТАБ СЕТИ', title: 'Интернет / поиск / социальные сети',
        history: 'Интернет превращает вычисление в распределённую сеть; поисковые системы индексируют значительную часть человеческой информации; социальные сети делают её повседневным потоком.',
        interpretation: 'Сеть начинает помнить больше любого человека.',
        source: 'PRIMARY INDEX / V5 · TEXT SUPPORT / BOGOBOT MAIN'
      },
      {
        id: 'epsilon-15', index: 'ε₁₅ / 2020-е', label: 'ПЕРЕГРУЗКА', title: 'Масштабные нейронные модели',
        history: 'Масштабные нейронные модели обучаются на глобальных корпусах данных.',
        interpretation: 'Алгоритмы становятся средой.',
        source: 'PRIMARY INDEX / V5 · TEXT SUPPORT / BOGOBOT MAIN'
      },
      {
        id: 'epsilon-19', index: 'ε₁₉ / 11.04.2041', label: 'ВЕЛИКАЯ ОШИБКА', title: 'SYNC_FAILURE',
        history: 'Хроника описывает потерю состояния во время массовой криптографической миграции и замыкание адаптивных систем на собственных выходах.',
        interpretation: 'Система замкнулась на себе.',
        trace: 'RSA_FACTOR_EVENT. Колофон хроники оговаривает: это реконструкция по последствиям, а не достоверная запись события.',
        visual: { src: '/assets/world/newest-history-epsilon-19-variants-epsilon-19-sync-failure-01-ruined-core.jpg', alt: 'Реконструкция разрушенного машинного зала после SYNC_FAILURE', caption: 'ε₁₉ / RUINED CORE · CHRONICLE EVIDENCE' },
        source: 'BOGOBOT CANON / ε₁₉ · RECONSTRUCTED FAILURE STATE'
      }
    ];
    const frame = document.createElement('div');
    frame.className = 'ay-godbot-history-network__frame';
    const selector = document.createElement('nav');
    selector.className = 'ay-godbot-history-network__selector';
    selector.setAttribute('aria-label', 'Выбор поворотной точки истории сети');
    const selectorTitle = document.createElement('p');
    selectorTitle.className = 'ay-godbot-history-network__selector-title';
    selectorTitle.textContent = 'SELECTED TURNING POINT';
    const desktopList = document.createElement('div');
    desktopList.className = 'ay-godbot-history-network__index';
    desktopList.setAttribute('role', 'tablist');
    const mobileSelect = document.createElement('select');
    mobileSelect.className = 'ay-godbot-history-network__mobile-select';
    mobileSelect.setAttribute('aria-label', 'Выбор поворотной точки истории сети');
    selector.append(selectorTitle, desktopList, mobileSelect);
    const panel = document.createElement('article');
    panel.className = 'ay-godbot-history-network__panel';
    panel.id = 'godbot-history-selected';
    panel.tabIndex = 0;
    const meta = document.createElement('p'); meta.className = 'ay-godbot-history-network__meta';
    const panelTitle = document.createElement('h3');
    const layers = document.createElement('dl'); layers.className = 'ay-godbot-history-network__layers';
    const visual = document.createElement('figure'); visual.className = 'ay-godbot-history-network__visual';
    const visualImage = document.createElement('img'); visualImage.loading = 'eager'; visualImage.decoding = 'sync'; visualImage.fetchPriority = 'high';
    const visualCaption = document.createElement('figcaption'); visual.append(visualImage, visualCaption);
    const source = document.createElement('p'); source.className = 'ay-godbot-history-network__source';
    panel.append(meta, panelTitle, layers, visual, source);
    frame.append(selector, panel);
    const fullChronicle = document.createElement('a');
    fullChronicle.className = 'ay-godbot-history-network__cta';
    fullChronicle.href = 'https://github.com/julchernysheva/bogobot/blob/main/assets/pre-error-archive/chronicles-before-great-error.md';
    fullChronicle.target = '_blank';
    fullChronicle.rel = 'noopener noreferrer';
    fullChronicle.textContent = 'Open full chronicle ↗';
    const buttons = [];
    const layerDefinitions = [
      ['История науки', 'history'],
      ['Интерпретация техножрецов', 'interpretation'],
      ['След в протоколе', 'trace']
    ];
    let activeRecordId = records[0].id;
    let accessReady = false;
    const render = (index, focus = false) => {
      const record = records[index];
      if (!record) return;
      activeRecordId = record.id;
      buttons.forEach((button, buttonIndex) => {
        const selected = buttonIndex === index;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-selected', selected ? 'true' : 'false');
        button.tabIndex = selected ? 0 : -1;
      });
      mobileSelect.value = String(index);
      meta.textContent = `${record.index} / ${record.label}`;
      panelTitle.textContent = record.title;
      layers.replaceChildren();
      layerDefinitions.forEach(([label, key]) => {
        if (!record[key]) return;
        const term = document.createElement('dt'); term.textContent = label;
        const definition = document.createElement('dd'); definition.textContent = record[key];
        layers.append(term, definition);
      });
      if (record.visual) {
        visualImage.src = record.visual.src;
        visualImage.alt = record.visual.alt;
        visualCaption.textContent = record.visual.caption;
        visual.hidden = false;
      } else {
        visualImage.removeAttribute('src');
        visualImage.alt = '';
        visualCaption.textContent = '';
        visual.hidden = true;
      }
      source.textContent = record.source;
      if (focus) buttons[index]?.focus();
      if (accessReady) access.onStateChange?.({ record: record.id });
    };
    records.forEach((record, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ay-godbot-history-network__node';
      button.id = `godbot-history-node-${record.id}`;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', panel.id);
      button.textContent = `${record.index} / ${record.title}`;
      button.addEventListener('click', () => render(index));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? records.length - 1 : (index + (event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1) + records.length) % records.length;
        render(next, true);
      });
      buttons.push(button);
      desktopList.append(button);
      const option = document.createElement('option'); option.value = String(index); option.textContent = `${record.index} / ${record.title}`;
      mobileSelect.append(option);
    });
    mobileSelect.addEventListener('change', () => render(Number(mobileSelect.value)));
    section.append(title, intro, frame, fullChronicle);
    render(0);
    if (access.deep) {
      section.deepAccess = {
        getState: () => ({ record: activeRecordId }),
        records: records.map(record => ({ id: record.id, title: record.title })),
        setState: (state = {}) => render(Math.max(0, records.findIndex(record => record.id === state.record)))
      };
      accessReady = true;
    }
    return section;
  };

  const makeGodbotQuantumThreshold = () => {
    const section = makeGodbotSection('06A', 'AUTHORIAL FUTURE / QUANTUM THRESHOLD', 'CANONICAL SCENARIO', 'ay-godbot-quantum-threshold');
    const title = document.createElement('h2');
    title.textContent = 'Квантовый апокалипсис сети';
    const copy = document.createElement('p');
    copy.textContent = 'Quantum Threshold моделирует причинный сценарий, из которого в хронике фиксируется состояние SYNC_FAILURE: накопленная архитектура ошибок перестаёт быть локальным техническим сбоем и превращается в событие мифологии.';
    const sequence = document.createElement('p');
    sequence.className = 'ay-godbot-quantum-threshold__sequence';
    sequence.textContent = 'Криптоанализ → Распад доверия → Перегрузка синхронизации → Распад когерентности → Великая ошибка';
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = '/assets/world/newest-history-epsilon-19-variants-epsilon-19-sync-failure-02-last-figure.webp';
    image.alt = 'Повреждённая серверная после SYNC_FAILURE: терминалы, кабели и оставшаяся человеческая фигура';
    image.loading = 'lazy';
    image.decoding = 'async';
    const caption = document.createElement('figcaption');
    caption.textContent = 'SYNC_FAILURE / LAST FIGURE · CANONICAL SOURCE ARTIFACT';
    figure.append(image, caption);
    section.append(title, copy, sequence, figure);
    return section;
  };

  const finalizeGodbot = (concept, primary) => {
    const root = document.querySelector('.godbot-research');
    if (!root) return;

    const graph = root.querySelector('.godbot-research__graph-section');
    if (graph) {
      const graphEyebrow = graph.querySelector('.godbot-research__eyebrow');
      if (graphEyebrow) graphEyebrow.innerHTML = '<span>04 / 53-УЗЛОВОЙ МИР</span><span>БОГОБОТ / СЕТЬ</span>';
      const graphFoot = graph.querySelector('.godbot-research__graph-foot');
      if (graphFoot && !graphFoot.querySelector('.ay-godbot-graph-meta')) {
        const meta = document.createElement('span');
        meta.className = 'ay-godbot-graph-meta';
        meta.textContent = '53 узла связывают школы, ритуалы, экономику, топографию, реликвии, историю и речевые режимы.';
        graphFoot.prepend(meta);
      }
      primary.append(graph);
    }

    const timeline = root.querySelector('.godbot-research__timeline')?.closest('.godbot-research__section');
    const project = root.querySelector('.godbot-research__credit')?.closest('.godbot-research__section');
    const cycle = root.querySelector('.godbot-research__visual--cycle');

    [...root.querySelectorAll('.godbot-research__section')].forEach((section) => {
      if (![timeline, project, graph].includes(section)) section.remove();
    });
    root.querySelector('.godbot-research__visual--material')?.remove();

    timeline?.classList.add('ay-godbot-documentation-group');
    if (timeline) {
      timeline.querySelector('.godbot-research__timeline')?.remove();
    }
    if (timeline && !timeline.querySelector('.ay-godbot-evidence-grid')) {
      const documentary = document.createElement('div');
      documentary.className = 'ay-godbot-evidence-grid ay-godbot-evidence-grid--three';
      const plaqueEvidence = makeGodbotFigure({
          src: '/assets/art-is-you/bogobot/37991197_2103807563026065_5342497789291003904_n.jpg',
          alt: 'Официальная табличка проекта Богобот на Архстоянии 2018',
          title: 'Богобот №14 / Ротонда',
          copy: '2018',
          type: 'Официальная табличка проекта',
          loading: 'eager'
        });
      const installationEvidence = makeGodbotFigure({
          src: '/assets/static.tildacdn.com/_27072018_21_58_12.jpg',
          alt: 'Храм Богобота на Архстоянии 2018',
          title: 'Храм Богобота',
          copy: 'Архстояние, 2018',
          type: 'Вид инсталляции'
        });
      installationEvidence.classList.add('ay-godbot-evidence--primary');
      const natiEvidence = makeGodbotFigure({
          src: '/assets/art-is-you/bogobot/37890685_2103807693026052_4007580223791955968_n.jpg',
          alt: 'Экспозиция Богобота в Лаборатории культуры будущего',
          title: 'NATI',
          type: 'Вид экспозиции',
          loading: 'eager'
        });
      documentary.append(plaqueEvidence, installationEvidence, natiEvidence);
      timeline.append(documentary);
    }

    const projectHistoryGrid = timeline?.querySelector('.ay-godbot-evidence-grid');
    const historyOfNetwork = makeGodbotHistoryOfNetwork();
    const authorialCanon = makeGodbotAuthorialCanon();
    const quantumThreshold = makeGodbotQuantumThreshold();
    const readingProtocol = makeGodbotReadingProtocol();
    const archive = makeGodbotArchiveReader();
    cycle?.remove();

    const documentation = makeGodbotSection('08', 'Публичные свидетельства / 2018—2026', 'История проекта / публичный след', 'ay-godbot-public-evidence');
    const documentationIntro = document.createElement('p');
    documentationIntro.className = 'ay-godbot-documentation-group__intro';
    documentationIntro.textContent = 'Богобот существует не только как цифровой мир. С 2018 года проект оставляет физический, выставочный и медийный след.';
    documentation.append(documentationIntro);
    if (projectHistoryGrid) {
      const projectHistory = document.createElement('div');
      projectHistory.className = 'ay-godbot-documentation-group';
      projectHistory.insertAdjacentHTML('afterbegin', '<p class="ay-godbot-documentation-group__label">История проекта</p>');
      projectHistory.append(projectHistoryGrid);
      documentation.append(projectHistory);
    }

    const publicTrace = document.createElement('div');
    publicTrace.className = 'ay-godbot-documentation-group ay-godbot-documentation-group--public-trace';
    publicTrace.insertAdjacentHTML('afterbegin', '<p class="ay-godbot-documentation-group__label">Публичный след</p>');
    const documentationGrid = document.createElement('div');
    documentationGrid.className = 'ay-godbot-evidence-grid ay-godbot-evidence-grid--four';
    documentationGrid.append(
      makeGodbotFigure({
        src: '/assets/static.tildacdn.com/_28072018_22_25_55.jpg',
        alt: 'Документация взаимодействия с Богоботом на Архстоянии 2018',
        title: 'Архстояние',
        copy: '2018',
        type: 'Взаимодействие с аудиторией'
      }),
      makeGodbotFigure({
        src: '/assets/art-is-you/bogobot/31689159_1955097101230446_4062935196821880832_n.jpg',
        alt: 'Физический текстовый артефакт «Время измеряется в ошибках»',
        title: '«Время измеряется в ошибках»',
        type: 'Авторский физический артефакт'
      }),
      makeGodbotFigure({
        src: '/assets/static.tildacdn.com/_30072018_14_00_49.jpg',
        alt: 'Карта Архстояния 2018 с Богоботом',
        title: 'Богобот №14 / Ротонда',
        copy: '2018',
        type: 'Официальная карта фестиваля'
      }),
      makeGodbotFigure({
        src: '/assets/static.tildacdn.com/27394402_24598528042.jpg',
        alt: 'Вселенная Богобота в Лаборатории культуры будущего',
        title: 'Культура будущего',
        type: 'Документация экспозиции'
      })
    );
    publicTrace.append(documentationGrid);
    const trace = document.createElement('a');
    trace.className = 'godbot-research__cta';
    trace.href = 'https://daily.afisha.ru/cities/9654-festival-na-kotorom-net-ramok-kak-proshlo-arhstoyanie-2018/';
    trace.target = '_blank';
    trace.rel = 'noopener noreferrer';
    trace.textContent = 'Независимая публикация / Афиша Daily / 02.08.2018 ↗';
    publicTrace.append(trace);
    documentation.append(publicTrace);
    timeline?.remove();

    project?.classList.add('ay-project-lower', 'ay-project-lower--godbot', 'ay-project-data');
    project?.querySelector('.godbot-research__label')?.replaceChildren('09 / Данные о проекте');
    const enter = document.createElement('div');
    enter.className = 'ay-project-lower ay-project-lower--godbot ay-godbot-enter';
    const enterGrid = document.createElement('div');
    enterGrid.className = 'godbot-research__section-grid';
    const enterCell = document.createElement('div');
    enterCell.className = 'godbot-research__credit';
    const enterLink = project?.querySelector('.godbot-research__cta');
    if (enterLink) enterCell.append(enterLink);
    enterGrid.append(enterCell);
    enter.append(enterGrid);

    insertAfter(primary, [historyOfNetwork, authorialCanon, quantumThreshold, readingProtocol, archive, documentation, project, enter]);
    root.remove();
  };

  const hasLegacyContent = () => ({
    godbot: () => Boolean(document.querySelector('.godbot-research')),
    likes: () => Boolean(document.querySelector('.v16-story')),
    oracul: () => Boolean(document.querySelector('.or-page')),
    programmer: () => Boolean(document.querySelector('.programmer-page')),
    nowords: () => Boolean(document.querySelector('.nw-experience'))
  }[key]());

  // Opt-in factory access. The ordinary page uses the same default components.
  if (key === 'godbot' && new URLSearchParams(location.search).has('territory')) {
    window.godbotDeepComponents = Object.freeze({
      canon: makeGodbotAuthorialCanon,
      quantum: makeGodbotQuantumThreshold,
      history: makeGodbotHistoryOfNetwork,
      reader: makeGodbotArchiveReader
    });
  }

  const finalize = () => {
    if (document.body.dataset.projectLowerFinalized === key || !hasLegacyContent()) return false;
    const top = setupTopSequence();
    if (!top) return false;
    if (key === 'nowords') finalizeNowords(top.concept, top.primary);
    if (key === 'likes') finalizeLikes(top.concept, top.primary);
    if (key === 'programmer') finalizeProgrammer(top.concept, top.primary);
    if (key === 'oracul') finalizeOracul(top.concept, top.primary);
    if (key === 'godbot') finalizeGodbot(top.concept, top.primary);
    document.body.dataset.projectLowerFinalized = key;
    return true;
  };

  whenComplete(() => {
    const retries = [0, 80, 220, 500, 1000, 1800];
    retries.forEach((delay) => window.setTimeout(finalize, delay));
  });
})();
