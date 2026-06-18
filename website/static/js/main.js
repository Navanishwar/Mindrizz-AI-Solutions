
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

    });

}

/* Scroll Reveal Animation */

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

