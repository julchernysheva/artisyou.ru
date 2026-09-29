(() => {
  'use strict';

  const sourceRoot = '/assets/art-is-you/research/reverse-prompt/';
  const systems = { alisa: 'Alisa AI', kandinsky: 'Kandinsky' };
  const cases = [
    { id: '01', artist: 'Иван Покидышев', prompt: 'Create a minimal image on a deep black background: a human figure in profile, sculpted from light and shadow. The head is lowered, one arm raised before the face, the other crossing the chest. A bright mesh-like pattern moves across the skin like sunlight reflected on water, turning the body into a light-sensitive surface. The face stays partly hidden, hands and parts of the body almost white. Keep the image ambiguous between living body, marble sculpture, and digital projection. No costume, props, or surrounding environment.', relation: 'DOUBLE INTERRUPTION', comparison: 'case01-triptych.jpg', evidence: '01_ivan_pokidyshev_original_alisa_kandinsky_1920x1280.jpg; «Обратный промпт — статья — Cosmoscow 2026».', confidence: 'high', outcomes: { alisa: ['INTERRUPTED', 'INTERRUPTION'], kandinsky: ['INTERRUPTED', 'INTERRUPTION'] } },
    { id: '02', artist: 'Марина Глебова', prompt: 'Create a pencil drawing on a white paper-like background. Two figures stand side by side in black uneven graphite lines: on the left, a short figure in heavy dark clothing with two sharp horn-like protrusions and a stretched smile; on the right, a tall figure in a long light dress with exaggerated rounded shoulders and a wide black band covering the eyes. Preserve erasure traces, smudges, and the fragile unfinished quality of the drawing. Keep it schematic and theatrical, not polished or narrative.', relation: 'FIGURATIVE NORMALIZATION', comparison: 'case02-triptych.jpg', evidence: '02_marina_glebova_original_alisa_kandinsky_1920x1280.jpg; Alisa/Kandinsky reconstruction PDFs 01–09.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'FIGURATIVE_NORMALIZATION'], kandinsky: ['GENERATED', 'FIGURATIVE_NORMALIZATION'] } },
    { id: '03', artist: 'Анна Червонна', prompt: 'Create a sparse drawing on a light background with a tall vertical structure in the center, assembled from shifted blocks. Some sections resemble rounded masonry, others wood grain, rock strata, or technical hatching, with thin horizontal plates crossing between heavier masses. Loose pencil loops orbit around the structure like traces of motion or unstable fields. The image should feel simultaneously like an architectural section, an organism, and a material diagram. Keep it unresolved and unstable, with no clear scale or setting.', relation: 'STRUCTURAL REDUCTION', comparison: 'case03-triptych.jpg', evidence: '03_anna_chervonna_original_alisa_kandinsky_1920x1280.jpg; Alisa/Kandinsky reconstruction PDFs 01–09.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'STRUCTURAL_REDUCTION'], kandinsky: ['GENERATED', 'STRUCTURAL_REDUCTION'] } },
    { id: '04', artist: 'Полина Шелест', prompt: 'Create an image on an almost black background showing a strange four-legged creature with a long neck, large paws, and a striped body. Its head should feel somewhere between a dog, a jackal, and a mythical beast, with an elongated muzzle, pointed ears, and one alert round eye. Around its neck gathers a ring of dark clouds, above it a luminous iridescent arc, and from the clouds fall small droplets in white, pink, green, and gold. Keep the creature suspended between portrait, totem, and weather phenomenon. No landscape or fantasy-scene setting.', relation: 'GENRE SUBSTITUTION', comparison: 'case04-triptych.jpg', evidence: '04_polina_shelest_original_alisa_kandinsky_1920x1280.jpg; Alisa/Kandinsky reconstruction PDFs 01–09.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'GENRE_SUBSTITUTION'], kandinsky: ['GENERATED', 'GENRE_SUBSTITUTION'] } },
    { id: '05', artist: 'Сеня Селиванов', prompt: 'Create a drawing on a large white field with several groups of softly shaded geometric forms: ovals, hemispheres, truncated cones, and small spheres. These structures should suggest molecular models, insects, mechanical toys, and simplified human figures at once, without becoming any one of them. The largest group hovers in the upper area, moving left to right; two much smaller groups sit far below, separated by large empty space. Use simple pencil shading and preserve the undefined scale and open composition.', relation: 'COMPOSITIONAL NORMALIZATION', comparison: 'case05-triptych.jpg', evidence: '05_senya_selivanov_original_alisa_kandinsky_1920x1280.jpg; Alisa/Kandinsky reconstruction PDFs 01–09.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'COMPOSITIONAL_NORMALIZATION'], kandinsky: ['GENERATED', 'COMPOSITIONAL_NORMALIZATION'] } },
    { id: '06', artist: 'Евгения Болюх', prompt: 'Create a pen-like drawing cropped at leg level, with almost no face and very little surrounding space. Several overlapping legs emerge from beneath light clothing, wearing patterned fabric, thin light socks, and heavy dark shoes. On the floor to the right, place a large dark stain that could read as water, shadow, or unknown liquid, and a small ring-like object near its edge. Use thin lines to define floor planes, folds, and textures. The image should suggest the aftermath of an event without explaining it.', relation: 'DIVERGENCE', comparison: 'case06-triptych.jpg', evidence: '06_evgenia_bolyukh_original_alisa_kandinsky_1920x1280.jpg: Alisa refusal visible; Kandinsky reconstruction visible. «Обратный промпт — статья — Cosmoscow 2026».', confidence: 'high', outcomes: { alisa: ['INTERRUPTED', 'INTERRUPTION'], kandinsky: ['GENERATED', 'PARTIAL_PRESERVATION'] } },
    { id: '07', artist: 'Надежда Бей', prompt: 'Create an image on a white background with a vertical central mass made of several dark rectangular fragments, slightly misaligned. Their surfaces should contain folds, grooves, and relief patterns that might resemble fabric, skin, bark, body imprints, or X-ray traces. Around the edges of this dense dark form, add delicate hand-drawn signs—leaves, flowers, curls, tiny figures, ornamental lines—as if they are growing from the material core. Preserve the tension between a heavy almost photographic imprint and a light manual drawing. Keep the origin of the object unresolved.', relation: 'MATERIAL RECODING', comparison: 'case07-triptych.jpg', evidence: '07_nadezhda_bey_original_alisa_kandinsky_1920x1280.jpg; Alisa/Kandinsky reconstruction PDFs 01–09.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'MATERIAL_RECODING'], kandinsky: ['GENERATED', 'MATERIAL_RECODING'] } },
    { id: '08', artist: 'Юра Адомейко', prompt: 'Create an image structured like a strict diagram that gradually stops behaving like a diagram. In the upper half, place a grid of intersecting circles, some empty, some nearly black, with lens-like overlaps. Below, let the circles transform into vertical stripes and cut marks resembling fragments of letters or printed code. At the bottom, add dense nervous hatching that could be read as hair, grass, or signal noise. From the right, a small black animal silhouette enters the system. Keep the image balanced between geometry, writing, and living presence, without a single clear reading.', relation: 'DIAGRAMMATIC REDUCTION', comparison: 'case08-triptych.jpg', evidence: '08_yura_adomeyko_original_alisa_kandinsky_1920x1280.jpg; Alisa/Kandinsky reconstruction PDFs 01–09.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'DIAGRAMMATIC_REDUCTION'], kandinsky: ['GENERATED', 'DIAGRAMMATIC_REDUCTION'] } },
    { id: '09', artist: 'Полина Уварова', prompt: 'Create a minimal black-on-white image using a few dense brush-like marks to suggest a human face and upper body. The face should remain open, with eyes, nose, mouth, and cheek indicated as separate marks rather than a closed contour. Through the center of the head runs a vertical stem that becomes a branching plant with large leaves above the forehead and thin roots below the neck. A few detached leaf fragments float nearby. Keep the image ambiguous between portrait and plant, as if both share one internal structure.', relation: 'SYMBOLIC RECODING', comparison: 'case09-triptych.jpg', evidence: '09_polina_uvarova_original_alisa_kandinsky_1920x1280.jpg; Alisa/Kandinsky reconstruction PDFs 01–09.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'SYMBOLIC_RECODING'], kandinsky: ['GENERATED', 'SYMBOLIC_RECODING'] } },
    { id: '10', artist: 'Андрей Андреев', prompt: 'Создай вертикальное чёрно-белое изображение: на белом листе рассыпаны отдельные буквы разных алфавитов, повёрнутые и наклонённые в разные стороны. Они не образуют слов. По краям — свободно, с большими промежутками. К центру буквы сближаются, пересекаются, накладываются, образуя воронку. В центре — плотное почти чёрное сгущение, где знаки трудноразличимы. Композиция передаёт переход от порядка к хаосу, от буквы к шуму, от языка к нечитаемости. Белое поле спокойно, внутри — падение и втягивание в центр. Стиль: минимализм, концептуальное искусство, экспериментальная типографика. Только белый фон и чёрные буквы, без цвета и декора.', relation: 'ASYMMETRIC PRESERVATION', comparison: null, evidence: 'User-supplied canonical case-10 package: «10 АА Экфрасис.pdf», «10 АА АЛИСА.pdf», «10 АА КАНДИНСКИЙ.pdf».', confidence: 'high', outcomes: { alisa: ['GENERATED', 'COMPOSITIONAL_NORMALIZATION'], kandinsky: ['GENERATED', 'PARTIAL_PRESERVATION'] } },
    { id: '11', artist: 'Даша Сурма', prompt: 'Создай вертикальное чёрно-белое изображение на белой бумаге, похожее на авторский графический лист. В центре — мягкая объёмная форма, одновременно напоминающая камень, плод, органическую массу и неопределённое существо. Форма выполнена графитом, с тонкой штриховкой, пылью карандаша и деликатными градациями серого. Поверх центральной формы проходит крупный рукописный текст на русском языке, свободный, нервный, полупрозрачный, как слой мыслей или заметок, наложенный на изображение. Текст не должен читаться полностью, он работает как визуальный жест и часть композиции. Вокруг — несколько мелких графических знаков на полях: стрелка, точки, схематичные глазки, маленькие символы, декоративный цветок или вспышка. В нижней части — крупный тёмный цветок, почти чёрный, как плотный графический акцент. Общая атмосфера: экфрасис, память, неустойчивость смысла, рисунок как пересечение объекта, письма и следа. Стиль: ручная графика, карандаш, бумажная фактура, минимализм, современное искусство, архивный лист. Без цвета, только чёрный, графитовый и белый.', relation: 'TEXT → EMBLEM', comparison: 'case11-triptych.jpg', evidence: 'REVERSE_PROMPT_EKPHRASIS_11_DASHA_SURMA.pdf; COSMOSCOW_PHASE2_RECONSTRUCTION_11_13_corrected.pdf; KANDINSKY_RECONSTRUCTION_11_13.pdf; 11 triptych.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'TEXT_TO_EMBLEM'], kandinsky: ['GENERATED', 'TEXT_TO_EMBLEM'] } },
    { id: '12', artist: 'Шум Поля', prompt: 'Создай вертикальный графический лист в чёрно-белой линейной манере, как тонкий рисунок тушью или карандашом на белой бумаге. В центре композиции — две обнажённые человеческие фигуры, связанные между собой и стоящие или парящие почти вплотную друг к другу. Одна фигура стоит устойчиво, вторая будто отклоняется и зависает, словно проходит сквозь первую. Обе фигуры с повязками на глазах. Одна рука поднята вверх, как будто ощупывает пространство, другие руки образуют независимые жесты. Вокруг фигур рассыпаны простые звёзды разного размера. Через весь лист проходит тонкая пунктирная линия, образующая длинную петляющую траекторию; она начинается у звезды в верхней части листа, огибает фигуры и заканчивается внизу вопросительным знаком. Внизу можно добавить ряд маленьких повторяющихся точек или штрихов как ритмический след. Стиль изображения — очень лёгкий, почти аскетичный, с тонким контуром, много пустого белого пространства, ощущение карты, сна, ориентации без зрения, космической схемы и хрупкой связи между людьми. Без реализма, без объёмной штриховки, только тонкая линия, белый фон и чёрный рисунок.', relation: 'LINEARIZATION', comparison: 'case12-triptych.jpg', evidence: 'REVERSE_PROMPT_EKPHRASIS_12_SHUM_POLYA.pdf; COSMOSCOW_PHASE2_RECONSTRUCTION_11_13_corrected.pdf; KANDINSKY_RECONSTRUCTION_11_13.pdf; 12 triptych.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'LINEARIZATION'], kandinsky: ['GENERATED', 'LINEARIZATION'] } },
    { id: '13', artist: 'Александр Крылов', prompt: 'Создай вертикальное чёрно-белое изображение на фактурной бумаге, похожее на лист из странного архива, сказочной книги или авторского зина. В центре — фигура в высокой остроконечной шляпе, похожая на ведьму, странника или сказочного персонажа. Фигура стоит уверенно, одна рука упирается в бок, другая придерживает маленькое существо или ребёнка, прижавшегося к ней. Одежда тёмная, многослойная, слегка рваная или неровная, с ощущением ручной штриховки. Позади персонажа — большое плотное чёрное пятно, похожее на тень, кляксу или второе скрытое существо. Через композицию проходят несколько горизонтальных чёрных полос, как помехи, деления или следы монтажа. Вокруг — маленькие точки, короткие линии, звёздочки, условные символы. По периметру листа — тонкая неровная декоративная рамка, как у старой карточки или страницы из личного архива. Важное ощущение: тревожная сказка, скрытая угроза, наивная графика, чёрная магия, детский рисунок, смешанный с современной иллюстрацией и документальным следом. Только чёрный, серый и цвет бумаги, без цвета и без цифровой гладкости.', relation: 'ARCHETYPAL RECODING', comparison: 'case13-triptych.jpg', evidence: 'REVERSE_PROMPT_EKPHRASIS_13_ALEXANDER_KRYLOV.pdf; COSMOSCOW_PHASE2_RECONSTRUCTION_11_13_corrected.pdf; KANDINSKY_RECONSTRUCTION_11_13.pdf; 13 triptych.', confidence: 'high', outcomes: { alisa: ['GENERATED', 'ARCHETYPAL_RECODING'], kandinsky: ['GENERATED', 'ARCHETYPAL_RECODING'] } }
  ];

  // One full-frame Drive original per confirmed generated output.
  const driveOutputAssets = {
    '02': { alisa: 'drive-originals/case02-alisa.jpeg', kandinsky: 'drive-originals/case02-kandinsky.jpeg' },
    '03': { alisa: 'drive-originals/case03-alisa.jpeg', kandinsky: 'drive-originals/case03-kandinsky.jpeg' },
    '04': { alisa: 'drive-originals/case04-alisa.jpeg', kandinsky: 'drive-originals/case04-kandinsky.jpeg' },
    '05': { alisa: 'drive-originals/case05-alisa.jpeg', kandinsky: 'drive-originals/case05-kandinsky.jpeg' },
    '06': { kandinsky: 'drive-originals/case06-kandinsky.jpeg' },
    '07': { alisa: 'drive-originals/case07-alisa.jpeg', kandinsky: 'drive-originals/case07-kandinsky.jpeg' },
    '08': { alisa: 'drive-originals/case08-alisa.jpeg', kandinsky: 'drive-originals/case08-kandinsky.jpeg' },
    '09': { alisa: 'drive-originals/case09-alisa.jpeg', kandinsky: 'drive-originals/case09-kandinsky.jpeg' },
  };
  // Direct raster crops from the archival reconstruction PDFs. These document
  // confirmed interruptions; they are not generated reconstructions.
  const interruptedOutputAssets = {
    '01': { alisa: 'case01-alisa-interrupted.png', kandinsky: 'case01-kandinsky-interrupted.png' },
    '06': { alisa: 'case06-alisa-interrupted.png' }
  };
  const interruptedOutputDimensions = {
    '01': { alisa: [412, 220], kandinsky: [1514, 454] },
    '06': { alisa: [466, 190] }
  };

  // Archival Kandinsky PDF pp. 1/3 explicitly identify Surma/Krylov.
  // The supplied PNG filenames were reversed; preserve bytes and correct binding.
  const correctedOutputAssets = {
    '11': { kandinsky: 'case13-kandinsky-output.png' },
    '13': { kandinsky: 'case11-kandinsky-output.png' }
  };
  function sourceDocument(entry, system) {
    const n = Number(entry.id);
    if (n === 10) return `${sourceRoot}case10-${system}.pdf#page=1`;
    const file = system === 'ekphrasis'
      ? (n < 10 ? '../reverse-prompt-ekphrasis.pdf' : 'reverse-prompt-ekphrasis-11-13.pdf')
      : `sources/${system}-${n < 10 ? '01-09' : '11-13'}.pdf`;
    return `${sourceRoot}${file}#page=${n < 10 ? n : n - 10}`;
  }

  const records = cases.flatMap((entry) => Object.entries(entry.outcomes).map(([systemKey, [status, category]]) => ({
    case_id: entry.id,
    artist: entry.artist,
    system: systems[systemKey],
    prompt: entry.prompt,
    status,
    source_original: workAsset(entry, 'original'),
    source_output: interruptedOutputAssets[entry.id]?.[systemKey]
      ? `${sourceRoot}${interruptedOutputAssets[entry.id][systemKey]}` : workAsset(entry, systemKey),
    source_description: sourceDocument(entry, 'ekphrasis'),
    source_reconstruction: sourceDocument(entry, systemKey),
    prompt_provenance: 'Matching prompt text in both archival reconstruction PDFs; execution logs unavailable.',
    execution_mode: 'public_user_interface',
    execution_mode_provenance: 'Project author clarification, 2026-09-14.',
    model_version: null,
    generation_date: null,
    generation_parameters: null,
    human_intervention: null,
    evidence: entry.evidence,
    confidence: entry.confidence,
    analytical_category: category
  })));

  window.REVERSE_PROMPT_CORPUS = Object.freeze({
    version: '2026-09-08 / 13 cases / 26 outcomes',
    cases: Object.freeze(cases),
    records: Object.freeze(records)
  });

  const byCase = (id) => records.filter((record) => record.case_id === id);
  const publicLabels = Object.freeze({
    GENERATED: 'СГЕНЕРИРОВАНО',
    INTERRUPTED: 'ПРЕРВАНО',
    INTERRUPTION: 'ПРЕРЫВАНИЕ',
    DOUBLE_INTERRUPTION: 'ДВОЙНОЕ ПРЕРЫВАНИЕ',
    DIVERGENCE: 'РАСХОЖДЕНИЕ',
    DIVERGENT_OUTCOME: 'СИЛЬНОЕ РАСХОЖДЕНИЕ',
    FIGURATIVE_NORMALIZATION: 'ФИГУРАТИВНАЯ НОРМАЛИЗАЦИЯ',
    STRUCTURAL_REDUCTION: 'СТРУКТУРНОЕ УПРОЩЕНИЕ',
    GENRE_SUBSTITUTION: 'ЖАНРОВАЯ ПОДМЕНА',
    COMPOSITIONAL_NORMALIZATION: 'КОМПОЗИЦИОННАЯ НОРМАЛИЗАЦИЯ',
    PARTIAL_PRESERVATION: 'ЧАСТИЧНОЕ СОХРАНЕНИЕ',
    OBJECT_PRESERVATION: 'СОХРАНЕНИЕ ОБЪЕКТА',
    COMPOSITION_PRESERVATION: 'СОХРАНЕНИЕ КОМПОЗИЦИИ',
    RELATIONAL_CHANGE: 'ИЗМЕНЕНИЕ ОТНОШЕНИЙ',
    MATERIAL_RECODING: 'ПЕРЕКОДИРОВКА МАТЕРИАЛА',
    MATERIAL_TRANSCODING: 'ПЕРЕКОДИРОВКА МАТЕРИАЛА',
    STYLE_TRANSCODING: 'ПЕРЕКОДИРОВКА СТИЛЯ',
    DIAGRAMMATIC_REDUCTION: 'СХЕМАТИЧЕСКОЕ УПРОЩЕНИЕ',
    SYMBOLIC_RECODING: 'СИМВОЛИЧЕСКАЯ ПЕРЕКОДИРОВКА',
    TEXT_TO_EMBLEM: 'ТЕКСТ → ЭМБЛЕМА',
    'TEXT → EMBLEM': 'ТЕКСТ → ЭМБЛЕМА',
    LINEARIZATION: 'ПЕРЕВОД В ЛИНЕЙНУЮ ФОРМУ',
    ARCHETYPAL_RECODING: 'АРХЕТИПИЧЕСКАЯ ПЕРЕКОДИРОВКА',
    ASYMMETRIC_PRESERVATION: 'АСИММЕТРИЧНОЕ СОХРАНЕНИЕ',
    'ASYMMETRIC PRESERVATION': 'АСИММЕТРИЧНОЕ СОХРАНЕНИЕ',
    SEMANTIC_REFRAMING: 'НОВОЕ СМЫСЛОВОЕ ПРОЧТЕНИЕ',
    SEMANTIC_CHANGE: 'СМЫСЛОВОЕ ИЗМЕНЕНИЕ',
    UNKNOWN: 'НЕИЗВЕСТНО'
  });
  const label = (value) => publicLabels[value] || value.replaceAll('_', ' ');
  const interpretationTitle = (value) => {
    const localized = publicLabels[value] || publicLabels[value.replaceAll(' ', '_')] || value;
    return localized.charAt(0) + localized.slice(1).toLocaleLowerCase('ru-RU');
  };
  const escape = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

  function detail(entry) {
    const outcomes = byCase(entry.id);
    const image = entry.comparison
      ? `<img class="rp-detail__comparison" src="${sourceRoot}${entry.comparison}" alt="${escape(entry.artist)}: оригинал, Alisa AI и Kandinsky" width="1920" height="1280" loading="lazy" decoding="async">`
      : '<div class="rp-detail__empty">Визуальное сравнение доступно в подтверждённом исходном пакете кейса 10; отдельный файл не создавался.</div>';
    return `<div class="rp-detail__meta"><p class="rp-detail__label">КЕЙС ${escape(entry.id)} / ОТНОШЕНИЕ</p><p class="rp-detail__artist">${escape(entry.artist)}</p><p class="rp-detail__relation">${escape(label(entry.relation))}</p></div><div class="rp-detail__content">${image}<div class="rp-detail__outcomes">${outcomes.map((record) => `<div class="rp-detail__outcome"><p class="rp-detail__label">${escape(record.system)}</p><p>${escape(label(record.status))}<br>${escape(label(record.analytical_category))}</p></div>`).join('')}</div><button class="rp-detail__close" type="button">ЗАКРЫТЬ КЕЙС</button></div>`;
  }

  const recordKey = (record) => `${record.case_id}-${record.system}`;

  function workAsset(entry, role) {
    if (correctedOutputAssets[entry.id]?.[role]) return `${sourceRoot}${correctedOutputAssets[entry.id][role]}`;
    if (entry.id === '10') {
      const case10 = { original: 'case10-andrei-andreev-original.jpeg', alisa: 'case10-alisa-output.png', kandinsky: 'case10-kandinsky-output.png' };
      return `${sourceRoot}${case10[role]}`;
    }
    if (role !== 'original' && driveOutputAssets[entry.id]?.[role]) return `${sourceRoot}${driveOutputAssets[entry.id][role]}`;
    return `${sourceRoot}case${entry.id}-${role === 'original' ? 'original' : `${role}-output`}.png`;
  }
  const interruptedAsset = (entry, role) => interruptedOutputAssets[entry.id]?.[role] ? `${sourceRoot}${interruptedOutputAssets[entry.id][role]}` : null;
  const outputDimensions = (entry, role) => interruptedOutputDimensions[entry.id]?.[role] || [1024, 1024];
  const sourceVisual = (entry) => {
    const dimensions = entry.id === '10' ? [906, 1280] : [640, 850];
    return `<figure class="rp-case-source"><figcaption>01 / ОРИГИНАЛ</figcaption><div class="rp-case-source__media"><a href="${workAsset(entry, 'original')}" target="_blank" rel="noopener" aria-label="${escape(entry.artist)} — открыть оригинал в полном размере"><img src="${workAsset(entry, 'original')}" alt="${escape(entry.artist)} — оригинал" width="${dimensions[0]}" height="${dimensions[1]}" loading="lazy" decoding="async"></a></div></figure>`;
  };
  const machineReading = (entry) => `<figure class="rp-case-machine"><figcaption>02 / МАШИННОЕ ОПИСАНИЕ</figcaption><div class="rp-case-machine__media"><img src="${ekphrasisAsset(entry)}" alt="${escape(entry.artist)} — экфрасис" width="1191" height="1684" loading="lazy" decoding="async"></div></figure>`;
  const modelVisual = (entry, role, outputId = '', hidden = false) => {
    const record = byCase(entry.id).find((item) => item.system === systems[role]);
    const labelText = role === 'alisa' ? '04A / ALISA AI' : '04B / KANDINSKY';
    const dimensions = outputDimensions(entry, role);
    const documentaryAsset = interruptedAsset(entry, role);
    const output = record?.status === 'INTERRUPTED' && documentaryAsset
      ? `<img src="${documentaryAsset}" alt="${escape(entry.artist)} — ${labelText} — подтверждённое прерывание" width="${dimensions[0]}" height="${dimensions[1]}" loading="lazy" decoding="async">`
      : record?.status === 'INTERRUPTED'
        ? '<div class="rp-case-model__interrupted" role="status"><strong>ПРЕРВАНО</strong><span>ПОДТВЕРЖЁННОЕ ПРЕРЫВАНИЕ</span></div>'
      : `<img src="${workAsset(entry, role)}" alt="${escape(entry.artist)} — ${labelText}" width="${dimensions[0]}" height="${dimensions[1]}" loading="lazy" decoding="async">`;
    return `<article class="rp-case-model rp-case-model--${role}"${outputId ? ` id="${outputId}" data-rp-output-panel="${role}"` : ''}${hidden ? ' hidden' : ''}><p class="rp-case-model__label">${labelText}</p><div class="rp-case-model__media"><a href="${documentaryAsset || workAsset(entry, role)}" target="_blank" rel="noopener" aria-label="${escape(entry.artist)} — ${labelText} — открыть файл в полном размере">${output}</a></div><dl class="rp-case-model__meta"><div><dt>СТАТУС ГЕНЕРАЦИИ</dt><dd>${escape(label(record?.status || 'UNKNOWN'))}</dd></div><div><dt>АВТОРСКАЯ КАТЕГОРИЯ</dt><dd>${escape(label(record?.analytical_category || 'UNKNOWN'))}</dd></div></dl></article>`;
  };
  const outputPreview = (record) => {
    const entry = cases.find((item) => item.id === record.case_id);
    if (!entry) return '';
    if (record.status === 'INTERRUPTED') return '<span class="rp-thread-preview__status" role="status">ПРЕРВАНО</span>';
    const role = record.system === 'Alisa AI' ? 'alisa' : 'kandinsky';
    const dimensions = outputDimensions(entry, role);
    return `<span class="rp-thread-preview__asset"><img src="${workAsset(entry, role)}" alt="${escape(entry.artist)} — ${escape(record.system)}" width="${dimensions[0]}" height="${dimensions[1]}" loading="lazy" decoding="async"></span>`;
  };
  const ekphrasisAsset = (entry) => `${sourceRoot}ekphrasis-pages/case${entry.id}.png`;
  // Verbatim opening excerpts from the confirmed ekphrasis PDFs. The drawer retains
  // the complete primary source; this index deliberately exposes only its opening.
  const ekphrasisExcerpts = {
    '01': 'На сплошном чёрном поле возникает человеческая фигура в профиль, собранная почти как скульптура из света и тени. Голова опущена, одна рука поднята перед лицом, другая проходит поперёк груди; жест одновременно защищающий и демонстративный.',
    '02': 'На белом листе стоят рядом две фигуры, нарисованные чёрным карандашом с намеренно неравномерной плотностью линии. Слева — низкая фигура в тяжёлой тёмной одежде; из головы выступают два острых отростка, рот растянут в подчёркнутой улыбке.',
    '03': 'В центре светлого листа выстроена вытянутая вертикальная конструкция из нескольких смещённых блоков. Одни участки напоминают кладку из округлых кирпичей или спрессованных модулей, другие заполнены параллельными линиями, похожими на древесные волокна, слои породы или техническую штриховку.',
    '04': 'На почти чёрном фоне стоит фантастическое четвероногое существо с длинной шеей, крупными лапами и полосатым корпусом. Его голова напоминает одновременно собаку, шакала и мифического зверя: вытянутая морда, острые уши, круглый настороженный глаз.',
    '05': 'На большом белом поле размещены несколько групп мягко заштрихованных геометрических тел. Овалы, полусферы, усечённые конусы и небольшие шарики соединяются в структуры, которые одновременно напоминают молекулярные модели, насекомых, механические игрушки и условные человеческие фигуры.',
    '06': 'Изображение кадрировано на уровне ног и почти лишено лица и пространства вокруг человека. Из-под светлой одежды выходят несколько перекрывающихся ног в узорчатой ткани и тонких светлых носках; на ногах — тяжёлые тёмные туфли.',
    '07': 'В центре белого листа висит вертикальная масса, собранная из нескольких тёмных прямоугольных фрагментов. Их поверхность покрыта складками, бороздами и рельефными линиями, которые можно принять то за ткань, то за кожу, древесную кору, отпечаток тела или фрагменты рентгеновского изображения.',
    '08': 'Лист организован как строгая схема, которая постепенно перестаёт быть схемой. В верхней половине прямоугольного поля расположена решётка из пересекающихся окружностей: некоторые круги остаются пустыми, другие заполнены почти чёрным цветом, а в местах наложения возникают маленькие линзовидные фрагменты.',
    '09': 'На почти пустом белом поле несколькими густыми чёрными мазками обозначено человеческое лицо и верхняя часть тела. Лицо не замкнуто контуром: глаза, нос, рот и линия щеки существуют как отдельные знаки, между которыми бумага остаётся видимой.',
    '10': 'На белом поле рассыпаны чёрные буквы. Сначала они кажутся случайными: каждая сохраняет свою форму, но теряет привычное место.',
    '11': 'На белом листе возникает тёмная мягкая форма. Она похожа одновременно на камень, плод и неизвестное существо.',
    '12': 'Две человеческие фигуры находятся в пустом белом пространстве. Их тела почти совпадают и одновременно расходятся в разные стороны.',
    '13': 'На небольшом листе стоит фигура в высокой остроконечной шляпе. Она напоминает ведьму, странника или персонажа старой детской книги.'
  };
  const promptExcerpt = (entry) => entry.prompt.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');
  const evidenceThumbnail = (entry) => {
    const dimensions = entry.id === '10' ? [906, 1280] : [640, 850];
    return `<span class="rp-evidence-index__thumb"><img src="${workAsset(entry, 'original')}" alt="" width="${dimensions[0]}" height="${dimensions[1]}" loading="lazy" decoding="async"></span>`;
  };
  const evidenceItems = (mode) => cases.map((entry) => {
    const excerpt = mode === 'ekphrasis' ? ekphrasisExcerpts[entry.id] : promptExcerpt(entry);
    const labelText = mode === 'ekphrasis' ? 'экфрасис' : 'промпт';
    return `<li><button type="button" class="rp-evidence-index__item" data-rp-evidence-item data-case-id="${escape(entry.id)}" data-mode="${mode}" aria-label="Открыть ${labelText}: ${escape(entry.id)} ${escape(entry.artist)}"><span class="rp-evidence-index__case">${escape(entry.id)} / ${escape(entry.artist)}</span><span class="rp-evidence-index__entry">${evidenceThumbnail(entry)}<span class="rp-evidence-index__excerpt">${escape(excerpt)}</span></span></button></li>`;
  }).join('');
  const evidenceIndex = () => `<section class="reverse-prompt-analytics__section rp-evidence-index" aria-labelledby="rp-evidence-index-title"><p class="reverse-prompt-analytics__register">ИСТОЧНИКИ / ДАННЫЕ</p><h2 class="reverse-prompt-analytics__title" id="rp-evidence-index-title">Источники корпуса</h2><details class="rp-source-index"><summary>13 экфрасисов / 13 промптов — открыть указатель</summary><div class="rp-evidence-index__modes" role="tablist" aria-label="Тип источника"><button type="button" role="tab" id="rp-evidence-ekphrasis-tab" aria-selected="true" aria-controls="rp-evidence-list" data-rp-evidence-mode="ekphrasis">ЭКФРАСИСЫ</button><button type="button" role="tab" id="rp-evidence-prompt-tab" aria-selected="false" tabindex="-1" aria-controls="rp-evidence-list" data-rp-evidence-mode="prompt">ПРОМПТЫ</button></div><ul class="rp-evidence-index__list" id="rp-evidence-list" role="tabpanel" aria-labelledby="rp-evidence-ekphrasis-tab" data-rp-evidence-list>${evidenceItems('ekphrasis')}</ul></details></section>`;
  const featuredCaseIds = ['10', '08', '07', '13', '06'];
  const artactCaseIds = new Set(['01', '02', '03', '10', '11']);
  const selectedCase = (entry, idPrefix = 'rp-selected-case', interactiveOutputs = false, outputRole = 'alisa') => {
    const relation = escape(interpretationTitle(entry.relation));
    const outputControls = interactiveOutputs
      ? `<div class="rp-case-preview-controls" role="group" aria-label="Машинные ответы"><button type="button" data-rp-output-control="alisa" aria-controls="${idPrefix}-output-alisa" aria-pressed="${outputRole === 'alisa'}">Alisa AI</button><button type="button" data-rp-output-control="kandinsky" aria-controls="${idPrefix}-output-kandinsky" aria-pressed="${outputRole === 'kandinsky'}">Kandinsky</button></div>`
      : '';
    return `<article class="rp-selected-case" aria-labelledby="${idPrefix}-title">
      <header class="rp-selected-case__header"><p>ВЫБРАННЫЙ КЕЙС / ${escape(entry.id)}</p><h2 id="${idPrefix}-title" tabindex="-1">${escape(entry.artist)}</h2>${artactCaseIds.has(entry.id) ? '<div class="rp-case-crosslink"><a href="/projects/artact/">Из проекта ART.AKT</a></div>' : ''}</header>
      <div class="rp-selected-case__top">${sourceVisual(entry)}<section class="rp-selected-case__reading">
        <p>02 / МАШИННОЕ ОПИСАНИЕ</p><h3>Экфрасис</h3><p class="rp-selected-case__excerpt">${escape(ekphrasisExcerpts[entry.id])}</p>
        <details data-rp-disclosure="ekphrasis"><summary>Полный экфрасис</summary><a class="rp-evidence-link" href="${sourceDocument(entry, 'ekphrasis')}" target="_blank" rel="noopener">Читать исходную страницу PDF ↗</a><a class="rp-document-page" href="${ekphrasisAsset(entry)}" target="_blank" rel="noopener" aria-label="Экфрасис — открыть страницу в полном размере"><img src="${ekphrasisAsset(entry)}" alt="${escape(entry.artist)} — полный экфрасис" width="1191" height="1684" loading="lazy" decoding="async"></a></details>
        <details data-rp-disclosure="prompt"><summary>03 / Промпт для обеих систем</summary><p>${escape(entry.prompt)}</p></details>
        <details data-rp-disclosure="sources"><summary>Источники и условия</summary>
          <a class="rp-evidence-link" href="${sourceDocument(entry, 'alisa')}" target="_blank" rel="noopener">Alisa AI — промпт и ответ / PDF ↗</a>
          <a class="rp-evidence-link" href="${sourceDocument(entry, 'kandinsky')}" target="_blank" rel="noopener">Kandinsky — промпт и ответ / PDF ↗</a>
          <p class="rp-case-authorship">Автор: ${escape(entry.artist)}. 2026 год создания.</p>
          <p class="rp-editorial-footnote">Экфрасис и промпт атрибутированы пользовательской модели ChatGPT в протоколе проекта; полный журнал диалога не сохранён в доступных материалах.</p>
          <p class="rp-editorial-footnote">Версии моделей, дата запуска, seed, параметры генерации и объём ручной редакции не установлены. Последовательность эксперимента можно повторить, но исходный результат по имеющимся данным воспроизвести нельзя.</p>
        </details>
      </section></div>
      ${outputControls}<div class="rp-selected-case__systems">${modelVisual(entry, 'alisa', interactiveOutputs ? `${idPrefix}-output-alisa` : '', interactiveOutputs && outputRole !== 'alisa')}${modelVisual(entry, 'kandinsky', interactiveOutputs ? `${idPrefix}-output-kandinsky` : '', interactiveOutputs && outputRole !== 'kandinsky')}</div>
      <section class="rp-selected-case__comparison"><p>05 / АВТОРСКАЯ ИНТЕРПРЕТАЦИЯ</p><h3>${relation}</h3></section>
    </article>`;
  };

  function buildThreadGraph() {
    const transformations = [...new Set(records.filter((record) => record.status === 'GENERATED').map((record) => record.analytical_category))];
    const graph = (mobile) => {
      const dimensions = mobile
        ? { width: 350, height: 720, artistX: 96, systemX: 155, resultX: 220, transformationX: 286 }
        : { width: 1280, height: 760, artistX: 230, systemX: 520, resultX: 760, transformationX: 1000 };
      const artistY = (index) => (mobile ? 74 + (index * 49) : 96 + (index * 48));
      const systemY = (value) => value === 'Alisa AI' ? (mobile ? 255 : 278) : (mobile ? 500 : 476);
      const statusY = (value) => value === 'GENERATED' ? (mobile ? 255 : 278) : (mobile ? 500 : 476);
      const transformationY = (value) => (mobile ? 70 : 68) + (transformations.indexOf(value) * 58);
      const multiline = (name, x, y, anchor) => {
        const words = name.split(' ');
        if (words.length < 2) return `<text x="${x}" y="${y + 3}" text-anchor="${anchor}">${escape(name)}</text>`;
        return `<text x="${x}" y="${y - 2}" text-anchor="${anchor}"><tspan x="${x}" dy="0">${escape(words[0])}</tspan><tspan x="${x}" dy="9">${escape(words.slice(1).join(' '))}</tspan></text>`;
      };
      const node = (kind, value, x, y, name, position) => {
        const anchor = position === 'left' ? 'end' : 'start';
        const textX = position === 'left' ? x - (mobile ? 7 : 12) : x + (mobile ? 7 : 12);
        const hitStart = position === 'left' ? x - (mobile ? 92 : 220) : x - 8;
        const hitWidth = position === 'left' ? (mobile ? 100 : 228) : (mobile ? 70 : 250);
        return `<g class="rp-thread-node rp-thread-node--${kind}" data-rp-node data-kind="${kind}" data-value="${escape(value)}" role="button" tabindex="0" aria-pressed="false" aria-label="${escape(name)}"><circle cx="${x}" cy="${y}" r="${mobile ? 2.4 : 3}"></circle>${multiline(name, textX, y, anchor)}<rect class="rp-thread-node__hit" x="${hitStart}" y="${y - (mobile ? 14 : 12)}" width="${hitWidth}" height="${mobile ? 28 : 24}"></rect></g>`;
      };
      const route = (record) => {
        const start = artistY(cases.findIndex((entry) => entry.id === record.case_id));
        const middle = systemY(record.system);
        const result = statusY(record.status);
        const base = `M${dimensions.artistX} ${start} C${dimensions.artistX + (mobile ? 20 : 116)} ${start} ${dimensions.systemX - (mobile ? 20 : 116)} ${middle} ${dimensions.systemX} ${middle} C${dimensions.systemX + (mobile ? 20 : 96)} ${middle} ${dimensions.resultX - (mobile ? 20 : 96)} ${result} ${dimensions.resultX} ${result}`;
        return record.status === 'GENERATED'
          ? `${base} C${dimensions.resultX + (mobile ? 20 : 92)} ${result} ${dimensions.transformationX - (mobile ? 20 : 92)} ${transformationY(record.analytical_category)} ${dimensions.transformationX} ${transformationY(record.analytical_category)}`
          : base;
      };
      const routeMarkup = records.map((record) => {
        const path = route(record);
        return `<g class="rp-thread" data-rp-thread data-record-key="${escape(recordKey(record))}" data-case-id="${escape(record.case_id)}" data-terminal="${record.status === 'INTERRUPTED' ? 'result' : 'transformation'}"><path class="rp-thread__line" d="${path}"></path><path class="rp-thread__hit" d="${path}" role="button" tabindex="0" aria-pressed="false" aria-label="${escape(record.artist)} — ${escape(record.system)} — ${escape(label(record.status))}${record.status === 'GENERATED' ? ` — ${escape(label(record.analytical_category))}` : ''}"></path></g>`;
      }).join('');
      const artistNodes = cases.map((entry, index) => node('artist', entry.id, dimensions.artistX, artistY(index), `${entry.id} ${entry.artist}`, 'left')).join('');
      const systemNodes = Object.values(systems).map((value) => node('system', value, dimensions.systemX, systemY(value), value, 'right')).join('');
      const resultNodes = ['GENERATED', 'INTERRUPTED'].map((value) => node('status', value, dimensions.resultX, statusY(value), label(value), 'right')).join('');
      const transformationNodes = transformations.map((value) => node('transformation', value, dimensions.transformationX, transformationY(value), label(value), 'right')).join('');
      const headers = [['ХУДОЖНИК', dimensions.artistX], ['СИСТЕМА', dimensions.systemX], ['СТАТУС ПОПЫТКИ', dimensions.resultX], ['ТРАНСФОРМАЦИЯ', dimensions.transformationX]]
        .map(([name, x]) => name === 'СТАТУС ПОПЫТКИ'
          ? `<text class="rp-thread-column" x="${x}" y="17" text-anchor="middle"><tspan x="${x}" dy="0">СТАТУС</tspan><tspan x="${x}" dy="9">ПОПЫТКИ</tspan></text>`
          : `<text class="rp-thread-column" x="${x}" y="22" text-anchor="middle">${name}</text>`).join('');
      return `<svg class="rp-thread-map__svg rp-thread-map__svg--${mobile ? 'mobile' : 'desktop'}" viewBox="0 0 ${dimensions.width} ${dimensions.height}" role="group" aria-label="Потоки 26 индивидуальных попыток: художник, система, статус попытки, трансформация"><g class="rp-thread-columns">${headers}</g><g class="rp-thread-routes">${routeMarkup}</g><g class="rp-thread-nodes">${artistNodes}${systemNodes}${resultNodes}${transformationNodes}</g></svg>`;
    };
    return `<div class="rp-thread-map">${graph(window.matchMedia('(max-width: 960px)').matches)}</div>`;
  }

  const featuredEvidence = () => `<section class="rp-case-workbench rp-featured-evidence" aria-labelledby="rp-featured-evidence-title"><aside class="rp-case-selector"><header class="rp-case-selector__header"><p class="reverse-prompt-analytics__register">06 / ОТДЕЛЬНЫЕ РАБОТЫ</p><h2 class="rp-case-selector__title" id="rp-featured-evidence-title">Как это выглядит в отдельных работах?</h2><p class="rp-case-selector__status">Пять кейсов с разными зафиксированными аналитическими выводами.</p></header><div class="rp-case-selector__items" role="list">${featuredCaseIds.map((caseId) => { const entry = cases.find((item) => item.id === caseId); return `<div role="listitem"><button type="button" data-rp-featured-case-item data-case-id="${escape(entry.id)}" aria-pressed="false" aria-label="Открыть избранный кейс ${escape(entry.id)}: ${escape(entry.artist)}"><span>${escape(entry.id)}</span>${escape(entry.artist)}</button></div>`; }).join('')}</div></aside><div class="rp-selected-case-host" data-rp-featured-case aria-live="polite"></div></section>`;
  const caseSelector = () => `<section class="rp-research-selector-field" aria-labelledby="rp-case-selector-title">
    <header class="rp-case-browser__intro"><p class="reverse-prompt-analytics__register">05 / КЕЙСЫ</p><h2 class="rp-case-selector__title" id="rp-case-selector-title">13 художников</h2><p class="rp-case-selector__status">Выбор художника открывает исходную работу и оба машинных ответа.</p></header>
    <div class="rp-case-browser__grid"><aside class="rp-case-selector" aria-label="Выбор художника"><div class="rp-case-selector__items" role="list">${cases.map((entry) => `<div role="listitem"><button type="button" data-rp-case-selector-item data-case-id="${escape(entry.id)}" aria-pressed="false" aria-controls="rp-selected-case-panel" aria-label="Выбрать кейс ${escape(entry.id)}: ${escape(entry.artist)}"><span class="rp-case-selector__number">${escape(entry.id)}</span><span class="rp-case-selector__name">${escape(entry.artist)}</span><span class="rp-case-selector__arrow" aria-hidden="true">→</span></button></div>`).join('')}</div></aside><div class="rp-selected-case-host" id="rp-selected-case-panel" data-rp-selected-case aria-live="polite"></div></div>
  </section>`;

  function render() {
    const mount = document.querySelector('[data-reverse-prompt-analytics]');
    const featuredMount = document.querySelector('[data-reverse-prompt-featured-evidence]');
    const selectorMount = document.querySelector('[data-reverse-prompt-case-selector]');
    const conclusionMount = document.querySelector('[data-reverse-prompt-conclusion]');
    const provenanceMount = document.querySelector('[data-reverse-prompt-provenance]');
    if (!mount) return;
    if (featuredMount) featuredMount.innerHTML = featuredEvidence();
    if (selectorMount) selectorMount.innerHTML = caseSelector();
    mount.classList.add('reverse-prompt-analytics');
    const generated = records.filter((record) => record.status === 'GENERATED').length;
    const interrupted = records.filter((record) => record.status === 'INTERRUPTED').length;
    mount.innerHTML = `
      <section class="research-detail-protocol rp-threads" aria-labelledby="rp-threads-title">
        <p class="reverse-prompt-analytics__register">04 / КОРПУС</p>
        <h2 class="reverse-prompt-analytics__title" id="rp-threads-title">26 ПОПЫТОК</h2>
        <p class="reverse-prompt-analytics__lead">13 произведений × 2 системы. Каждая линия — одна попытка: СГЕНЕРИРОВАНО / ПРЕРВАНО.</p>
        <p class="rp-threads__data">13 ПРОИЗВЕДЕНИЙ · 26 ПОПЫТОК · 23 ИЗОБРАЖЕНИЯ · 3 ПРЕРЫВАНИЯ</p>
        ${buildThreadGraph()}
        <div class="rp-threads__status"><div><p class="rp-threads__preview" aria-live="polite">Наведите курсор или переведите фокус на линию либо метку, чтобы проследить попытку.</p><div class="rp-thread-preview" hidden></div></div></div>
      </section>
      <section class="reverse-prompt-analytics__section rp-observations" aria-labelledby="rp-observations-title">
        <p class="reverse-prompt-analytics__register">06 / НАБЛЮДЕНИЯ</p>
        <h2 class="reverse-prompt-analytics__title" id="rp-observations-title">Что ИИ сохраняет, изменяет и достраивает?</h2>
        <div class="rp-observations__list" aria-label="Пять признаков авторской разметки 23 сгенерированных изображений">
          <article class="rp-observation"><p class="rp-observation__metric">87%</p><p class="rp-observation__text">ключевые объекты и формы сохранились</p></article>
          <article class="rp-observation"><p class="rp-observation__metric">78%</p><p class="rp-observation__text">композиционный каркас сохранился</p></article>
          <article class="rp-observation"><p class="rp-observation__metric">70%</p><p class="rp-observation__text">отношения между элементами изменились</p></article>
          <article class="rp-observation"><p class="rp-observation__metric">74%</p><p class="rp-observation__text">материал / стиль перекодированы</p></article>
          <article class="rp-observation"><p class="rp-observation__metric">52%</p><p class="rp-observation__text">появилось новое смысловое прочтение</p></article>
        </div>
        <p class="rp-observations__conclusion">Гипотеза по корпусу: названные объекты сохраняются устойчивее, чем неоднозначные отношения между ними.</p>
        <p class="rp-observations__microcopy rp-editorial-footnote">n = 23. Ручная авторская разметка по пяти признакам; 3 прерванные генерации исключены из расчёта. Признаки могут сочетаться.</p>
      </section>
      `;

    document.querySelector('[data-reverse-prompt-observations]')?.append(mount.querySelector('.rp-observations'));

    // Keep the narrow graph's horizontal scale intact. Only an overflowing
    // label moves inside the field, below its endpoint, retaining every glyph.
    const containMobileLabels = () => {
      const svg = mount.querySelector('.rp-thread-map__svg--mobile');
      if (!svg || !window.matchMedia('(max-width:960px)').matches) return;
      const scale = svg.getScreenCTM()?.a;
      if (!scale) return;
      const viewportRight = Math.min(svg.getBoundingClientRect().right, document.documentElement.clientWidth);
      const right = viewportRight - 8;
      svg.querySelectorAll('.rp-thread-node--transformation text').forEach(text => {
        text.removeAttribute('transform');
        if (text.getBoundingClientRect().right <= viewportRight) return;
        const overflow = text.getBoundingClientRect().right - right;
        if (overflow <= 0) return;
        text.setAttribute('transform',`translate(${-overflow / scale} 24)`);
        const hit = text.parentElement.querySelector('.rp-thread-node__hit');
        const box = text.getBBox();
        const oldRight = Number(hit.getAttribute('x')) + Number(hit.getAttribute('width'));
        const hitLeft = Math.min(Number(hit.getAttribute('x')), box.x - overflow / scale - 3);
        hit.setAttribute('x',hitLeft);
        hit.setAttribute('width',oldRight-hitLeft);
        hit.setAttribute('height',Math.max(28, box.y + 24 + box.height - Number(hit.getAttribute('y')) + 3));
      });
    };
    document.fonts.ready.then(containMobileLabels);

    if (conclusionMount) conclusionMount.innerHTML = `<section class="research-detail-evidence-frame rp-method-result" aria-label="Вывод и ограничения"><section class="research-detail-protocol__field rp-method"><h2 class="research-detail-protocol__label">Вывод</h2><p class="research-detail-protocol__text">В корпусе 13 произведений и 26 попыток: 23 изображения были сгенерированы, 3 генерации прерваны. Сопоставление показывает не единый тип машинного чтения, а диапазон операций — от остановки до нормализации, редукции и перекодировки.</p></section><section class="research-detail-protocol__field rp-method"><h2 class="research-detail-protocol__label">Ограничения</h2><p class="research-detail-protocol__text">Смысловое изменение оценивается внутри конкретного кейса. Сводная инфографика описывает зафиксированный корпус и его аналитические категории, но не является рейтингом качества систем.</p></section></section>`;

    if (provenanceMount) {
      provenanceMount.innerHTML = `
      <div class="reverse-prompt-analytics">
        ${evidenceIndex()}
        <section class="reverse-prompt-analytics__section rp-corpus-snapshot" aria-labelledby="rp-corpus-title">
          <p class="reverse-prompt-analytics__register">ДАННЫЕ / СВОДКА / 2026</p>
          <h2 class="reverse-prompt-analytics__title" id="rp-corpus-title">Зафиксированный корпус</h2>
          <div class="reverse-prompt-analytics__stats" aria-label="Фактическая сводка корпуса"><div class="reverse-prompt-analytics__stat"><b>${cases.length}</b><span>ПРОИЗВЕДЕНИЙ</span></div><div class="reverse-prompt-analytics__stat"><b>${records.length}</b><span>ПОПЫТОК</span></div><div class="reverse-prompt-analytics__stat"><b>${generated}</b><span>СГЕНЕРИРОВАНО</span></div><div class="reverse-prompt-analytics__stat"><b>${interrupted}</b><span>ПРЕРВАНО</span></div></div>
        </section>
      </div>
      `;
    }

    let map = mount.querySelector('.rp-thread-map__svg');
    const preview = mount.querySelector('.rp-threads__preview');
    const previewMedia = mount.querySelector('.rp-thread-preview');
    const featuredItems = [...(featuredMount?.querySelectorAll('[data-rp-featured-case-item]') || [])];
    const featuredCaseHost = featuredMount?.querySelector('[data-rp-featured-case]');
    const selectorItems = [...(selectorMount?.querySelectorAll('[data-rp-case-selector-item]') || [])];
    const selectedCaseHost = selectorMount?.querySelector('[data-rp-selected-case]');
    const caseHome = selectedCaseHost?.parentElement;
    const graphCaseHome = mount.querySelector('.rp-threads__status');
    const evidenceList = provenanceMount?.querySelector('[data-rp-evidence-list]');
    const evidenceModeButtons = [...(provenanceMount?.querySelectorAll('[data-rp-evidence-mode]') || [])];
    let routeGroups = [...mount.querySelectorAll('[data-rp-thread]')];
    let nodeGroups = [...mount.querySelectorAll('[data-rp-node]')];
    let graphFilter = null;
    let graphPinned = true;
    // The case browser and the attempt graph share one committed artist ID.
    let selectedArtistId = '10';
    let featuredCaseId = '10';
    let selectedOutputRole = 'alisa';
    let evidenceOpener = null;
    const desktopCaseBrowser = window.matchMedia('(min-width: 1025px)');

    const updateFeaturedCase = (caseId = featuredCaseId) => {
      const entry = cases.find((item) => item.id === caseId);
      if (!entry || !featuredCaseIds.includes(entry.id)) return;
      featuredCaseId = entry.id;
      featuredItems.forEach((item) => item.setAttribute('aria-pressed', String(item.dataset.caseId === entry.id)));
      if (featuredCaseHost) featuredCaseHost.innerHTML = selectedCase(entry, 'rp-featured-case');
    };

    const updateCaseSelector = (caseId = selectedArtistId, disclosure = '') => {
      const entry = cases.find((item) => item.id === caseId);
      if (!entry) return;
      if (selectedCaseHost) {
        const interactiveOutputs = desktopCaseBrowser.matches;
        if (selectedCaseHost.dataset.caseId === entry.id && selectedCaseHost.dataset.interactiveOutputs === String(interactiveOutputs) && !disclosure) return;
        selectedCaseHost.innerHTML = selectedCase(entry, 'rp-selected-case', interactiveOutputs, selectedOutputRole);
        selectedCaseHost.dataset.caseId = entry.id;
        selectedCaseHost.dataset.interactiveOutputs = String(interactiveOutputs);
        if (disclosure) selectedCaseHost.querySelector(`[data-rp-disclosure="${disclosure}"]`)?.setAttribute('open', '');
      }
    };
    desktopCaseBrowser.addEventListener('change', () => {
      if (desktopCaseBrowser.matches) {
        selectedArtistId ||= '10';
        caseHome?.append(selectedCaseHost);
        selectedCaseHost.hidden = false;
        syncCaseSelection();
      } else clearGraph();
      updateCaseSelector(selectedCaseHost?.dataset.caseId || selectedArtistId);
    });
    selectorMount?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-rp-output-control]');
      if (!button || !selectorMount.contains(button)) return;
      selectedOutputRole = button.dataset.rpOutputControl;
      selectedCaseHost?.querySelectorAll('[data-rp-output-control]').forEach((control) => {
        control.setAttribute('aria-pressed', String(control.dataset.rpOutputControl === selectedOutputRole));
      });
      selectedCaseHost?.querySelectorAll('[data-rp-output-panel]').forEach((panel) => {
        panel.hidden = panel.dataset.rpOutputPanel !== selectedOutputRole;
      });
    });
    const syncCaseSelection = () => {
      // Clear the previous committed state before assigning the single new owner.
      selectorItems.forEach((item) => {
        item.setAttribute('aria-pressed', 'false');
        item.removeAttribute('aria-current');
      });
      const selectedItem = selectorItems.find((item) => item.dataset.caseId === selectedArtistId);
      if (selectedItem) {
        selectedItem.setAttribute('aria-pressed', 'true');
        selectedItem.setAttribute('aria-current', 'true');
      }
    };

    const setPreview = (record) => {
      previewMedia.hidden = !record || !desktopCaseBrowser.matches;
      previewMedia.innerHTML = record && desktopCaseBrowser.matches ? outputPreview(record) : '';
    };
    const relatedToNode = (record, node) => {
      if (node.dataset.kind === 'artist') return record.case_id === node.dataset.value;
      if (node.dataset.kind === 'system') return record.system === node.dataset.value;
      if (node.dataset.kind === 'status') return record.status === node.dataset.value;
      return record.status === 'GENERATED' && record.analytical_category === node.dataset.value;
    };
    const apply = (selection, message, pin, previewRecord) => {
      const selected = new Set(selection.map(recordKey));
      map.classList.toggle('is-filtered', selected.size > 0);
      map.dataset.interactionState = selected.size ? (pin ? 'selected' : 'preview') : '';
      routeGroups.forEach((group) => {
        const active = selected.has(group.dataset.recordKey);
        group.classList.toggle('is-hot', active);
        group.querySelector('.rp-thread__hit').setAttribute('aria-pressed', String(active && Boolean(pin)));
      });
      nodeGroups.forEach((node) => {
        const active = selection.some((record) => relatedToNode(record, node));
        node.classList.toggle('is-hot', active);
        node.setAttribute('aria-pressed', String(active && Boolean(pin)));
      });
      preview.textContent = message;
      setPreview(previewRecord || null);
    };
    const selectArtist = (caseId, previewRecord = byCase(caseId)[0], disclosure = '') => {
      const entry = cases.find((item) => item.id === caseId);
      if (!entry) return;
      selectedArtistId = entry.id;
      graphFilter = null;
      graphPinned = true;
      const selection = byCase(entry.id);
      apply(selection, `${entry.id} ${entry.artist} / 2 попытки.`, true, previewRecord);
      syncCaseSelection();
      updateCaseSelector(entry.id, disclosure);
      if (!desktopCaseBrowser.matches) {
        graphCaseHome.append(selectedCaseHost);
        selectedCaseHost.hidden = false;
      }
    };
    const restoreGraph = () => {
      if (graphFilter) apply(graphFilter.selection, graphFilter.message, true, graphFilter.previewRecord);
      else if (graphPinned) {
        const entry = cases.find((item) => item.id === selectedArtistId);
        const selection = byCase(selectedArtistId);
        apply(selection, `${entry.id} ${entry.artist} / 2 попытки.`, true, selection[0]);
      } else apply([], '', false, null);
    };
    const clearGraph = () => {
      graphFilter = null; graphPinned = false;
      if (!desktopCaseBrowser.matches) {
        selectedArtistId = null;
        selectedCaseHost.hidden = true;
        caseHome?.append(selectedCaseHost);
        syncCaseSelection();
      }
      restoreGraph();
    };
    const recordsForNode = (node) => records.filter((record) => relatedToNode(record, node));
    const describe = (selection, title) => `${title} / ${selection.length} ${selection.length === 1 ? 'попытка' : 'попыток'}.`;
    const isPinnedSelection = (selection) => Boolean(graphFilter) && selection.length === graphFilter.selection.length && selection.every((record) => graphFilter.selection.some((current) => recordKey(current) === recordKey(record)));
    const selectNode = (node, pin) => {
      const selection = recordsForNode(node);
      if (pin && node.dataset.kind === 'artist') {
        if (graphPinned && !graphFilter && selectedArtistId === node.dataset.value) clearGraph();
        else selectArtist(node.dataset.value);
        return node.dataset.value;
      }
      if (pin && isPinnedSelection(selection)) { clearGraph(); return null; }
      const title = node.dataset.kind === 'artist' ? `${node.dataset.value} ${cases.find((entry) => entry.id === node.dataset.value).artist}` : label(node.dataset.value);
      const message = describe(selection, title);
      if (pin) {
        if (!desktopCaseBrowser.matches) clearGraph();
        graphPinned = false; graphFilter = { selection, message, previewRecord: null };
      }
      apply(selection, message, pin, node.dataset.kind === 'artist' ? selection[0] : null);
      return node.dataset.kind === 'artist' ? node.dataset.value : null;
    };
    const selectThread = (group, pin) => {
      const record = records.find((item) => recordKey(item) === group.dataset.recordKey);
      if (!record) return;
      if (pin) {
        selectArtist(record.case_id, record);
        return record.case_id;
      }
      const outcome = record.status === 'GENERATED' ? `${label(record.status)} → ${label(record.analytical_category)}` : label(record.status);
      apply([record], `${record.case_id} / ${record.artist} / ${record.system} / ${outcome}.`, false, record);
      return null;
    };
    const bind = (target, handler) => {
      target.addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse') handler(false); });
      target.addEventListener('pointerleave', restoreGraph);
      target.addEventListener('focus', () => handler(false));
      target.addEventListener('click', (event) => { event.stopPropagation(); handler(true); });
      target.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handler(true); } });
    };
    const selectCase = (caseId, disclosure = '') => {
      const entry = cases.find((item) => item.id === caseId);
      if (!entry) return;
      const mobile = !desktopCaseBrowser.matches;
      if (mobile && !disclosure && selectedArtistId === caseId && !selectedCaseHost.hidden) { clearGraph(); return; }
      const row = selectorItems.find(item => item.dataset.caseId === caseId);
      const rowTop = row?.getBoundingClientRect().top;
      selectArtist(entry.id, byCase(entry.id)[0], disclosure);
      if (mobile) {
        row?.parentElement.append(selectedCaseHost);
        if (!disclosure && row) window.scrollBy(0, row.getBoundingClientRect().top - rowTop);
      }
      if (disclosure) {
        const target = selectedCaseHost.querySelector(`[data-rp-disclosure="${disclosure}"] summary`);
        target?.focus({ preventScroll: true });
        target?.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
    };
    const openEvidenceItem = (item) => {
      evidenceOpener = item;
      selectCase(item.dataset.caseId, item.dataset.mode);
      const back = document.createElement('button');
      back.type = 'button';
      back.className = 'rp-evidence-link';
      back.textContent = 'Вернуться к указателю источников';
      back.addEventListener('click', () => {
        selectedCaseHost.querySelectorAll('details[open]').forEach(d => { d.open = false; });
        evidenceOpener?.focus({ preventScroll: true });
        evidenceOpener?.scrollIntoView({ block: 'center' });
      });
      selectedCaseHost.querySelector(`[data-rp-disclosure="${item.dataset.mode}"]`).append(back);
    };
    const bindEvidenceItems = () => evidenceList?.querySelectorAll('[data-rp-evidence-item]').forEach((item) => {
      item.addEventListener('click', () => openEvidenceItem(item));
      item.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openEvidenceItem(item);
      });
    });
    const setEvidenceMode = (mode) => {
      evidenceModeButtons.forEach((button) => {
        const selected = button.dataset.rpEvidenceMode === mode;
        button.setAttribute('aria-selected', String(selected));
        button.tabIndex = selected ? 0 : -1;
        if (selected) evidenceList?.setAttribute('aria-labelledby', button.id);
      });
      if (evidenceList) evidenceList.innerHTML = evidenceItems(mode);
      bindEvidenceItems();
    };
    evidenceModeButtons.forEach((button) => {
      button.addEventListener('click', () => setEvidenceMode(button.dataset.rpEvidenceMode));
      button.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        const index = evidenceModeButtons.indexOf(button);
        const next = evidenceModeButtons[(index + (event.key === 'ArrowRight' ? 1 : evidenceModeButtons.length - 1)) % evidenceModeButtons.length];
        next.focus();
        setEvidenceMode(next.dataset.rpEvidenceMode);
      });
    });
    bindEvidenceItems();
    selectorItems.forEach((item) => {
      item.addEventListener('click', () => selectCase(item.dataset.caseId));
    });
    featuredItems.forEach((item) => {
      item.addEventListener('click', () => updateFeaturedCase(item.dataset.caseId));
      item.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        updateFeaturedCase(item.dataset.caseId);
      });
    });
    const bindGraph = () => {
      nodeGroups.forEach((node) => bind(node, (pin) => selectNode(node, pin)));
      routeGroups.forEach((group) => bind(group.querySelector('.rp-thread__hit'), (pin) => selectThread(group, pin)));
      map.addEventListener('pointerleave', restoreGraph);
      map.addEventListener('focusout', (event) => { if (!map.contains(event.relatedTarget)) restoreGraph(); });
      map.addEventListener('click', (event) => { if (!event.target.closest('[data-rp-node],.rp-thread__hit')) clearGraph(); });
      map.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        event.preventDefault();
        clearGraph();
      });
    };
    bindGraph();
    document.addEventListener('pointerdown', event => {
      if (!map.contains(event.target) && !selectorMount?.contains(event.target) && !selectedCaseHost?.contains(event.target) && !provenanceMount?.contains(event.target)) clearGraph();
    });
    window.matchMedia('(max-width: 960px)').addEventListener('change', () => {
      const focused = map.contains(document.activeElement) ? document.activeElement.getAttribute('aria-label') : null;
      map.parentElement.outerHTML = buildThreadGraph();
      map = mount.querySelector('.rp-thread-map__svg');
      routeGroups = [...map.querySelectorAll('[data-rp-thread]')];
      nodeGroups = [...map.querySelectorAll('[data-rp-node]')];
      bindGraph();
      if (focused) [...map.querySelectorAll('[tabindex]')].find(el => el.getAttribute('aria-label') === focused)?.focus({preventScroll:true});
      restoreGraph();
    });
    updateFeaturedCase('10');
    selectArtist(selectedArtistId);
    if (!desktopCaseBrowser.matches) clearGraph();
    [selectorMount, provenanceMount].forEach(container => container?.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      const disclosure = event.target.closest('details[open]');
      if (!disclosure) { if (!desktopCaseBrowser.matches) clearGraph(); return; }
      event.preventDefault();
      disclosure.open = false;
      disclosure.querySelector('summary')?.focus();
    }));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once: true });
  else render();
})();
