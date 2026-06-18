/* ==========================================
   MINDRIZZ AI - MAIN JAVASCRIPT
   Original functionality preserved + Premium enhancements
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // SECTION 1: Button Hover Effect (Original)
    // ==========================================
    const button = document.querySelector(".btn");

    if(button){
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.08)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    }

    // ==========================================
    // SECTION 2: Success Modal Button (Original)
    // ==========================================
    const closeBtn = document.querySelector(".close-modal");

    if(closeBtn){
        closeBtn.addEventListener("click", () => {
            window.location.href = "/";
        });
    }

    // ==========================================
    // SECTION 3: Infinity Animation (Original)
    // ==========================================
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

    // ==========================================
    // SECTION 4: Mobile Navigation (Original)
    // ==========================================
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

    // ==========================================
    // SECTION 5: Scroll Reveal (Original)
    // ==========================================
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

    // ==========================================
    // SECTION 6: Scroll Reveal with Observer (Original)
    // ==========================================
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
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    window.addEventListener('load', revealOnScroll);

    // ==========================================
    // ==========================================
    // 🚀 PREMIUM ENHANCEMENTS (NEW - Added Below)
    // ==========================================
    // ==========================================

    // ==========================================
    // SECTION 7: Premium Navbar Scroll Effect
    // ==========================================
    const premiumNavbar = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    if(premiumNavbar){
        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            // Add shadow and background change on scroll
            if (currentScrollY > 50) {
                premiumNavbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.6)';
                premiumNavbar.style.background = 'rgba(5, 8, 22, 0.95)';
                premiumNavbar.style.borderBottom = '1px solid rgba(0, 245, 255, 0.08)';
            } else {
                premiumNavbar.style.boxShadow = 'none';
                premiumNavbar.style.background = 'rgba(5, 8, 22, 0.78)';
                premiumNavbar.style.borderBottom = '1px solid rgba(56, 189, 248, 0.08)';
            }

            // Optional: Hide navbar on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                // Scrolling down - hide
                premiumNavbar.style.transform = 'translateY(-100%)';
                premiumNavbar.style.transition = 'transform 0.3s ease';
            } else {
                // Scrolling up - show
                premiumNavbar.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // ==========================================
    // SECTION 8: Premium Button Ripple Effect
    // ==========================================
    const premiumButtons = document.querySelectorAll('.btn-premium, .btn-cta, .icon-3d');

    premiumButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // Make sure button has position relative
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ==========================================
    // SECTION 9: Premium Card Hover Effects
    // ==========================================
    const premiumCards = document.querySelectorAll('.premium-card, .glass-card, .why-card, .process-card, .service-card, .about-card');

    premiumCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1)';
        });
    });

    // ==========================================
    // SECTION 10: 3D Icon Tilt Effect (Optional)
    // ==========================================
    const icon3dElements = document.querySelectorAll('.icon-3d');

    icon3dElements.forEach(icon => {
        icon.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // ==========================================
    // SECTION 11: Brand Symbol Pulse Enhancement
    // ==========================================
    const brandSymbols = document.querySelectorAll('.brand-symbol, .brand-glow');

    brandSymbols.forEach(symbol => {
        symbol.addEventListener('mouseenter', function() {
            this.style.animation = 'shake 0.6s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });

    // ==========================================
    // SECTION 12: Keyboard Accessibility
    // ==========================================
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape key
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '☰';
            }
        }
    });

    // ==========================================
    // SECTION 13: Performance & Console Branding
    // ==========================================
    console.log('%c🧠 MindRizz AI', 'font-size: 20px; font-weight: bold; color: #00f5ff;');
    console.log('%cPremium Enterprise AI Solutions', 'font-size: 14px; color: #7b61ff;');
    console.log('%c✨ Premium Enhancements Loaded', 'font-size: 12px; color: #00f5ff;');

    // Performance monitoring
    if ('performance' in window) {
        const perfData = window.performance.timing;
        if (perfData.loadEventEnd && perfData.navigationStart) {
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`%cPage Load Time: ${loadTime}ms`, 'color: rgba(255,255,255,0.5);');
        }
    }

});

// ==========================================
// CSS for Ripple Animation (injected dynamically)
// ==========================================
(function() {
    // Check if ripple style already exists
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            /* Ripple Animation */
            .ripple-effect {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            }

            @keyframes ripple-animation {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
})();

console.log('✅ main.js loaded successfully');