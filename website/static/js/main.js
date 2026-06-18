
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

    // Infinity Animation (Home Page Only)
    const path = document.getElementById("infinityCurve");
    const orb = document.querySelector(".orb");

    if(path && orb){

        console.log("Infinity Animation Loaded");

        const length = path.getTotalLength();

        let progress = 0;

        function animateOrb(){

            const point = path.getPointAtLength(progress);

            orb.style.left = (point.x - 7) + "px";
            orb.style.top = (point.y - 7) + "px";

            progress += 0.88;

            if(progress >= length){
                progress = 0;
            }

            requestAnimationFrame(animateOrb);
        }

        animateOrb();

    }

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
/* ==========================================
   Scroll Reveal Animation
========================================== */

function revealOnScroll() {

    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 50) {
            element.classList.add('active');
        }

    });

}

/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.add('active');

            }

        });

    },

    {
        threshold:0.15
    }

);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

window.addEventListener('load', revealOnScroll);
