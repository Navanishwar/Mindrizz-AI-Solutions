/* ================================================
   MINDRIZZ PREMIUM ANIMATIONS
   Advanced scroll animations, 3D interactions,
   and premium UI enhancements
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ================================================
    // 1. BRAND SYMBOL - Brain + Lightning Shake
    // ================================================

    const brandSymbol = document.querySelector('.brand-symbol');
    
    if (brandSymbol) {
        // Start pulse animation
        brandSymbol.classList.add('pulse');
        
        // Shake on click - creates the "rizz" feeling
        brandSymbol.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.remove('shake');
            // Force reflow for animation restart
            void this.offsetWidth;
            this.classList.add('shake');
            
            // Add energy burst effect
            this.style.transition = 'transform 0.1s ease';
            this.style.transform = 'scale(1.15)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            setTimeout(() => {
                this.classList.remove('shake');
                this.style.transition = '';
            }, 700);
        });
        
        // Interactive hover - pause pulse, add energy
        brandSymbol.addEventListener('mouseenter', function() {
            this.classList.remove('pulse');
            this.style.transform = 'scale(1.08) rotate(-3deg)';
        });
        
        brandSymbol.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            setTimeout(() => {
                this.classList.add('pulse');
            }, 300);
        });
    }

    // ================================================
    // 2. CONTINUOUS SCROLL REVEAL (Re-appears on scroll)
    // ================================================

    const revealElements = document.querySelectorAll('.reveal-premium, .reveal-left, .reveal-right, .reveal-scale');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);
            } else {
                // Remove active class to allow re-animation when scrolling back
                // This creates the continuous dynamic feel
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach((el, index) => {
        if (!el.dataset.delay) {
            const staggerIndex = parseInt(el.dataset.staggerIndex) || index;
            el.dataset.delay = (staggerIndex * 60) % 360;
        }
        revealObserver.observe(el);
    });

    // ================================================
    // 3. 3D ICON TILT
    // ================================================

    const icon3dElements = document.querySelectorAll('.industry-icon-3d');

    icon3dElements.forEach((icon) => {
        icon.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((centerX - x) / centerX) * 10;
            
            const emoji = this.querySelector('.icon-emoji');
            
            this.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
            
            if (emoji) {
                emoji.style.transform = `scale(1.08) rotate(${rotateY * 0.4}deg)`;
            }
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg) scale(1)';
            const emoji = this.querySelector('.icon-emoji');
            if (emoji) {
                emoji.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // ================================================
    // 4. PREMIUM NAVBAR
    // ================================================

    const nav = document.querySelector('.nav-premium');
    let lastScrollY = window.scrollY;
    let hideTimeout;
    
    if (nav) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 30) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Hide on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 120) {
                nav.style.transform = 'translateY(-100%)';
                nav.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                clearTimeout(hideTimeout);
            } else if (currentScrollY < lastScrollY) {
                nav.style.transform = 'translateY(0)';
                clearTimeout(hideTimeout);
            }
            
            lastScrollY = currentScrollY;
        }, { passive: true });
        
        // Show on mouse near top
        let mouseNearTop = false;
        document.addEventListener('mousemove', (e) => {
            if (e.clientY < 50 && nav.style.transform === 'translateY(-100%)') {
                if (!mouseNearTop) {
                    mouseNearTop = true;
                    nav.style.transform = 'translateY(0)';
                    
                    clearTimeout(hideTimeout);
                    hideTimeout = setTimeout(() => {
                        if (window.scrollY > 120) {
                            nav.style.transform = 'translateY(-100%)';
                        }
                        mouseNearTop = false;
                    }, 3000);
                }
            } else if (e.clientY > 100) {
                mouseNearTop = false;
            }
        });
    }

    // ================================================
    // 5. BUTTON RIPPLE
    // ================================================

    const premiumButtons = document.querySelectorAll('.btn-premium');

    premiumButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                transform: scale(0);
                animation: rippleAnim 0.6s ease-out forwards;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 700);
        });
    });

    // Ripple keyframes
    if (!document.getElementById('ripple-keyframes')) {
        const style = document.createElement('style');
        style.id = 'ripple-keyframes';
        style.textContent = `
            @keyframes rippleAnim {
                from { transform: scale(0); opacity: 1; }
                to { transform: scale(3); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // ================================================
    // 6. KEYBOARD ACCESSIBILITY
    // ================================================

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const mobileMenu = document.querySelector('.nav-links.active');
            const menuToggle = document.querySelector('.menu-toggle');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                if (menuToggle) menuToggle.innerHTML = '☰';
            }
        }
    });

    // ================================================
    // 7. CONSOLE BRANDING
    // ================================================

    console.log('%c🧠 MindRizz AI', 'font-size: 22px; font-weight: bold; color: #00f5ff;');
    console.log('%c⚡ Premium Enterprise AI Solutions', 'font-size: 14px; color: #7b61ff;');
    console.log('%c✨ Premium UI Enhancements Loaded', 'font-size: 12px; color: #00f5ff;');

    console.log('✅ Premium animations loaded successfully');
});