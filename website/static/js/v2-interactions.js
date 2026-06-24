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

  const logo = document.querySelector('.logo-mark');
  if (logo) {
    logo.addEventListener('mouseenter', () => logo.classList.add('logo-hover'));
    logo.addEventListener('mouseleave', () => logo.classList.remove('logo-hover'));
  }
});
