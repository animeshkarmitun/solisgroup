# Solis Group — Website

A strategic infrastructure and engagement platform operating across emerging and international markets.

## 🏗 Tech Stack

- **HTML5** + **Bootstrap 5** (responsive grid)
- **CSS**: `common.css`, `nav-2.css`, `footer-2.css`, `home-2.css` (template core) + `solis-overrides.css` (brand layer)
- **JS**: GSAP, ScrollTrigger, SplitText, Swiper, CounterUp, MagnificPopup, Metismenu
- **Fonts**: Marcellus (headings), Work Sans (nav/labels), Jost (body)

## 📁 File Structure

```
solisgroup/
├── index.html                        # Homepage
├── Solis-3-PNG.png                   # Source logo (high-res)
├── IMPLEMENTATION_PLAN.md            # Phased integration plan
│
├── assets/
│   ├── css/
│   │   ├── common.css                # Template base styles
│   │   ├── nav-2.css                 # Navbar styles
│   │   ├── footer-2.css             # Footer styles
│   │   ├── home-2.css               # Homepage section styles
│   │   └── solis-overrides.css      # ★ Solis brand overrides
│   ├── js/                           # All JS libraries + main.js
│   └── images/
│       ├── common/
│       │   ├── logo.png              # Solis logo (nav)
│       │   └── favicon.png
│       └── home/                     # Homepage section images
│
└── pages/
    ├── about/
    │   ├── index.html                # Who We Are
    │   └── leadership.html           # Nahar Khan bio
    ├── companies/
    │   ├── sec.html                  # Solis Engineering & Consulting
    │   ├── greymatter.html           # Greymatter intelligence
    │   ├── forum.html                # Solis Global Forum
    │   └── house-of-solis.html       # House of Solis (culture)
    ├── insights/
    │   └── index.html                # Intelligence briefings + newsletter
    ├── partner/
    │   └── index.html                # Partner With Us (6 audience cards)
    └── contact/
        └── index.html                # Contact form + info
```

## 🎨 Color Palette

| Token             | Value       | Usage                          |
|--------------------|-------------|--------------------------------|
| `--solis-body`     | `#001d21`   | Body background                |
| `--solis-primary`  | `#0e59f2`   | Buttons, links, interactive    |
| `--solis-accent`   | `#d4a017`   | Subtitles, gold highlights     |
| `--solis-dark`     | `#010d12`   | Deep background accents        |
| `--solis-gray`     | `#94a3b8`   | Body text, secondary           |
| `--solis-white`    | `#ffffff`   | Headings, primary text         |

## 📄 Pages

| Page                  | URL                                | Status |
|------------------------|------------------------------------|--------|
| Homepage               | `/index.html`                     | ✅ Done |
| About                  | `/pages/about/index.html`         | ✅ Done |
| Leadership             | `/pages/about/leadership.html`    | ✅ Done |
| SEC                    | `/pages/companies/sec.html`       | ✅ Done |
| Greymatter             | `/pages/companies/greymatter.html`| ✅ Done |
| Solis Global Forum     | `/pages/companies/forum.html`     | ✅ Done |
| House of Solis         | `/pages/companies/house-of-solis.html` | ✅ Done |
| Insights               | `/pages/insights/index.html`      | ✅ Done |
| Partner With Us        | `/pages/partner/index.html`       | ✅ Done |
| Contact                | `/pages/contact/index.html`       | ✅ Done |

## 🚀 Remaining Tasks

- [ ] Replace hero banner image (`assets/images/home/banner.png`) with Solis-specific imagery
- [ ] Add Nahar Khan's professional photo to leadership page
- [ ] Generate/add favicon from Solis logo
- [ ] Connect contact form to backend or service (e.g., Formspree, Netlify Forms)
- [ ] Connect newsletter form to email service (e.g., Mailchimp, ConvertKit)
- [ ] Add real LinkedIn URL to social links
- [ ] Add company-specific images to company pages
- [ ] Populate Insights page with actual articles when available
- [ ] SEO: Add Open Graph tags and structured data
- [ ] Performance: Optimize logo PNG, compress images
