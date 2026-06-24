document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.reveal');

  // Initialize stagger offsets inside card grids and process lists
  const gridSelectors = [
    '.why-grid',
    '.process-grid',
    '.ai-solutions-grid',
    '.industry-grid',
    '.services-grid',
    '.about-grid',
    '.deliverables-grid',
    '.why-grid-2col'
  ];

  gridSelectors.forEach((selector) => {
    const containers = document.querySelectorAll(selector);
    containers.forEach((container) => {
      const children = container.querySelectorAll(':scope > .reveal, :scope > * > .reveal');
      children.forEach((child, index) => {
        child.style.setProperty('--reveal-index', index);
      });
    });
  });

  if (!prefersReducedMotion && revealTargets.length) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealTargets.forEach((element) => observer.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add('active'));
  }

  // Spotlight Hover Mouse Tracker
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (!isTouchDevice) {
    const cardSelectors = [
      '.why-card',
      '.process-card',
      '.why-item',
      '.ai-solution-card',
      '.industry-card',
      '.service-card',
      '.about-card',
      '.deliverable-card'
    ];

    cardSelectors.forEach((selector) => {
      const cards = document.querySelectorAll(selector);
      cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          window.requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          });
        });
      });
    });
  }

  const logo = document.querySelector('.logo-mark');
  if (logo) {
    logo.addEventListener('mouseenter', () => logo.classList.add('logo-hover'));
    logo.addEventListener('mouseleave', () => logo.classList.remove('logo-hover'));
  }
});
