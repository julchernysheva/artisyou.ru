(() => {
  const classifyImage = (image) => {
    image.classList.add('ay-media');

    const protectedArtwork = image.closest(
      '.t396, .t1148, .t214, .archive-lightbox, .ay-home__network-viewport'
    );
    if (protectedArtwork) image.classList.add('ay-media-exception');

    const applyCategory = () => {
      if (!image.naturalWidth || !image.naturalHeight) return;
      const ratio = image.naturalWidth / image.naturalHeight;
      let category = 'horizontal';

      if (image.closest('[class*="diagram"], [class*="scheme"], [class*="formula"]')) {
        category = 'diagram';
      } else if (image.closest('[class*="logo"]') || Math.max(image.naturalWidth, image.naturalHeight) <= 480) {
        category = 'compact';
      } else if (ratio < 0.82) {
        category = 'vertical';
      } else if (ratio <= 1.18) {
        category = 'square';
      } else if (ratio >= 2.05) {
        category = 'wide';
      }

      image.classList.add(`ay-media-${category}`);
      image.dataset.ayMedia = category;
    };

    if (image.complete) applyCategory();
    else image.addEventListener('load', applyCategory, { once: true });
  };

  const initializeMedia = () => {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', initializeMedia, { once: true });
      return;
    }

    document.querySelectorAll('img').forEach(classifyImage);

    document.querySelectorAll('video, iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"]').forEach((media) => {
      media.classList.add('ay-media', 'ay-media-video');
      media.dataset.ayMedia = 'video';
      if (media.closest('.ph-video, .archive-performance__video')) {
        media.classList.add('ay-media-video--responsive');
      } else {
        media.classList.add('ay-media-exception');
      }
    });

    document.querySelectorAll(
      'figcaption, [class*="caption"], .ay-home__image-caption, .ay-home__meta, .or-meta, .archive-meta, .ph-caption'
    ).forEach((caption) => caption.classList.add('ay-media-caption'));

    const observer = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        const images = node.matches('img') ? [node] : [...node.querySelectorAll('img')];
        images.filter((image) => !image.classList.contains('ay-media')).forEach(classifyImage);

        const embeds = node.matches('video, iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"]')
          ? [node]
          : [...node.querySelectorAll('video, iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"]')];
        embeds.forEach((media) => {
          media.classList.add('ay-media', 'ay-media-video');
          media.dataset.ayMedia = 'video';
          if (media.closest('.ph-video, .archive-performance__video')) {
            media.classList.add('ay-media-video--responsive');
          } else {
            media.classList.add('ay-media-exception');
          }
        });
      }));
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMedia, { once: true });
  } else {
    initializeMedia();
  }
})();
