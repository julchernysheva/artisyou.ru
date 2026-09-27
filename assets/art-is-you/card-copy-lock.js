(function () {
  'use strict';

  const copyByRoute = Object.freeze({
    '/projects/godbot/': 'Арт-проект об искусственном интеллекте и цифровой мифологии, где ошибка перестаёт быть сбоем и запускает логику рождения и памяти.',
    '/projects/likes-pond/': 'Проект об экономике внимания и социальных сетях: лайк превращается из реакции пользователя в измеряемый сигнал и физический ритуал.',
    '/projects/oracul/': 'Интерактивный арт-объект о выборе и неопределённости: сигналы «да», «нет» и «возможно» возвращают человеку его собственную интерпретацию.',
    '/projects/talking-city/': 'Интерактивный арт-объект о выборе и неопределённости: сигналы «да», «нет» и «возможно» возвращают человеку его собственную интерпретацию.',
    '/projects/programmer/': 'Перформанс, где восемь материнских плат соединяют код, ба-гуа и каллиграфию, превращая программирование в практику внимания.',
    '/projects/nowords/': 'AI-арт проект об ошибке промпта и границах языка: сбой разрывает ожидаемую связь между текстовым вводом и полученным изображением.',
    '/dark/': 'Одежда и современное искусство перестают быть фоном друг для друга: фотография собирает их в один образ и меняет способ чтения обоих.',
    '/projects/post_human/': 'Постчеловеческий мир после катастрофы, где интерфейсы, код и городская инфраструктура теряют прежние функции и становятся новой мифологией.',
    '/projects/special-projects/': 'Кураторские проекты, где зритель может разобрать экспозицию, изменить работу или стать частью её механизма через собственное действие.',
    '/nikola-lenivets/': 'За неделю «Архстояния» художественная идея собирается прямо из территории: наблюдений, физических ограничений и временности места.',
    '/science-quarter/': 'Арт-проект о кубе Докучаева, научной памяти и почве: утраченный «чернозёмный бриллиант» возвращается как временный объект из земли.',
    '/pavlov-dogs/': 'Художественный проект об условном рефлексе, повторении и границе свободы, где научный эксперимент становится этической проблемой.',
    '/projects/archive/': 'Ранние работы показывают, как из неона, проекций, коллажа и цифрового пространства постепенно складывается язык памяти и интерфейса.',
    '/projects/musicvideo/': 'Музыкальные видео, где бренды, игровые интерфейсы и соцсети становятся частью действия и показывают человека внутри цифровой среды.',
    '/projects/fashion/': 'Fashion video, где одежда, тело, город и монтаж собираются в короткие визуальные истории вместо привычной демонстрации коллекции.',
    '/research/essays/': 'Эссе об AI, памяти, языке и авторстве: от ошибки и русского промпта до вопроса о том, как алгоритмы меняют человеческие нормы.',
    '/research/essays/error-as-territory-of-freedom/': 'Эссе об ошибке и свободе: почему алгоритм стремится исправить отклонение, а человек способен через него изменить цель и способ действия.',
    '/research/essays/russia-as-dataset/': 'Исследование русского промпта, культурной памяти и машинного усреднения: как модель смешивает признаки и возвращает узнаваемый образ России.',
    '/research/interview/': 'Короткие фильмы о современных художниках: не только что они создают, но как выбирают медиум, материал и принимают ключевые решения.',
    '/research/lab/': 'Полевые исследования, где история места, научная среда и физические условия определяют форму и смысл художественного объекта.',
    '/protoarchive/': 'Исследование псевдоархивов и фиктивных документов: как форма источника производит доверие и делает событие правдоподобным.',
    '/research/russian-bioart-history/': 'История русского биоарта от биомеханики к живому материалу: как менялась роль живого в искусстве, науке и технологической среде.'
  });

  const labRouteByHash = Object.freeze({
    '#nikola': '/nikola-lenivets/',
    '#science-quarter': '/science-quarter/',
    '#pavlov': '/pavlov-dogs/'
  });

  const cardSelector = [
    '.project-card[href]',
    '.ay-home__feature[href]',
    '.ay-home__project-card[href]',
    '.ay-home__research-card[href]',
    '.research-card[href]',
    '.essay-card[href]',
    '.essay-feature[href]',
    '.lab-index__card[href]'
  ].join(',');

  function routeFor(card) {
    const href = card.getAttribute('href');
    return labRouteByHash[href] || href;
  }

  function descriptionParagraphs(card) {
    const content = card.querySelector(
      '.project-card__content, .ay-home__feature-content, .ay-home__project-content, ' +
      '.ay-home__research-content, .research-card__content, .essay-feature__content, ' +
      '.essay-card__content, .lab-index__card-content, .lab-index__content'
    ) || card;
    return [...content.querySelectorAll('p')];
  }

  document.querySelectorAll(cardSelector).forEach((card) => {
    const route = routeFor(card);
    const lockedCopy = copyByRoute[route];
    if (!lockedCopy) return;

    const paragraphs = descriptionParagraphs(card);
    if (!paragraphs.length) return;

    const description = paragraphs[paragraphs.length - 1];
    description.textContent = lockedCopy;
    paragraphs.slice(0, -1).forEach((paragraph) => paragraph.remove());
    description.dataset.cardCopyLock = route;
  });

  window.ART_IS_YOU_CARD_COPY_LOCK = copyByRoute;
})();
