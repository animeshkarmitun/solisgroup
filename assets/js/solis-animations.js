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
       6. MAGNETIC BUTTON EFFECT (P3)
       Buttons subtly follow the cursor when nearby
       using GSAP for smooth elastic movement.
       ----------------------------------------------- */
    function initMagneticButtons() {
        // Only on desktop with a mouse
        if (window.matchMedia('(hover: none)').matches) return;
        if (typeof gsap === 'undefined') return;

        // Auto-apply magnetic class to CTA buttons
        document.querySelectorAll('.primary-link-btn, .button').forEach(function (btn) {
            btn.classList.add('magnetic-btn');
        });

        var magneticBtns = document.querySelectorAll('.magnetic-btn');
        if (!magneticBtns.length) return;

        magneticBtns.forEach(function (btn) {
            var strength = 25; // pixels of maximum pull

            btn.addEventListener('mousemove', function (e) {
                var rect = btn.getBoundingClientRect();
                var x = e.clientX - rect.left - rect.width / 2;
                var y = e.clientY - rect.top - rect.height / 2;

                // Update CSS custom properties for the glow gradient
                var percentX = ((e.clientX - rect.left) / rect.width * 100);
                var percentY = ((e.clientY - rect.top) / rect.height * 100);
                btn.style.setProperty('--mouse-x', percentX + '%');
                btn.style.setProperty('--mouse-y', percentY + '%');

                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.2,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', function () {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: 'elastic.out(1.2, 0.4)'
                });
            });
        });
    }


    /* -----------------------------------------------
       7. ENHANCED PRELOADER (P3)
       Overrides the template's basic fadeOut with
       a curtain-wipe reveal animation.
       ----------------------------------------------- */
    function initEnhancedPreloader() {
        var loader = document.querySelector('.loader-wrapper');
        if (!loader) return;

        // Override the template's jQuery fadeOut
        // by adding our .loaded class instead
        window.addEventListener('load', function () {
            setTimeout(function () {
                loader.classList.add('loaded');

                // After curtain animation completes, hide entirely
                setTimeout(function () {
                    loader.style.visibility = 'hidden';
                    loader.style.pointerEvents = 'none';
                }, 1200);
            }, 300); // slight delay for smoothness
        });
    }


    /* -----------------------------------------------
       8. FILM GRAIN INJECTION (P3)
       Adds a subtle animated noise overlay to the
       hero banner for atmospheric depth.
       ----------------------------------------------- */
    function initFilmGrain() {
        var banner = document.querySelector('.banner');
        if (!banner) return;

        // Ensure banner has relative positioning
        if (getComputedStyle(banner).position === 'static') {
            banner.style.position = 'relative';
        }

        var grain = document.createElement('div');
        grain.classList.add('hero-grain');
        grain.setAttribute('aria-hidden', 'true');
        banner.appendChild(grain);
    }


    /* -----------------------------------------------
       9. CUSTOM CURSOR DOT (P3)
       A small dot that follows the mouse and expands
       when hovering over interactive elements.
       Desktop only.
       ----------------------------------------------- */
    function initCustomCursor() {
        // Only on desktop with hover capability
        if (window.matchMedia('(hover: none)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var dot = document.createElement('div');
        dot.classList.add('cursor-dot');
        document.body.appendChild(dot);

        var mouseX = 0, mouseY = 0;
        var dotX = 0, dotY = 0;
        var isVisible = false;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isVisible) {
                dot.classList.add('visible');
                isVisible = true;
            }
        });

        document.addEventListener('mouseleave', function () {
            dot.classList.remove('visible');
            isVisible = false;
        });

        // Expand on interactive elements
        var interactiveSelectors = 'a, button, .button, .primary-link-btn, .nav-link, .card-link, input, textarea, select';

        document.addEventListener('mouseover', function (e) {
            if (e.target.closest(interactiveSelectors)) {
                dot.classList.add('expanded');
            }
        });

        document.addEventListener('mouseout', function (e) {
            if (e.target.closest(interactiveSelectors)) {
                dot.classList.remove('expanded');
            }
        });

        // Smooth follow animation
        function animateCursor() {
            // Lerp for smooth trailing
            dotX += (mouseX - dotX) * 0.15;
            dotY += (mouseY - dotY) * 0.15;

            dot.style.left = dotX + 'px';
            dot.style.top = dotY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    }


    /* -----------------------------------------------
       10. MULTI-LAYER HERO PARALLAX (P2)
       Text moves at a different rate than the
       background, creating depth layering.
       ----------------------------------------------- */
    function initMultiLayerParallax() {
        var banner = document.querySelector('.banner');
        var bannerContent = document.querySelector('.banner .overlay .banner-section');
        if (!banner || !bannerContent) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    var scrollY = window.pageYOffset;
                    var bannerHeight = banner.offsetHeight;

                    if (scrollY < bannerHeight * 1.2) {
                        // Background moves slower (already handled by initHeroParallax)
                        // Text content moves at a faster rate for depth separation
                        bannerContent.style.transform = 'translateY(' + (scrollY * 0.12) + 'px)';

                        // Slight opacity fade as user scrolls past
                        var opacity = 1 - (scrollY / bannerHeight) * 0.6;
                        bannerContent.style.opacity = Math.max(opacity, 0.2);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }


    /* -----------------------------------------------
       11. GSAP SMOOTH SCROLL FOR ANCHORS (P2)
       Intercepts anchor clicks and scrolls smoothly
       with GSAP easing instead of native CSS jump.
       ----------------------------------------------- */
    function initSmoothAnchorScroll() {
        if (typeof gsap === 'undefined') return;

        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#' || !targetId) return;

                var targetEl = document.querySelector(targetId);
                if (!targetEl) return;

                e.preventDefault();

                gsap.to(window, {
                    scrollTo: {
                        y: targetEl,
                        offsetY: 80 // account for sticky header
                    },
                    duration: 1,
                    ease: 'power3.inOut'
                });
            });
        });
    }


    /* ===============================================
       TEXT EFFECTS — Premium Typography Motion
       =============================================== */


    /* -----------------------------------------------
       12. GRADIENT SHIMMER (auto-apply)
       Adds the .text-shimmer class to the hero
       heading for a metallic light sweep.
       ----------------------------------------------- */
    function initTextShimmer() {
        // Apply to the main hero heading
        var heroHeading = document.querySelector('.banner .heading');
        if (heroHeading) {
            heroHeading.classList.add('text-shimmer');
        }

        // Apply single-shimmer to section titles on scroll
        var sectionTitles = document.querySelectorAll('.section-title .title');
        sectionTitles.forEach(function (title) {
            title.classList.add('text-shimmer-once');
        });
    }


    /* -----------------------------------------------
       13. WORD-BY-WORD REVEAL
       Splits text of .title elements into individual
       word <span> wrappers and reveals them one by one
       on scroll via IntersectionObserver.
       ----------------------------------------------- */
    function initWordReveal() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Target section title headings (not the hero — that has its own entrance)
        var titles = document.querySelectorAll('.section-title .title');
        if (!titles.length) return;

        titles.forEach(function (el) {
            // Skip if already processed
            if (el.classList.contains('word-reveal')) return;

            // Get the text content, strip extra whitespace
            var text = el.textContent.replace(/\s+/g, ' ').trim();
            var words = text.split(' ');

            // Build the word-wrapped HTML
            var html = words.map(function (word) {
                return '<span class="word-wrap"><span class="word">' + word + '</span></span>';
            }).join(' ');

            el.innerHTML = html;
            el.classList.add('word-reveal');
        });

        // Observer to trigger reveal
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -30px 0px'
        });

        document.querySelectorAll('.word-reveal').forEach(function (el) {
            observer.observe(el);
        });
    }


    /* -----------------------------------------------
       14. KEYWORD HIGHLIGHT WIPE
       Auto-detects <strong>/<b> tags in body text
       and adds a gold underline that wipes in on scroll.
       ----------------------------------------------- */
    function initKeywordHighlight() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Target specific content areas
        var contentAreas = document.querySelectorAll(
            '.what-we-do-item p, .vision-banner p, .vision-mission p, ' +
            '.cta-section p, .about-content p, .company-hero-detail p'
        );

        var highlights = [];

        contentAreas.forEach(function (el) {
            // Find <strong> and <b> elements inside
            var strongTags = el.querySelectorAll('strong, b');
            strongTags.forEach(function (tag) {
                if (!tag.classList.contains('text-highlight')) {
                    tag.classList.add('text-highlight');
                    highlights.push(tag);
                }
            });
        });

        // Also apply to specific keywords via data attribute
        document.querySelectorAll('[data-highlight]').forEach(function (el) {
            if (!el.classList.contains('text-highlight')) {
                el.classList.add('text-highlight');
                highlights.push(el);
            }
        });

        if (!highlights.length) return;

        // Observer to trigger highlight
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Small delay for cascading effect
                    setTimeout(function () {
                        entry.target.classList.add('highlighted');
                    }, 200);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -20px 0px'
        });

        highlights.forEach(function (el) {
            observer.observe(el);
        });
    }


    /* -----------------------------------------------
       15. BLUR-TO-FOCUS
       Applied to CTA section heading and
       vision banner title for cinematic reveal.
       ----------------------------------------------- */
    function initBlurFocus() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Auto-apply to specific elements
        var targets = document.querySelectorAll(
            '.cta-section h2, .vision-banner h2, .vision-banner h3'
        );

        targets.forEach(function (el) {
            if (el.classList.contains('blur-focus')) return;
            el.classList.add('blur-focus');
        });

        var blurElements = document.querySelectorAll('.blur-focus');
        if (!blurElements.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('focused');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });

        blurElements.forEach(function (el) {
            observer.observe(el);
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

        // P2+P3 features
        initMagneticButtons();
        initFilmGrain();
        initCustomCursor();
        initMultiLayerParallax();
        initSmoothAnchorScroll();

        // Text effects
        initTextShimmer();
        initWordReveal();
        initKeywordHighlight();
        initBlurFocus();
    }

    // Enhanced preloader must bind before window.load
    initEnhancedPreloader();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
