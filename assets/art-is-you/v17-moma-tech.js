(() => {
  'use strict';

  const normalizePath = (value) => {
    const path = String(value || '/').replace(/index\.html$/, '');
    if (path === '') return '/';
    return path.endsWith('/') ? path : `${path}/`;
  };

  // P7.2A — visual rhythm canon.
  // Primary mode: 1 -> 2 -> 3. Alternate mode: 1 -> 2 -> 4.
  // The alternate is selected only when it avoids an awkward incomplete final row;
  // one story never mixes 3- and 4-card third tiers arbitrarily.
  const buildRhythmMode = (count, thirdTier) => {
    const cycle = [1, 2, thirdTier];
    const seq = [];
    let remaining = Math.max(0, Number(count) || 0);
    let slot = 0;
    let partial = false;
    while (remaining > 0) {
      const target = cycle[slot];
      const size = Math.min(target, remaining);
      seq.push(size);
      if (size < target) partial = true;
      remaining -= size;
      slot = (slot + 1) % cycle.length;
    }
    return { seq, partial, thirdTier };
  };

  const rhythmPattern = (count) => {
    const total = Math.max(0, Number(count) || 0);
    if (!total) return [];

    const primary = buildRhythmMode(total, 3);
    const alternate = buildRhythmMode(total, 4);
    const score = (candidate) => {
      let penalty = candidate.partial ? 100 : 0;
      if (candidate.thirdTier === 4) penalty += 10; // 3 remains the editorial default.
      penalty += candidate.seq.length * 0.01;
      return penalty;
    };

    return score(alternate) < score(primary) ? alternate.seq : primary.seq;
  };

  const projectRhythmPattern = rhythmPattern;

  const spanClass = (size) => size === 1 ? 'v17-span-12' : size === 2 ? 'v17-span-6' : size === 3 ? 'v17-span-4' : 'v17-span-3';

  const regroupStory = (story, projectDetail = false) => {
    if (!story || story.dataset.v17Rhythm === 'true') return;
    const cards = [...story.querySelectorAll('.v16-card')];
    if (!cards.length) return;
    const pageTitle = document.querySelector('h1')?.textContent?.replace(/\s+/g,' ').trim() || 'ART.IS.YOU';
    const pattern = projectDetail ? projectRhythmPattern(cards.length) : rhythmPattern(cards.length);
    story.replaceChildren();
    let offset = 0;
    pattern.forEach((size, index) => {
      if (size <= 0) return;
      const stage = document.createElement('section');
      stage.className = 'v16-stage v17-stage';
      const bar = document.createElement('div');
      bar.className = 'v16-stage__bar';
      const left = document.createElement('span');
      left.textContent = `${String(index + 1).padStart(2,'0')} / ${pageTitle}`;
      const right = document.createElement('span');
      right.textContent = size === 1 ? '1 BLOCK / FULL FIELD' : `${size} BLOCKS / GRID`;
      bar.append(left,right);
      const grid = document.createElement('div');
      grid.className = `v16-grid v16-grid--${size}`;
      cards.slice(offset, offset + size).forEach(card => grid.append(card));
      offset += size;
      stage.append(bar,grid);
      story.append(stage);
    });
    story.dataset.v17Rhythm = 'true';
    story.dataset.v17Pattern = pattern.join('-');
    story.dataset.v17RhythmMode = pattern.includes(4) ? '1-2-4' : '1-2-3';
  };

  const applyRhythm = (container, itemSelector) => {
    if (!container || container.dataset.v17Rhythm === 'true') return;
    const query = itemSelector ? (itemSelector.startsWith(':scope') ? itemSelector : `:scope > ${itemSelector}`) : null;
    const items = query ? [...container.querySelectorAll(query)] : [...container.children];
    const filtered = items.filter(el => !el.matches('script,style'));
    if (filtered.length < 2) return;
    container.classList.add('v17-rhythm-grid');
    const pattern = rhythmPattern(filtered.length);
    let offset = 0;
    pattern.forEach(size => {
      const cls = spanClass(size);
      filtered.slice(offset, offset + size).forEach(el => {
        el.classList.remove('v17-span-12','v17-span-6','v17-span-4','v17-span-3');
        el.classList.add(cls);
      });
      offset += size;
    });
    container.dataset.v17Rhythm = 'true';
    container.dataset.v17Pattern = pattern.join('-');
  };

  const init = () => {
    document.body.classList.add('v17-canon');
    const path = normalizePath(location.pathname);
    const textArticles = new Set([
      '/artist-statement/',
      '/research/essays/error-as-territory-of-freedom/',
      '/research/essays/russia-as-dataset/'
    ]);
    if (textArticles.has(path)) document.body.classList.add('v17-text-article');

    // Protoarchive: the short lead moves to the right column; definition stays directly under it.
    const plHero = document.querySelector('.pl-hero');
    if (plHero) {
      const titleBlock = plHero.firstElementChild;
      const definition = plHero.querySelector('.pl-definition');
      const lead = plHero.querySelector('.pl-lead');
      if (titleBlock) titleBlock.classList.add('v17-proto-title');
      if (lead && definition && lead.parentElement !== definition) definition.prepend(lead);
    }

    // V16 media stories. P7.2A uses one rhythm contract everywhere:
    // 1/2/3 preferred; 1/2/4 allowed only when it avoids a broken remainder.
    if (!document.body.classList.contains('v17-text-article')) {
      const isProjectDetail = document.body.classList.contains('v17-project-detail');
      document.querySelectorAll('.v16-story').forEach(story => regroupStory(story, isProjectDetail));
    }

    // Index and data grids that are not V16 stories.
    applyRhythm(document.querySelector('.projects-index__grid'), '.project-card');
    applyRhythm(document.querySelector('.research-index__grid'), '.research-card');
    applyRhythm(document.querySelector('.bio-timeline__grid'), '.timeline-card');

    document.documentElement.dataset.artIsYouCanon = 'v17-moma-tech';
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
  else init();
})();
