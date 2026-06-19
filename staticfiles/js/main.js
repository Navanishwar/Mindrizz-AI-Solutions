
document.addEventListener("DOMContentLoaded", () => {

    // Button Hover Effect
    const button = document.querySelector(".btn");

    if(button){

        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.08)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });

    }

    // Success Modal Button
    const closeBtn = document.querySelector(".close-modal");

    if(closeBtn){

        closeBtn.addEventListener("click", () => {

            // Redirect Home
            window.location.href = "/";

        });

    }

    // Removed continuous orb animation to eliminate layout-triggering style writes.

});

/* ==========================================
   Mobile Navigation
========================================== */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks   = document.querySelector('.nav-links');
const mainNav    = document.getElementById('main-nav');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
        if (
            navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    navLinks.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/* ==========================================
   Navbar scroll effect
========================================== */

if (mainNav) {
    const onScroll = () => mainNav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}
