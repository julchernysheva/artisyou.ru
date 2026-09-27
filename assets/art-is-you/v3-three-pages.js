(() => {
  const carousels = document.querySelectorAll('.v2-carousel');
  carousels.forEach((carousel) => {
    const slides = [...carousel.querySelectorAll('.v2-carousel__slide')];
    const prev = carousel.querySelector('.v2-carousel__button--prev');
    const next = carousel.querySelector('.v2-carousel__button--next');
    const status = carousel.querySelector('.v2-carousel__status');
    let index = 0;
    if (!slides.length) return;
    const render = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((slide, n) => {
        const active = n === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
      if (status) status.textContent = `${String(index + 1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
    };
    prev?.addEventListener('click', () => render(index - 1));
    next?.addEventListener('click', () => render(index + 1));
    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); render(index - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); render(index + 1); }
    });
    carousel.tabIndex = 0;
    render(0);
  });
  document.querySelectorAll('.ay-site-footer__year').forEach((node) => node.textContent = new Date().getFullYear());
})();
