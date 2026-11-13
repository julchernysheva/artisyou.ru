// STEP 4: role clarification only; preserve existing native links and routes.
(() => {
  if (location.pathname.replace(/\/$/, '') !== '/projects') return;
  function mount() {
    const block = document.querySelector('.index-baseline__other');
    if (!block || block.dataset.roles === 'ready') return;
    const roles = {
      '/research/russian-intellect/': 'Research',
      '/projects/archive/': 'Archive'
    };
    block.querySelector('a[href="/projects/post_human/"]')?.remove();
    const links = [...block.querySelectorAll('a')];
    if (links.length !== 2 || links.some(a => !roles[a.getAttribute('href')])) return;
    block.dataset.roles = 'ready';
    links.forEach(link => {
      const name = document.createElement('span');
      name.className = 'projects-other__name'; name.textContent = link.textContent;
      const role = document.createElement('span');
      role.className = 'projects-other__role'; role.textContent = roles[link.getAttribute('href')];
      link.replaceChildren(name, document.createTextNode(' '), role);
    });
    // The compact native-link group replaces only the old dot separators.
    block.querySelector('p').replaceChildren(...links);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();

