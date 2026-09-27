// Canonical root-scroll module. Deep mode owns its own component tree.
if (location.pathname.replace(/\/$/, '') === '/projects/godbot' && !new URLSearchParams(location.search).has('territory')) {
  const source = '/assets/art-is-you/';
  try {
    const response = await fetch(source + 'godbot-seven-module.html?v=release-20260926');
    if (!response.ok) throw new Error(`Bogobot Seven Territories: HTTP ${response.status}`);
    const documentSource = new DOMParser().parseFromString(await response.text(), 'text/html');
    const frozenModule = documentSource.querySelector('#seven-module');
    if (!frozenModule?.querySelector('.seven-bridge') || !frozenModule.querySelector('.seven-workspace')) throw new Error('Canonical module markup missing');
    await new Promise((resolve, reject) => {
      if (document.body.dataset.projectLowerFinalized === 'godbot') return resolve();
      const observer = new MutationObserver(() => {
        if (document.body.dataset.projectLowerFinalized === 'godbot') { observer.disconnect(); clearTimeout(timer); resolve(); }
      });
      observer.observe(document.body, { attributes: true, attributeFilter: ['data-project-lower-finalized'] });
      const timer = setTimeout(() => { observer.disconnect(); reject(new Error('Production root did not initialize')); }, 10000);
    });
    const style = document.createElement('link');
    style.rel = 'stylesheet'; style.href = source + 'godbot-seven-selector.css?v=canon-type-parity2-20260927';
    await new Promise((resolve, reject) => { style.onload = resolve; style.onerror = () => reject(new Error('Canonical module stylesheet unavailable')); document.head.append(style); });
    const primary = document.querySelector('.ay-project-primary--godbot');
    const productionModule = document.importNode(frozenModule, true);
    primary.insertAdjacentElement('afterend', productionModule);
    await import('/assets/art-is-you/godbot-seven-selector.js?v=canon-group-20260927');
    if (productionModule.dataset.ready !== 'true' || productionModule.querySelectorAll('.seven-cta[href]').length !== 7) throw new Error('Canonical module failed its mounting contract');
    // Remove only mounted root roles after successful installation. Deep URLs keep their Reader.
    const root = primary.closest('.ay-project-top');
    root.querySelectorAll('.ay-godbot-history-network,.ay-godbot-authorial-canon,.ay-godbot-quantum-threshold,.ay-godbot-reading-protocol,.ay-godbot-archive-reader,.ay-godbot-enter').forEach(section => section.remove());
    document.body.dataset.godbotSevenProduction = 'ready';
  } catch (error) {
    // Retain the recoverable original long scroll if canonical module loading fails.
    document.querySelector('#seven-module')?.remove();
    console.error('BOGOBOT production migration:', error);
  }
}
