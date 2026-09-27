(() => {
  'use strict';
  const init = () => {
    const grid = document.querySelector('.projects-index__grid');
    if (!grid) return;
    const cards = [...grid.querySelectorAll(':scope > .project-card')];
    if (!cards.length) return;

    const cycle = [1, 2, 3];
    const classFor = (n) => n === 1 ? 'p6-2-span-12' : n === 2 ? 'p6-2-span-6' : 'p6-2-span-4';
    const pattern = [];
    let offset = 0;
    let slot = 0;

    cards.forEach((card) => card.classList.remove(
      'p6-2-span-12','p6-2-span-6','p6-2-span-4',
      'v17-span-12','v17-span-6','v17-span-4','v17-span-3'
    ));

    while (offset < cards.length) {
      const size = Math.min(cycle[slot], cards.length - offset);
      const cls = classFor(size);
      cards.slice(offset, offset + size).forEach((card) => card.classList.add(cls));
      pattern.push(size);
      offset += size;
      slot = (slot + 1) % cycle.length;
    }

    grid.classList.add('p6-2-projects-rhythm');
    grid.dataset.v17Rhythm = 'true';
    grid.dataset.v17Pattern = pattern.join('-');
    grid.dataset.p62Pattern = pattern.join('-');
    document.documentElement.dataset.projectsIndexCanon = 'p6-2-1-2-3';
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
