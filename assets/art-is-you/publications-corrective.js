(() => {
  'use strict';
  const apply = () => {
    const grid = document.querySelector('.wb-blog-grid');
    if (!grid) return;
    const rows = [...document.querySelectorAll('.publications-row[data-publication]')]
      .sort((a, b) => Number(a.dataset.publication) - Number(b.dataset.publication));
    const records = new Map([...grid.querySelectorAll('.wb-blog-record[data-wb-id]')]
      .map(record => [record.dataset.wbId, record]));
    if (rows.length !== 10 || records.size !== 10) return;

    for (const row of rows) {
      const number = row.dataset.publication;
      const record = records.get(`PUB-${number}`);
      const articleLink = record?.querySelector('.wb-actions a[href^="http"]');
      const source = row.querySelector('.publications-row__source');
      const category = row.querySelector('.publications-row__category')?.textContent.trim();
      const title = record?.querySelector('.wb-title');
      if (!record || !articleLink || !source || !category || !title) return;

      let outlet = source.querySelector('.publications-row__outlet');
      if (!outlet) {
        outlet = document.createElement('a');
        outlet.className = 'publications-row__outlet';
        source.append(document.createElement('br'), outlet);
      }
      outlet.href = articleLink.href;
      outlet.target = '_blank';
      outlet.rel = 'noopener noreferrer';
      outlet.textContent = `ИЗДАНИЕ / ${articleLink.hostname.includes('snob.ru') ? 'СНОБ' : 'SOSTAV'} ↗`;

      const theme = document.createElement('span');
      theme.className = 'wb-theme';
      theme.setAttribute('aria-hidden', 'true');
      theme.textContent = `${number} / 10 · ${category}`;
      title.prepend(theme);
      grid.append(record);
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();
})();
