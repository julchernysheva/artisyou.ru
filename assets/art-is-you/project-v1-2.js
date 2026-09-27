(() => {
  const img = (src, alt) => `<img src="${src}" alt="${alt}" loading="eager">`;
  const source = (left, right) => `<figcaption class="v12-source"><span>${left}</span><span>${right}</span></figcaption>`;
  const shell = (content, useSharedHeader = false) => `<main class="v12-shell">${useSharedHeader ? '<art-is-you-header></art-is-you-header>' : '<nav class="v12-nav" aria-label="Основная навигация"><a href="/" class="v12-nav__brand"><i aria-hidden="true"></i>Юлия Чернышева</a><a href="/projects/" class="v12-nav__projects">Проекты</a><a href="/projects/" class="v12-nav__menu">Меню</a></nav>'}${content}</main>`;
  const data = (entries, label = 'Project data') => `<footer class="v12-data" id="project-data"><span>${label}</span><div>${entries.map(([term, value]) => `<dl><dt>${term}</dt><dd>${value}</dd></dl>`).join('')}</div></footer>`;
  const control = (label, content, className = '') => `<button type="button" class="v12-control ${className}" aria-label="${label}" aria-pressed="false">${content}</button>`;
  const performanceSequence = () => `<div class="programmer12-temporal" aria-label="Последовательность действий перформанса">${[
    ['01-space-00-31', '01 / SPACE / 00:31', 'Исполнитель внутри пространственной партитуры'],
    ['02-sign-detail-00-16', '02 / SIGN DETAIL / 00:16', 'Каллиграфический знак на материнской плате'],
    ['03-process-00-39', '03 / PROCESS / 00:39', 'Кисть наносит знак на поверхность платы'],
    ['04-code-detail-00-52', '04 / CODE DETAIL / 00:52', 'Написанный знак и электронные дорожки'],
    ['05-object-01-06', '05 / OBJECT / 01:06', 'Плата как завершённый материальный носитель'],
    ['06-action-detail-01-22', '06 / ACTION DETAIL / 01:22', 'Движение кисти завершает последовательность письма']
  ].map(([file, label, alt]) => `<figure><a href="/assets/art-is-you/programmer-performance-v2/${file}.jpg" target="_blank" rel="noopener" aria-label="${alt} — открыть исходный кадр">${img(`/assets/art-is-you/programmer-performance-v2/${file}.jpg`, alt)}</a>${source(label, '')}</figure>`).join('')}</div>`;

  const views = {
    likes: () => shell(`
      <header class="likes12-opening v12-grid">
        <figure class="likes12-opening__water">${control('Показать сдвиг отражения на воде', `${img('/assets/art-is-you/likes-pond-archive-9/39385810_1847042762045059_1028058709298774016_n.jpg', 'Ночная инсталляция «Лайков пруд»: световые знаки и отражение в воде')}<span class="likes12-opening__reflection">${img('/assets/art-is-you/likes-pond-archive-9/39385810_1847042762045059_1028058709298774016_n.jpg', '')}</span>`)} </figure>
        <p class="likes12-opening__meta">Медиаинсталляция / Архстояние 2018</p>
        <div class="likes12-opening__title"><h1>Лайков<br>пруд</h1><p>Как like / dislike превращают желание одобрения и страх неодобрения в цифровой ритуал?</p></div>
      </header>
      <section class="likes12-concept v12-grid" aria-label="Концепция проекта">
        <p class="likes12-concept__label">Концепция</p>
        <div class="likes12-concept__registers">
          <article><p>Культурный сдвиг</p><p>Потребность в социальном одобрении получает цифровую форму: like / dislike превращают чужую реакцию в счётчик собственной значимости и приучают измерять себя публичной оценкой.</p></article>
          <article><p>Гипотеза</p><p>Когда одобрение и неодобрение становятся видимыми и измеримыми, они начинают влиять на наше поведение — на то, чего мы ждём, желаем и опасаемся.</p></article>
          <article><p>Система</p><p>Более 100 световых знаков like / dislike размещены на поверхности пруда. Повторяясь и отражаясь в воде, они образуют плотное световое поле, в котором единичная реакция становится массовой системой оценки.</p></article>
          <article><p>Результат</p><p>Инсталляция и перформативное действие переносят цифровой ритуал одобрения в физическое пространство, превращая систему реакций в коллективный опыт оценки и отражения.</p></article>
        </div>
      </section>
      <section class="likes12-mechanism v12-grid" aria-label="Механика отражения">
        <figure>${img('/assets/art-is-you/likes-pond-video-evidence/likes-pond-video-frame-02-07-750-like-dislike-alternate.jpg', 'Знаки like и dislike и их реальное отражение в воде')}${source('LIKE ↔ DISLIKE', 'REFLECTION / MECHANISM')}</figure>
        <div><p class="v12-index">Механика</p><h2>Один знак одновременно становится like и dislike.</h2><p>Физический знак и его отражение существуют одновременно: поверхность воды не заменяет одно значение другим, а делает видимой их двойственность.</p></div>
      </section>
      <section class="likes12-result" aria-label="Коллективное поле">
        <figure>${img('/assets/art-is-you/likes-pond-archive-9/39402039_1847043335378335_967767637729738752_n.jpg', 'Световые знаки и отражения в воде: коллективное поле')}${source('Коллективное поле', 'Результат / публичное присутствие')}</figure>
      </section>
      <section class="likes12-process" aria-label="Процесс реализации">
        <div class="likes12-process__intro"><p class="v12-index">Процесс</p><h2>От рисунка<br>→ к прототипу<br>→ к реализации</h2><p class="likes12-process__lead">Световой знак проходит путь от первоначального рисунка и прототипа к физической реализации на поверхности пруда.</p></div>
        <figure class="likes12-process__drawing" aria-hidden="true">${img('/assets/art-is-you/likes-pond-archive-9/likes-pond-technical-contour.png', '')}${source('TECHNICAL CONTOUR', 'FORM / WATERMARK')}</figure>
        <div class="likes12-process__register">
        <figure class="likes12-process__wood">${img('/assets/art-is-you/likes-pond-process/likes-pond-process-form.jpg', 'Деревянная форма светового знака like на полу мастерской')}${source('01 / MATERIAL', 'WOOD PROTOTYPE')}</figure>
        <figure class="likes12-process__test">${img('/assets/art-is-you/likes-pond-archive-9/likes-pond-water-light-test.jpg', 'Проверка светового знака в воде')}${source('02 / WATER–LIGHT', 'MATERIAL TEST')}</figure>
        <figure class="likes12-process__water">${img('/assets/art-is-you/likes-pond-archive-9/37308925_2085298884876933_1195983851738890240_n.jpg', 'Человек размещает световой знак в воде')}${source('03 / WATER', 'PLACEMENT TEST')}</figure>
        </div>
        <div class="likes12-process__deployment"><p class="v12-index">05 / DEPLOYMENT<br>OBJECTS TO WATER</p><figure>${img('/assets/art-is-you/likes-pond-documentation-video-frame-00-32.jpg', 'Человек перевозит световые объекты на лодке')}${source('05 / DEPLOYMENT', 'OBJECTS TO WATER')}</figure></div>
      </section>
      <section class="likes12-public v12-grid" aria-label="Реализация и публика">
        <figure class="likes12-public__deployment">${img('/assets/art-is-you/likes-pond-video-evidence/likes-pond-video-frame-00-20-500-object-human.jpg', 'Человек развёртывает объект на воде')}${source('DEPLOYMENT / HUMAN', 'OBJECT AT HUMAN SCALE')}</figure>
        <figure class="likes12-public__interaction">${img('/assets/static.tildacdn.com/38434458_20894541844.jpg', 'Посетители запускают световой знак like на воду')}${source('PUBLIC INTERACTION', 'DOCUMENTARY / SOCIAL PROOF')}</figure>
        <div class="likes12-public__copy"><p class="v12-index">Взаимодействие с публикой</p><p>Публика замыкает цикл: зрители запускают лайки на воду, фотографируют их и тут же возвращают в социальные сети. Цифровая реакция становится физическим ритуалом — а затем снова цифровым образом.</p><p>Фото: Izvestia / Safroon Golikov, Anastasia Zarubina, Sergey Kyrtikov, Mayko Timofey.</p></div>
        <figure class="likes12-public__audience">${img('/assets/art-is-you/likes-pond-archive-9/40168301_2141865429218799_7066199307707219968_n.jpg', 'Публика и инсталляция «Лайков пруд»')}${source('PUBLIC INTERACTION', 'AUDIENCE')}</figure>
      </section>
      <section class="likes12-video v12-grid" aria-label="Видеодокументация"><a href="https://www.youtube.com/watch?v=GstPEtPQGBA" target="_blank" rel="noreferrer">Полная видеодокументация ↗</a></section>
      <section class="likes12-official v12-grid" aria-label="Официальное фестивальное подтверждение"><figure>${img('/assets/art-is-you/likes-pond-archive-9/38005033_2106061999467288_2762912672939769856_n.jpg', 'Официальная фестивальная табличка проекта «Лайков пруд»')}${source('OFFICIAL FESTIVAL EVIDENCE', 'АРХСТОЯНИЕ 2018')}</figure></section>
      ${data([['YEAR', '2018'], ['FORMAT', 'MEDIA INSTALLATION'], ['CONTEXT', '«Архстояние-2018» / Никола-Ленивец']])}
      <footer class="ay-site-footer" aria-label="Footer Art.Is.You">
        <div class="ay-site-footer__bar"><span>ART.IS.YOU / INDEPENDENT PLATFORM</span><span>ART / AI / MEMORY / AUTHORSHIP</span></div>
        <div class="ay-site-footer__grid">
          <section class="ay-site-footer__brand"><a class="ay-site-footer__logo" href="/" aria-label="Art.Is.You — главная страница"><span>ART.</span><span>IS.</span><span>YOU</span></a><nav class="ay-site-footer__socials" aria-label="Социальные сети и контакты"><a href="https://www.facebook.com/Chernysheva.Julia" target="_blank" rel="noreferrer">FB</a><a href="https://www.instagram.com/juliach.art/" target="_blank" rel="noreferrer">IG</a><a href="https://t.me/backupmemory" target="_blank" rel="noreferrer">TG</a><a href="mailto:julchernysheva@gmail.com">@</a><a href="https://www.youtube.com/channel/UCVGsMIYOqK5Ozo2AbgIgc6A?view_as=subscriber" target="_blank" rel="noreferrer">YT</a><a href="https://snob.ru/profile/412337/blog/" target="_blank" rel="noreferrer">SNOB</a></nav><div class="ay-site-footer__brand-meta"><span>OPEN ARCHIVE</span><span>MOSCOW</span></div></section>
          <section class="ay-site-footer__about"><p class="ay-site-footer__label">ABOUT</p><h2>Юлия Чернышева</h2><p>Креативный R&amp;D-директор, куратор и исследователь культуры эпохи AI.</p><p>Создаёт художественные миры, редакционные системы и исследовательские платформы о новых формах авторства, памяти и восприятия.</p><a class="ay-site-footer__inline-link" href="/about/"><span>Открыть профиль</span><span aria-hidden="true">↗</span></a></section>
          <nav class="ay-site-footer__column ay-site-footer__topics" aria-label="Основные темы"><p class="ay-site-footer__label">TOPICS</p><a href="/publications/"><span>AI &amp; Art</span><span>01</span></a><a href="/projects/godbot/"><span>Algorithmic Authorship</span><span>02</span></a><a href="/projects/"><span>Media Art</span><span>03</span></a><a href="/artist-statement/"><span>Worldbuilding</span><span>04</span></a></nav>
          <nav class="ay-site-footer__column ay-site-footer__explore" aria-label="Разделы сайта"><p class="ay-site-footer__label">EXPLORE</p><a href="/projects/"><span>Projects</span><span>01</span></a><a href="/research/"><span>Research</span><span>02</span></a><a href="/artist-statement/"><span>Artist Statement</span><span>03</span></a><a href="/about/"><span>About</span><span>04</span></a></nav>
        </div>
        <div class="ay-site-footer__bottom"><span>© <span class="ay-site-footer__year">2026</span> ART.IS.YOU</span><div class="ay-site-footer__bottom-links"><a href="mailto:julchernysheva@gmail.com">JULCHERNYSHEVA@GMAIL.COM</a><a href="https://snob.ru/profile/412337/blog/" target="_blank" rel="noreferrer">AUTHOR'S BLOG ↗</a></div></div>
      </footer>`, true),
    oracle: () => shell(`
      <header class="oracle12-opening v12-grid">
        <figure>${control('Сделать объект Оракул более различимым', img('/assets/static.tildacdn.com/242904329_9941776347.jpg', 'Оракул как пространственный объект'))}</figure>
        <p class="oracle12-opening__meta">Интерактивный арт-объект / «Говорящий город 2.0»</p>
        <div><h1>Говорящий<br>город 2.0</h1><p>Что происходит, когда<br>архитектурный объект<br>начинает отвечать человеку?</p></div>
      </header>
      <section class="city12-framework v12-grid" aria-label="Говорящий город 2.0: проектная рамка">
        <div><p class="v12-index">Концепция</p></div>
        <div class="city12-framework__registers">
          <article><p>Культурный сдвиг</p><p>Граница между архитектурой и интерфейсом размывается: городская среда становится интерактивной.</p></article>
          <article><p>Гипотеза</p><p>Интерактивная городская среда может не только обслуживать повседневные потребности, но и становиться пространством личного выбора и коллективного взаимодействия.</p></article>
          <article><p>Система</p><p>«Оракул» отвечает на личный запрос одним из трёх сигналов — «да», «нет» или «возможно». «Аура» считывает состояние человека и превращает свет и звук в форму интуитивного, почти ментального диалога.</p></article>
          <article><p>Результат</p><p>Два объекта переводят личный запрос и состояние человека в пространственный сигнал: не снимают неопределённость, а создают условия для личной и коллективной интерпретации.</p></article>
        </div>
      </section>
      <section class="oracle12-object v12-grid" aria-label="Оракул: история объекта">
        <figure class="oracle12-object__hero">${img('/assets/static.tildacdn.com/ba88e53f6a_245150333_3900628292.jpg', 'Оракул: кинетическая форма и световой сигнал')}${source('ОРАКУЛ / СИГНАЛ', 'КИНЕТИЧЕСКАЯ ФОРМА')}</figure>
        <div class="oracle12-object__title"><p class="v12-index">02 / ОРАКУЛ</p><h2>Личный сигнал.</h2></div>
        <div class="oracle12-object__registers">
          <article><p>Личный вопрос</p><p>Человек приходит к «Оракулу» с личным вопросом — в ситуации, где решение ещё не принято.</p></article>
          <article><p>Действие</p><p>Человек задаёт вопрос «Оракулу». Объект оживает — и на мгновение кажется, что он размышляет.</p></article>
          <article><p>Ответ</p><p>«Оракул» возвращает один из трёх сигналов — «да», «нет» или «возможно». Объект не решает за человека — выбор остаётся за ним.</p></article>
          <article><p>Форма</p><p>Благодаря кинетической форме ответ становится частью физического опыта, а не просто сообщением.</p></article>
          <article><p>Опыт</p><p>«Оракул» создаёт короткую паузу, в которой человек обращается к собственным мыслям и смыслам, возникающим вокруг нового выбора.</p></article>
        </div>
      </section>
      <section class="oracle12-documentation v12-grid" aria-label="Оракул: выбор">
        <div class="oracle12-documentation__title"><p class="v12-index">03 / ДОКУМЕНТАЦИЯ</p></div>
        <figure class="oracle12-documentation__human">${img('/assets/static.tildacdn.com/242904329_9941776347.jpg', 'Человек рядом с объектом Оракул')}${source('ОБЪЕКТ / ЧЕЛОВЕК', 'МАСШТАБ ВЗАИМОДЕЙСТВИЯ')}</figure>
        <figure class="oracle12-documentation__light">${img('/assets/static.tildacdn.com/245138453_9504750555.jpg', 'Световая конфигурация объекта Оракул')}${source('СВЕТОВАЯ КОНФИГУРАЦИЯ', 'СОСТОЯНИЕ ОТВЕТА')}</figure>
        <figure class="oracle12-documentation__detail">${img('/assets/static.tildacdn.com/245188223_2172130402.jpg', 'Конструктивная деталь Оракула')}${source('КОНСТРУКТИВНАЯ ДЕТАЛЬ', 'РАМА / СВЕТ / РАВНОВЕСИЕ')}</figure>
      </section>
      <section class="aura12-object v12-grid" aria-label="Аура: история объекта">
        <figure class="aura12-object__hero">${img('/assets/static.tildacdn.com/_n1.jpg', 'Аура: объект в световом поле')}${source('АУРА / ГОРОД 2.0', 'ПРИСУТСТВИЕ / СВЕТ / ЗВУК')}</figure>
        <div class="aura12-object__title"><p class="v12-index">04 / АУРА</p><h2>Городской сигнал.</h2></div>
        <div class="aura12-object__registers">
          <article><p>Состояние человека</p><p>«Аура» начинается с состояния человека: объект считывает его как исходный сигнал.</p></article>
          <article><p>Считывание</p><p>Состояние человека становится входом для системы: объект фиксирует сигнал и начинает на него реагировать.</p></article>
          <article><p>Свет / звук</p><p>Свет и звук становятся формой ответа объекта: состояние человека преобразуется в меняющуюся светозвуковую среду.</p></article>
          <article><p>Пространство</p><p>Реакция объекта распространяется в пространство вокруг него: индивидуальное состояние становится частью общего вайба.</p></article>
          <article><p>Опыт</p><p>«Аура» позволяет почувствовать, что город тебя видит и слышит.</p></article>
        </div>
      </section>
      <section class="aura12-documentation v12-grid" aria-label="Аура: документация">
        <div class="aura12-documentation__title"><p class="v12-index">05 / ДОКУМЕНТАЦИЯ</p></div>
          <figure class="aura12-documentation__field">${img('/assets/art-is-you/aura-source-v1/07_INTERACTION_SCHEME.png', 'Схема предложенного взаимодействия с артефактом Аура')}${source('СХЕМА ВЗАИМОДЕЙСТВИЯ', 'АКТИВАЦИЯ / ИДЕНТИФИКАЦИЯ / СВЕТ + ЗВУК')}</figure>
        <figure class="aura12-documentation__horizon">${img('/assets/static.tildacdn.com/_n_.jpg', 'Аура: горизонтальная световая конфигурация')}${source('ГОРИЗОНТАЛЬНЫЙ СИГНАЛ', 'СВЕТ КАК ПРОСТРАНСТВО')}</figure>
        <figure class="aura12-documentation__night">${img('/assets/static.tildacdn.com/07a85f8959__n_.jpg', 'Аура: ночная фаза объекта')}${source('НОЧНАЯ ФАЗА', 'ГОРОДСКОЙ ВАЙБ')}</figure>
        <figure class="aura12-documentation__technical">${img('/assets/art-is-you/aura-source-v1/09_TECHNICAL_DRAWING.png', 'Техническая схема Ауры из исходного концепт-пакета')}${source('ТЕХНИЧЕСКАЯ СХЕМА', 'РАЗРАБОТКА / МАТЕРИАЛЫ / СВЕТ')}</figure>
          <figure class="aura12-documentation__placement">${img('/assets/art-is-you/aura-source-v1/12_SITE_MOCKUP_GOLITSYNSKIY_POND.png', 'Визуализация предложенного размещения Ауры в Голицынском пруду')}${source('ВИЗУАЛИЗАЦИЯ РАЗМЕЩЕНИЯ', 'ЦПКИО / ГОЛИЦЫНСКИЙ ПРУД — ПРЕДЛОЖЕНИЕ')}</figure>
      </section>
      <section class="oracle12-video v12-grid" aria-label="Видеодокументация проекта">
        <p class="v12-index">06 / ВИДЕОДОКУМЕНТАЦИЯ</p>
        <a href="https://youtu.be/XilQVlygGQw" target="_blank" rel="noreferrer">VIDEO A <span aria-hidden="true">↗</span></a>
        <a href="https://youtu.be/FKSfcp_kRSU" target="_blank" rel="noreferrer">VIDEO B <span aria-hidden="true">↗</span></a>
      </section>
      <section class="oracle12-dual v12-grid" aria-label="Оракул и Аура: два масштаба">
        <p class="v12-index">07 / ДВА МАСШТАБА</p>
        <p class="oracle12-dual__statement">Оракул <span>↔</span> Аура<br>Архитектура отвечает <span>↔</span> Город видит и слышит</p>
        <figure class="oracle12-dual__oracle">${img('/assets/static.tildacdn.com/ba88e53f6a_245150333_3900628292.jpg', 'Оракул: архитектура отвечает')}${source('ОРАКУЛ', 'АРХИТЕКТУРА ОТВЕЧАЕТ')}</figure>
        <figure class="oracle12-dual__aura">${img('/assets/static.tildacdn.com/_n1.jpg', 'Аура: город видит и слышит')}${source('АУРА', 'ГОРОД ВИДИТ И СЛЫШИТ')}</figure>
      </section>
      ${data([['ПРОЕКТ', '«ГОВОРЯЩИЙ ГОРОД 2.0»'], ['ОБЪЕКТЫ', 'ОРАКУЛ / АУРА'], ['МАСШТАБ', 'ЛИЧНЫЙ ВОПРОС / ГОРОДСКОЕ ПОЛЕ']], 'Данные проекта')}
      <footer class="ay-site-footer" aria-label="Нижний колонтитул Art.Is.You"></footer>`, true),
    programmer: () => shell(`
      <header class="programmer12-score"><figure>${control('Показать печатное смещение пространственной партитуры', img('/assets/static.tildacdn.com/30711084_19301367737.jpg', 'Схема ба-гуа как пространственная партитура'))}</figure><p>Перформанс / 2018</p></header>
      <section class="programmer12-instruction v12-grid" aria-label="Инструкция"><div><p class="v12-index">Instruction</p><h1>Медитирующий<br>программист</h1><p>Перформанс с материнскими платами, триграммами багуа и знаками «Дао дэ цзина».</p></div><figure>${img('/assets/static.tildacdn.com/Screen_Shot_2018-05-.png', 'Материнская плата с тремя каллиграфическими знаками')}${source('BOARD 01 / THREE SIGNS', 'CANONICAL MATERIAL PAIR')}</figure></section>
      <section class="programmer12-concept v12-grid" aria-label="Концепция"><div><p class="v12-index">Концепция</p><h2>Код как форма<br>письма.</h2></div><div class="programmer12-concept__registers"><article><p>Культурный сдвиг</p><p>Программирование выходит за пределы инженерной практики и становится культурной формой мышления. Код не только управляет машиной — он меняет представления о порядке, действии, авторстве и отношениях человека с технологией.</p></article><article><p>Идея</p><p>Программный код и древние знаковые системы сопоставляются как разные способы переводить абстрактный порядок в действие.<br><br>Проект соединяет вычислительную логику, символ, ритуал и телесную практику.</p></article><article><p>Система</p><p>Код преобразуется в знак, знак переносится на материнскую плату, а плата становится пространственной координатой действия.<br><br>Восемь материнских плат, триграммы багуа и 24 знака «Дао дэ цзина» образуют партитуру, которую перформер активирует движением тела.</p></article><article><p>Результат</p><p>Электронная архитектура, знаковая система и движение тела становятся одной исполняемой партитурой.</p></article></div></section>
      <section class="programmer12-material v12-grid" aria-label="Материал"><figure>${img('/assets/static.tildacdn.com/30623899_19271662740.jpg', 'Несколько материнских плат как физические поверхности письма')}${source('MOTHERBOARDS', 'MATERIAL SYSTEM')}</figure><div><p class="v12-index">Material system</p><h2>Восемь<br>поверхностей<br>письма.</h2><p>Материнские платы перестают быть техническими деталями и становятся пространственной партитурой. Каждая плата соответствует одной триграмме; на каждую поверхность нанесены три каллиграфических знака из первой главы «Дао дэ цзина». Электронная архитектура сохраняется видимой: дорожки, разъёмы и микросхемы вступают в прямой визуальный диалог с рукописным знаком.</p></div></section>
      <section class="programmer12-protocol v12-grid" aria-label="Пространственный протокол"><p>Положение каждой платы определяется не композицией кадра, а системой ба-гуа. Восемь триграмм задают восемь направлений, между которыми располагается исполнитель. Центральная позиция соответствует Человеку внутри Великой Триады.</p><span>BA-GUA<br>→<br>SPATIAL PROTOCOL</span></section>
      <section class="programmer12-performance v12-grid" aria-label="Перформанс"><div><p class="v12-index">Performance</p><h2>Алгоритм<br>перформанса.</h2><p>Пространство не иллюстрирует идею, а становится исполняемой структурой. Исполнитель работает внутри круга, соединяя письмо, материальные носители и медитативное действие.</p></div><figure class="programmer12-performance__video"><video controls playsinline preload="none" width="1280" height="720" poster="/assets/static.tildacdn.com/30739110_19178589882.jpg" aria-label="Полная видеодокументация перформанса Медитирующий программист"><source src="/assets/art-is-you/programmer-performance-v2/meditating-programmer.mp4" type="video/mp4"></video><figcaption class="v12-source"><span>PERFORMANCE / KATYA REFENSTAHL</span><span>CALLIGRAPHY / CODE / RITUAL</span><a class="programmer12-video-link" href="https://www.youtube.com/watch?v=OZsncQ2Wzew" target="_blank" rel="noopener">Полная видеодокументация ↗</a></figcaption></figure>${performanceSequence()}</section>
      <section class="programmer12-document v12-grid" aria-label="Документальный корпус"><div><p class="v12-index">24 signs / Tao Te Ching</p><h2>Текст как<br>алгоритм.</h2><p>Первая часть первой главы «Дао дэ цзина» распределяется между восемью материнскими платами. Текст становится маршрутом, пространственным протоколом и системой переходов между состояниями.</p></div><p>道 可 道 非 常 道 名 可 名 非 常 名 無 名 天 地 之 始 有 名 萬 物 之 母</p></section>
      <section class="programmer12-credits v12-grid" aria-label="Credits"><div><p class="v12-index">Credits</p><h2>Команда<br>перформанса.</h2><p>Проект создан как совместная работа художника, перформера, саунд-артиста и исследовательской лаборатории.</p></div><dl><div><dt>Idea</dt><dd>Julia Chernysheva</dd></div><div><dt>Performer</dt><dd>Katya Refenstahl</dd></div><div><dt>Sound</dt><dd>Kryptogen Rundfunk — Maulkorb</dd></div><div><dt>Photo</dt><dd>Sergey Kyrtikov / Julia Chernysheva</dd></div><div><dt>Support</dt><dd>Future Culture Laboratory / University NTI 20.35</dd></div></dl></section>
      ${data([['YEAR', '2018'], ['FORMAT', 'PERFORMANCE'], ['TAG', '#EXECUTABLE_SPACE']])}
      <footer class="ay-site-footer" aria-label="Footer Art.Is.You"></footer>`),
    nowords: () => shell(`
      <header class="nowords12-entry v12-grid"><figure>${img('/assets/static.tildacdn.com/IMAGE_2022-03-22_133.jpg', 'Без слов — изображение 01')}${source('ИЗОБРАЖЕНИЕ 01', '22.02.22 / 00:21')}</figure><div><p class="v12-index">22.02.22 / 00:21</p><h1>Без<br>слов</h1><p class="nowords12-entry__lead">AI-арт проект о границах языка и разнице между словом, переживанием и машинным изображением.</p></div></header>
      <section class="nowords12-concept v12-grid" aria-label="Концепция"><div><p class="v12-index">Концепция</p><h2>Три<br>изображения.<br>Один разрыв.</h2></div><div class="nowords12-concept__registers"><article><p>Культурный сдвиг</p><p>Язык не всегда способен удержать пережитое состояние. Когда слов недостаточно, генеративная система становится посредником между внутренним опытом и образом.</p></article><article><p>Идея</p><p>Передать системе слово и исследовать разрыв между авторским намерением и машинной интерпретацией.<br><br>Это различие становится материалом работы.</p></article><article><p>Система</p><p>22.02.22 в 00:21 в текстовый генератор было введено слово. В ответ система создала три изображения, фиксирующие несовпадение между вводом и результатом.</p></article><article><p>Результат</p><p>Три изображения фиксируют состояние, для которого автор не находил слов, и делают видимым сам жест обращения к нечеловеческой системе.</p></article></div></section>
      <section class="nowords12-record v12-grid" aria-label="Авторская запись"><p>22 февраля 2022 года в 00:21 в текстовый генератор было введено слово. В ответ система создала три изображения, ставшие визуальной фиксацией смешанных состояний, для которых не находилось слов.</p><span>Авторская запись / 22.02.22</span></section>
      <section class="nowords12-dominant" aria-label="Смешанное состояние"><figure>${img('/assets/static.tildacdn.com/IMAGE_2022-03-22_141.jpg', 'Без слов — изображение 02')}${source('ИЗОБРАЖЕНИЕ 02', 'СМЕШАННОЕ СОСТОЯНИЕ')}</figure></section>
      <section class="nowords12-language v12-grid" aria-label="Ошибка генерации">${control('Показать нарушение базовой линии текста', '<span>Ошибка генерации<br>может быть методом</span>', 'nowords12-language__control')}<p>Разрыв между авторским намерением и машинной интерпретацией становится материалом работы.</p></section>
      <section class="nowords12-closure v12-grid" aria-label="Образ без слова"><figure>${img('/assets/static.tildacdn.com/IMAGE_2022-03-22_160.jpg', 'Без слов — изображение 03')}${source('ИЗОБРАЖЕНИЕ 03', 'ОБРАЗ БЕЗ СЛОВА')}</figure><p>Три полученных изображения фиксируют состояние, для которого автор не находил слов.</p></section>
      ${data([['ГОД', '2022'], ['ФОРМАТ', 'ИИ-ИСКУССТВО / КОРПУС ИЗОБРАЖЕНИЙ'], ['ЗАПИСЬ', 'ТРИ ИЗОБРАЖЕНИЯ / 22.02.22']], 'Данные проекта')}
      <footer class="ay-site-footer" aria-label="Нижний колонтитул Art.Is.You"></footer>`, true)
  };

  const root = document.querySelector('[data-v12-root]');
  const view = views[document.body.dataset.v12Project];
  if (!root || !view) return;
  root.innerHTML = view();
  if (document.body.dataset.v12Project === 'programmer') {
    root.querySelector('.v12-nav')?.replaceWith(document.createElement('art-is-you-header'));
  }
  const controls = [...root.querySelectorAll('.v12-control')];
  const clear = button => { button.setAttribute('aria-pressed', 'false'); delete button.dataset.preview; };
  controls.forEach(button => {
    button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') button.dataset.preview = 'true'; });
    button.addEventListener('pointerleave', () => { delete button.dataset.preview; });
    button.addEventListener('focus', () => { if (button.matches(':focus-visible')) button.dataset.preview = 'true'; });
    button.addEventListener('blur', () => { delete button.dataset.preview; });
    button.addEventListener('click', () => { delete button.dataset.preview; button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true')); });
    button.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); clear(button); } });
  });
  document.addEventListener('pointerdown', event => controls.forEach(button => { if (!button.contains(event.target)) clear(button); }));
})();
