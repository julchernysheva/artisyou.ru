/* Author-approved own evidence only; scoped to the two approved research destinations. */
(function () {
  'use strict';
  function mount() {
    const proto = document.querySelector('.prearchive-linear');
    if (proto && proto.querySelector('.ay-editorial-field--protoarchive') && proto.querySelectorAll('.pl-event').length === 16 && !proto.querySelector('.c2-own-evidence')) {
      const line = proto.querySelector('.pl-shell > .pl-line');
      if (!line) return false;
      const events = Array.from(line.querySelectorAll(':scope > .pl-event'));
      if (events.length !== 16) return false;
      // Complete comparative corpus first; authorial evidence remains outside its case nodes.
      const evidence = document.createElement('section');
      evidence.className = 'c2-own-evidence c2-own-evidence--protoarchive';
      evidence.setAttribute('aria-label', 'Авторский пример архивной системы вне сравнительного реестра');
      evidence.innerHTML = `
        <p class="c2-own-evidence__identity c2-own-evidence__micro">АВТОРСКИЙ ПРИМЕР / ВНЕ СРАВНИТЕЛЬНОГО РЕЕСТРА</p>
        <figure class="c2-own-evidence__document">
          <iframe class="c2-own-evidence__experience" src="/assets/art-is-you/archive-transition/" title="Интерактивный опыт Богобота «Архив перехода»" loading="lazy" sandbox="allow-scripts allow-downloads allow-forms allow-top-navigation-by-user-activation"></iframe>
          <a class="c2-own-evidence__experience-link c2-own-evidence__micro" href="/assets/art-is-you/archive-transition/" target="_blank" rel="noreferrer noopener">Открыть Архив перехода ↗</a>
          <figcaption class="c2-own-evidence__caption c2-own-evidence__micro">БОГОБОТ / «АРХИВ ПЕРЕХОДА»<span>Авторская архивная система. Юлия Чернышева.<br>Публикация в исследовании «Преархив» — 2026.</span></figcaption>
        </figure>
        <div class="c2-own-evidence__context">
          <p class="v16-text">Адрес, имя, поток, экспорт и повреждение получают статус архивных следов. Авторский пример показывает механизм документальной формы, а не исторический кейс из сравнительного корпуса.</p>
        </div>`;
      line.after(evidence);
      document.documentElement.dataset.c2Prototype = 'protoarchive';
      return true;
    }
    const bio = document.querySelector('.bio-timeline');
    if (bio && bio.querySelector('.bio-morph') && bio.querySelectorAll('.bio-ledger__row').length === 17 && !bio.querySelector('.c2-own-evidence')) {
      const ledger = bio.querySelector('.bio-ledger');
      const evidence = document.createElement('section');
      evidence.className = 'c2-own-evidence c2-own-evidence--bioart';
      evidence.setAttribute('aria-label', 'Авторское полевое evidence, не документация проектов исторического реестра');
      evidence.innerHTML = `
        <p class="c2-own-evidence__identity c2-own-evidence__micro">АВТОРСКОЕ ПОЛЕВОЕ EVIDENCE / НИКОЛА-ЛЕНИВЕЦ / 2019</p>
        <figure class="c2-own-evidence__field">
          <img src="/assets/art-is-you/c2-authorial-evidence/nikola-lenivets-n16-2019.jpg" alt="Собранные растительные фрагменты и следы материала на рабочей поверхности в авторской резиденции Никола-Ленивца" width="3264" height="2448">
          <figcaption class="c2-own-evidence__caption c2-own-evidence__micro">СОБРАННЫЙ ОРГАНИЧЕСКИЙ МАТЕРИАЛ / СЛЕД РАБОТЫ<span>Никола-Ленивец. Арт-резиденция, 2019.<br>Авторская полевая документация.<br>Публикация в исследовании «Живое как медиум» — 2026.</span></figcaption>
        </figure>
        <p class="c2-own-evidence__field-note v16-text">Полевое наблюдение и работа с собранным органическим материалом. Не документация исторических проектов реестра и не доказательство биологического эксперимента.</p>`;
      ledger.before(evidence);
      document.documentElement.dataset.c2Prototype = 'bioart';
      return true;
    }
    return Boolean(document.querySelector('.c2-own-evidence'));
  }
  function start() {
    if (mount()) return;
    const observer = new MutationObserver(() => { if (mount()) observer.disconnect(); });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
