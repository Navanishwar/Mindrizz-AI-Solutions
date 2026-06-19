document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.reveal');

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
        threshold: 0.18,
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
