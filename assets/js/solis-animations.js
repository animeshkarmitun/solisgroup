/* ================================================
   Solis Group - Animation Engine
   Lightweight scroll reveal + button ripple.
   No dependencies beyond vanilla JS.
   ================================================ */

(function () {
    'use strict';

    /* -----------------------------------------------
       1. SCROLL REVEAL  (IntersectionObserver)
       Auto-detects elements with class .reveal,
       .reveal-left, .reveal-right, .reveal-scale
       and adds .revealed when they scroll into view.
       ----------------------------------------------- */
    function initScrollReveal() {
        // Bail out for reduced-motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function (el) {
                el.classList.add('revealed');
            });
            return;
        }

        var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        if (!revealElements.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // Fire once only
                }
            });
        }, {
            threshold: 0.12,       // Trigger when 12% visible
            rootMargin: '0px 0px -40px 0px'  // Slight offset from bottom
        });

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    }


    /* -----------------------------------------------
       2. AUTO-APPLY REVEAL CLASSES
       Automatically adds .reveal to major sections
       so we don't need to edit every HTML file.
       ----------------------------------------------- */
    function autoApplyReveals() {
        // Section titles get reveal
        document.querySelectorAll('.section-title').forEach(function (el) {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
            }
        });

        // What We Do cards - stagger
        var wwdGrid = document.querySelector('.what-we-do-grid');
        if (wwdGrid) {
            wwdGrid.classList.add('reveal-stagger');
            wwdGrid.querySelectorAll('.what-we-do-item').forEach(function (el) {
                if (!el.classList.contains('reveal')) {
                    el.classList.add('reveal');
                }
            });
        }

        // Platform cards - stagger
        var platformRow = document.querySelector('.platform-highlights .row');
        if (platformRow) {
            platformRow.classList.add('reveal-stagger');
            platformRow.querySelectorAll('[class*="col"]').forEach(function (el) {
                if (!el.classList.contains('reveal')) {
                    el.classList.add('reveal');
                }
            });
        }

        // Vision banner
        document.querySelectorAll('.vision-banner').forEach(function (el) {
            if (!el.classList.contains('reveal-scale')) {
                el.classList.add('reveal-scale');
            }
        });

        // CTA section
        document.querySelectorAll('.cta-section, .cta-area').forEach(function (el) {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
            }
        });

        // Footer columns
        document.querySelectorAll('.footer .col-lg-3, .footer .col-lg-4, .footer .col-md-6').forEach(function (el) {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
            }
        });

        // Inner page content sections
        document.querySelectorAll('.about-section, .focus-section, .how-section, .values-grid, .company-hero-detail, .leadership-grid, .partner-benefits, .insights-grid, .contact-form-section').forEach(function (el) {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
            }
        });

        // Generic content blocks on inner pages
        document.querySelectorAll('.content-block, .info-block').forEach(function (el) {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
            }
        });
    }


    /* -----------------------------------------------
       3. BUTTON RIPPLE EFFECT
       Adds a ripple animation on click for buttons
       with class .btn-ripple or .primary-link-btn.
       ----------------------------------------------- */
    function initRippleEffect() {
        document.addEventListener('click', function (e) {
            var btn = e.target.closest('.primary-link-btn, .button');
            if (!btn) return;

            // Create ripple element
            var ripple = document.createElement('span');
            ripple.classList.add('ripple-circle');

            var rect = btn.getBoundingClientRect();
            var size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

            // Ensure button has the required overflow style
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';

            btn.appendChild(ripple);

            // Remove after animation completes
            ripple.addEventListener('animationend', function () {
                ripple.remove();
            });
        });
    }


    /* -----------------------------------------------
       4. PARALLAX HERO (subtle)
       Moves the hero banner background on scroll
       for a depth effect.
       ----------------------------------------------- */
    function initHeroParallax() {
        var banner = document.querySelector('.banner');
        if (!banner) return;

        // Throttle scroll handler
        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    var scrollY = window.pageYOffset;
                    // Only apply within the hero section height
                    if (scrollY < window.innerHeight * 1.2) {
                        banner.style.backgroundPositionY = (scrollY * 0.3) + 'px';
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }


    /* -----------------------------------------------
       5. NAVBAR ACTIVE STATE
       Highlights the current page's nav link.
       ----------------------------------------------- */
    function setActiveNav() {
        var path = window.location.pathname;
        document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
            var href = link.getAttribute('href');
            if (href && path.indexOf(href.replace(/^\.\.\//, '').replace(/^\.\//, '')) > -1 && href !== '#') {
                link.closest('.nav-item').classList.add('active');
            }
        });
    }


    /* -----------------------------------------------
       INIT — run everything on DOM ready
       ----------------------------------------------- */
    function init() {
        autoApplyReveals();
        initScrollReveal();
        initRippleEffect();
        initHeroParallax();
        setActiveNav();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
