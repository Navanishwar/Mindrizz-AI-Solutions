
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
const navLinks = document.querySelector('.nav-links');

if(menuToggle && navLinks){

    menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    if(navLinks.classList.contains('active')){

        menuToggle.innerHTML = '✕';

    }else{

        menuToggle.innerHTML = '☰';

    }

});

}
document.addEventListener('click', (event) => {

    if(
        navLinks.classList.contains('active') &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ){

        navLinks.classList.remove('active');

        menuToggle.innerHTML = '☰';

    }

});
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

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
window.addEventListener('load', revealOnScroll);
