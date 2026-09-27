document.querySelectorAll('.artact-evidence video').forEach((video) => {
  const title = video.getAttribute('aria-label');
  const syncState = () => {
    video.setAttribute('aria-pressed', String(!video.paused));
    video.setAttribute('aria-label', `${title}. ${video.paused ? 'Воспроизвести' : 'Приостановить'} видео`);
  };
  const toggle = () => {
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  video.addEventListener('click', toggle);
  video.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      video.pause();
      return;
    }
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    toggle();
  });
  video.addEventListener('play', syncState);
  video.addEventListener('pause', syncState);
  syncState();
});
