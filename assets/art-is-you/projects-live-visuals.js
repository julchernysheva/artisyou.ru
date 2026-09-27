/* Projects 01/02: frozen poster → contextual hover → explicit live activation. */
(function () {
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
    else fn();
  }
  ready(function () {
    document.querySelectorAll('.projects-live-visual[data-live-src]').forEach(function (node) {
      var mount = node.querySelector('.projects-live-visual__mount');
      if (!mount) return;
      var loading = false;
      var label = node.getAttribute('data-live-label') || 'live project';
      node.setAttribute('role', 'button');
      node.setAttribute('tabindex', '0');
      node.setAttribute('aria-label', 'Активировать: ' + label);
      node.setAttribute('aria-pressed', 'false');

      function activate(event) {
        if (node.classList.contains('is-live') || loading) return;
        if (event) { event.preventDefault(); event.stopPropagation(); }
        loading = true;
        node.classList.add('is-loading');
        var frame = document.createElement('iframe');
        frame.src = node.getAttribute('data-live-src');
        frame.title = label;
        frame.loading = 'eager';
        frame.setAttribute('allow', 'autoplay; fullscreen');
        frame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
        frame.addEventListener('load', function () {
          loading = false;
          node.classList.remove('is-loading');
          node.classList.add('is-live');
          node.setAttribute('aria-pressed', 'true');
          node.removeAttribute('role');
          node.removeAttribute('tabindex');
          mount.setAttribute('aria-hidden', 'false');
        }, { once: true });
        mount.replaceChildren(frame);
      }

      node.addEventListener('mouseenter', function () { node.classList.add('is-hover'); });
      node.addEventListener('mouseleave', function () { node.classList.remove('is-hover'); });
      node.addEventListener('click', activate);
      node.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') activate(event);
      });
    });
  });
})();
