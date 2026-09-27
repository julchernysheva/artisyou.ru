(() => {
  const applyStep3H = () => {
    const route = location.pathname.replace(/\/+$/, '') || '/';
    if (route !== '/research/lab') return;

    const conclusionField = Array.from(
      document.querySelectorAll('.research-detail-evidence-frame .research-detail-protocol__field')
    ).find((field) => field.querySelector('.research-detail-protocol__label')?.textContent.trim().toLowerCase() === 'вывод');
    const conclusion = conclusionField?.querySelector('.research-detail-protocol__text');
    if (conclusion) {
      conclusion.textContent = 'Корпус показывает, что территория меняет проект через наблюдение, архив, поведение, материал и моделирование — операции, переводящие условия места в художественную форму.';
    }

    const firstFieldDocument = document.querySelector('.v16-story .v16-stage:first-child .v16-text');
    if (firstFieldDocument) {
      firstFieldDocument.textContent = 'Наблюдение за местом определяет будущую художественную форму.';
    }

    const positionParagraphs = Array.from(
      document.querySelectorAll('.lab-position__content > p:not(.lab-position__lead)')
    );
    const repeatedPosition = positionParagraphs.find((paragraph) =>
      paragraph.textContent.includes('Художественный объект здесь не является')
    );
    repeatedPosition?.remove();

    document.querySelectorAll('.lab-index__content > p').forEach((summary) => summary.remove());

    const disclosure = document.querySelector('.v16-full-details');
    const outputBar = document.querySelector('.lab-sectionbar#output');
    const output = document.querySelector('.lab-output');
    if (disclosure && outputBar && output && disclosure.contains(outputBar)) {
      disclosure.after(outputBar, output);
    }
    const outputLabel = outputBar?.querySelector('span');
    if (outputLabel) {
      outputLabel.textContent = 'РЕЗУЛЬТАТ';
    }

    document.documentElement.dataset.researchLabStep3h = 'applied';
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyStep3H, { once: true });
  } else {
    applyStep3H();
  }
})();
