# Solis Group — Website Content Integration Plan

## 📋 Executive Summary

The current site is built on the **ACnalys Business Consulting** Bootstrap 5 template (with GSAP animations, Swiper sliders). The template's structure, CSS framework, and JS libraries are solid and reusable — but **all content is generic placeholder text** (lorem ipsum, dummy company names, irrelevant services).

This plan outlines how to **gracefully replace every piece of content** with the provided Solis Group copy, restructure the navigation, create missing pages, and polish the design identity — all while preserving the existing animation/interaction framework.

---

## 🏗️ Current State Assessment

### What We Have
| Asset | Status |
|-------|--------|
| `index.html` | ✅ Full page with template content (ACnalys branding) |
| `home-2.html` | ✅ Alternate homepage layout |
| Bootstrap 5 CSS | ✅ `bootstrap.min.css` |
| Custom CSS | ✅ `common.css`, `nav-2.css`, `footer-2.css`, `home-2.css` |
| JS Libraries | ✅ GSAP, Swiper, ScrollTrigger, SplitText, CounterUp, MagnificPopup |
| `pages/` dirs | ⚠️ Empty subdirectories (about, blog, projects, services, team) |
| `components/` | ⚠️ Empty directory |
| `assets/images/` | ⚠️ All images are ACnalys template placeholders |
| Logo | ⚠️ ACnalys logo, needs Solis Group logo |

### What Needs to Change
1. **Brand Identity** — Logo, favicon, color palette, typography
2. **Navigation** — Completely restructured (5 tabs with dropdowns)
3. **Homepage** — All sections rewritten with Solis copy
4. **5 new pages** — About, Our Companies, Insights, Partner With Us, Contact
5. **Footer** — Replaced with Solis 4-column layout
6. **Images** — All template placeholders replaced with relevant visuals
7. **SEO metadata** — Title, meta descriptions, OG tags per page

---

## 🎨 Phase 0: Brand Foundation (Do First)

> *Everything else depends on these design tokens being set.*

### 0.1 — Logo & Favicon
- [ ] Obtain Solis Group logo (SVG preferred, PNG fallback)
- [ ] Create/obtain favicon (`assets/images/common/favicon.png`)
- [ ] Place logo at `assets/images/common/logo.png` (or `logo.svg`)

### 0.2 — Color Palette
Define Solis brand colors in `common.css` as CSS custom properties:

```css
:root {
  /* Primary — suggest a deep navy or charcoal for authority */
  --solis-primary: #1a2744;
  --solis-primary-light: #2a3f6e;
  
  /* Accent — suggest warm gold/amber for "Solis" (sun) */  
  --solis-accent: #c9a84c;
  --solis-accent-light: #e2c97d;
  
  /* Neutrals */
  --solis-dark: #0d1117;
  --solis-gray: #6b7280;
  --solis-light: #f4f5f7;
  --solis-white: #ffffff;
  
  /* Verticals (optional, for visual cards) */
  --solis-engineering: #2563eb;
  --solis-greymatter: #475569;
  --solis-forum: #7c3aed;
  --solis-house: #d97706;
}
```
> ⚡ **Note**: These colors are suggested. Confirm with stakeholder before proceeding.

### 0.3 — Typography
- [ ] Add Google Font: **Inter** (body) + **Playfair Display** or **DM Serif Display** (headings)
- [ ] Update `common.css` body/heading font-family declarations

### 0.4 — Create `assets/css/solis-overrides.css`
A new CSS file to override template colors without modifying the base `common.css` heavily:
- Button colors → Solis brand
- Card backgrounds
- Hero gradients
- Link hover states

---

## 📄 Phase 1: Navigation Overhaul

### 1.1 — Restructure Main Nav (in every page)

**Current nav**: Home (dropdown) → Pages (dropdown) → Features → Projects (dropdown) → Contact

**New nav structure**:
```
ABOUT (dropdown)          → Who We Are (about.html)
                          → Leadership (leadership.html)

OUR COMPANIES (dropdown)  → Solis Engineering & Consulting (sec.html)
                          → Greymatter (greymatter.html)
                          → Solis Global Forum (forum.html)
                          → House of Solis (house-of-solis.html)

INSIGHTS                  → insights.html (single page, no dropdown)

PARTNER WITH US           → partner.html (single page, no dropdown)

CONTACT US                → contact.html (single page, no dropdown)
```

### 1.2 — Files to Modify
- [ ] `index.html` — Update `<nav>` section (desktop + mobile offcanvas)
- [ ] Every new page — Include the same nav structure

### 1.3 — Remove
- Search modal (unless client wants search functionality later)
- "Get Started" button → Replace with **"Get In Touch"** linking to `contact.html`

---

## 🏠 Phase 2: Homepage (`index.html`)

### 2.1 — Hero/Banner Section (lines ~289–328)
**Replace**:
- `<p class="subject">Smart Business Consulting</p>` → Remove or replace with a subtle brand tag
- Main heading → **"Where Intelligence Meets Impact"**
- Subtext → Vision statement
- CTA button → **"Get In Touch"** → links to `contact.html`
- FOLLOW US social links → LinkedIn only (or remove)
- Background image → Generate/source a premium image (infrastructure/skyline/globe)

### 2.2 — "What We Do" Summary Section (replaces "About Us" grid, lines ~332–454)
**Replace** the 6-card "About Us" grid with a **4-point "What We Do" list**:
- Engineer energy, water, and climate infrastructure...
- Inform policy and investment decisions...
- Convene diplomats, officials, and sector leaders...
- Connect cultural institutions, artists...

Use an icon + short description layout (can reuse existing card structure).

### 2.3 — Platform Highlights (replaces "Solutions Today", lines ~488–578)
**Replace** with **4 visual cards** — the core verticals:

| Card | Title | Tagline | Link |
|------|-------|---------|------|
| 1 | Solis Engineering & Consulting | Infrastructure that works | `pages/companies/sec.html` |
| 2 | Greymatter powered by Solis Group | Intelligence for decision-makers | `pages/companies/greymatter.html` |
| 3 | Solis Global Forum | Where leaders convene | `pages/companies/forum.html` |
| 4 | House of Solis | Culture meets policy | `pages/companies/house-of-solis.html` |

Each card should have:
- An icon or background image
- Title + tagline + 2–3 line description (from the provided copy)
- "Learn More →" link

### 2.4 — Vision & Mission Section (replaces "Build Website" parallax, lines ~458–486)
- Replace the parallax banner text with **Vision** and **Mission** statements
- Keep the visual impact (gradient overlay, large typography)
- Remove brand logo slider (irrelevant client logos)

### 2.5 — Sections to REMOVE from Homepage
- [ ] **Industry Expert / Team grid** (lines ~582–756) — Not needed on homepage; leadership lives on About page
- [ ] **Project Completed counter** (lines ~760–782) — No project count data provided
- [ ] **Why Choose Us** (lines ~784–843) — Redundant with "What We Do"
- [ ] **Our Clients testimonial slider** (lines ~846–1055) — No testimonials provided
- [ ] **Our Office / Map** (lines ~1058–1100) — Contact info goes on Contact page
- [ ] **Latest News** (lines ~1102–1156) — Will be replaced or linked to Insights page

### 2.6 — Optional Homepage Addition: CTA Banner
Add a full-width CTA section before the footer:
- "Ready to partner with us?" 
- Button: **"Start a Conversation"** → `partner.html`

---

## 📄 Phase 3: Inner Pages (New Files)

### Page File Structure
```
solisgroup/
├── index.html                          ← Homepage
├── pages/
│   ├── about/
│   │   ├── index.html                  ← Who We Are + How We Work
│   │   └── leadership.html             ← Founder bio
│   ├── companies/
│   │   ├── index.html                  ← Our Companies overview
│   │   ├── sec.html                    ← Solis Engineering & Consulting
│   │   ├── greymatter.html             ← Greymatter
│   │   ├── forum.html                  ← Solis Global Forum
│   │   └── house-of-solis.html         ← House of Solis
│   ├── insights/
│   │   └── index.html                  ← Insights & Publications hub
│   ├── partner/
│   │   └── index.html                  ← Partner With Us
│   └── contact/
│       └── index.html                  ← Contact Us
```

### 3.1 — About Page (`pages/about/index.html`)
**Content sources**: "ABOUT SOLIS GROUP" section from the copy

**Sections**:
1. Page hero banner with title "About Solis Group"
2. **Who We Are** — Full paragraph from copy
3. **How We Work** — Paragraph + "Our Focus" bullet list:
   - Energy systems and climate infrastructure in Bangladesh
   - Regional policy intelligence for APAC investors and institutions
   - High-level diplomatic and cross-sector dialogue
   - Cultural exchange linking creativity with sustainable development
4. CTA: **"See Our Verticals"** → links to `pages/companies/index.html`

**Template basis**: Adapt from the existing about-us page structure in the template's `common.css` styles.

### 3.2 — Leadership Page (`pages/about/leadership.html`)
**Content sources**: "LEADERSHIP PAGE" section

**Sections**:
1. Page hero banner "Leadership"
2. Founder profile card:
   - Photo placeholder (need actual photo of Nahar Khan)
   - **Name**: Nahar Khan
   - **Title**: Founder & President, Solis Group
   - Full bio text (4 paragraphs from copy)
3. Optionally link to UNB / AsiaNet

**Template basis**: Adapt `team-details.html` layout from the template.

### 3.3 — Our Companies Overview (`pages/companies/index.html`)
**Content sources**: "OUR COMPANIES" header copy

**Sections**:
1. Page hero "Our Companies"
2. 4 vertical cards (same as homepage Platform Highlights but expanded):
   - Each with full description, "What We Deliver/Provide/Convene/Do" bullet lists
   - Individual CTA buttons per card
3. Each card links to its dedicated sub-page

### 3.4 — Individual Company Pages (4 pages)

#### `pages/companies/sec.html` — Solis Engineering & Consulting
- Hero with tagline "From blueprints to baseload"
- Service description paragraph
- **What We Deliver** bullet list (5 items)
- CTA: **"Discuss Your Project"** → `pages/contact/index.html`

#### `pages/companies/greymatter.html` — Greymatter
- Hero with tagline "Intelligence for decision-makers" 
- Description paragraph
- **What We Provide** bullet list (4 items)
- **Who We Serve** line
- CTA: **"Subscribe to Intelligence Briefings"** → newsletter signup or contact

#### `pages/companies/forum.html` — Solis Global Forum
- Hero with tagline "Strategic dialogue for leaders"
- Description paragraph
- **What We Convene** bullet list (4 items)
- **Recent Topics** line
- CTA: **"Request an Invitation"** → contact form

#### `pages/companies/house-of-solis.html` — House of Solis
- Hero with tagline "Where art informs action"
- Description paragraph
- **What We Do** bullet list (4 items)
- CTA: **"Explore Collaborations"** → contact form

### 3.5 — Insights Page (`pages/insights/index.html`)
**Content sources**: "TAB 3: INSIGHTS & PUBLICATIONS"

**Sections**:
1. Hero: "Regional Intelligence. Delivered."
2. **What You'll Find** section:
   - Weekly media digests
   - Policy analysis
   - Long-form research
   - Event recaps
3. Content type tags/filter (placeholder for future blog integration):
   - Blog posts, Policy briefs, Market analysis, Event recaps, Research reports
4. Newsletter signup form
5. CTA: **"Sign up for our newsletter"**

> **Note**: This is a placeholder page. Actual content (blog posts, reports) would require a CMS or manual HTML additions later.

### 3.6 — Partner With Us Page (`pages/partner/index.html`)
**Content sources**: "TAB 4: PARTNER WITH US"

**Sections**:
1. Hero: "Let's Build Something"
2. Intro paragraph
3. **4 audience segments** (accordion or grid cards):
   - For Infrastructure Investors
   - For Institutions & Corporates
   - For Diplomatic & Multilateral Organizations
   - For Cultural & Academic Institutions
4. CTA: **"Start a Conversation"** → contact form or mailto

### 3.7 — Contact Page (`pages/contact/index.html`)
**Content sources**: "CONTACT" section

**Sections**:
1. Hero: "Contact Us" or "Get In Touch"
2. Contact details:
   - Email: `business@solisgroup.ltd`
   - Phone: `+65 8427 2692` / `+880 1713 004600`
3. Contact form (name, email, subject, message)
4. Location note: Singapore / Dhaka
5. Optional: Embedded Google Map for both locations

---

## 🦶 Phase 4: Footer (All Pages)

### 4.1 — Replace Footer Content (lines ~1159–1347 in `index.html`)

**New 4-column layout**:

| Column 1: Quick Links | Column 2: Services | Column 3: Resources | Column 4: Connect |
|---|---|---|---|
| About Us | Infrastructure Engineering | Newsletter Signup | LinkedIn |
| Our Companies | Media Intelligence | Privacy Policy | Email |
| Insights | Strategic Forums | Terms of Service | Location (SG/Dhaka) |
| Contact | Cultural Programming | | |

### 4.2 — Footer Bottom Bar
- Copyright: `© 2026 Solis Group. All Rights Reserved.`
- Remove "Website_Stock" attribution or replace
- Remove "Setting & privacy", "Faqs", "Support" links → replace with Privacy Policy, Terms

### 4.3 — Footer Component
Since the footer is identical across all pages, consider:
- Create `components/footer.html` as a reference
- Use JavaScript `fetch()` to include it dynamically, OR
- Manually paste into each page (simpler for a static site)

---

## 🖼️ Phase 5: Visual Assets

### 5.1 — Images to Generate/Source
Each needs to feel premium, professional, and relevant to infrastructure/policy.

| Image | Usage | Style |
|-------|-------|-------|
| Hero background | Homepage banner | Dramatic skyline, infrastructure, or abstract globe |
| SEC card visual | Homepage + company page | Engineering/construction imagery |
| Greymatter card visual | Homepage + company page | Data/analytics/monitoring feel |
| Forum card visual | Homepage + company page | Roundtable/conference imagery |
| House of Solis card visual | Homepage + company page | Art gallery/cultural exchange |
| Nahar Khan portrait | Leadership page | Professional headshot |
| About page hero | About page banner | Abstract or office setting |
| Contact page hero | Contact page banner | Warm, inviting |
| Insights page hero | Insights page banner | Data/intelligence theme |
| Partner page hero | Partner page banner | Handshake/collaboration |
| Solis Group logo | Nav + footer | Brand logo |
| Favicon | Browser tab | Small brand icon |

### 5.2 — Image Directories
```
assets/images/
├── common/         ← Logo, favicon, shared icons
├── home/           ← Homepage hero, card visuals
├── about/          ← About + leadership page images
├── companies/      ← Individual company page heroes
├── insights/       ← Insights page hero
├── partner/        ← Partner page hero
└── contact/        ← Contact page hero
```

---

## 🔍 Phase 6: SEO & Meta

### Per-Page Meta Tags

| Page | Title | Meta Description |
|------|-------|-----------------|
| Home | Solis Group — Where Intelligence Meets Impact | Strategic infrastructure and engagement platform across emerging and international markets. |
| About | About Solis Group — Who We Are | Infrastructure development, strategic intelligence, and high-level convening for emerging markets. |
| Leadership | Leadership — Nahar Khan | Founder & President of Solis Group, leading strategy across infrastructure and intelligence. |
| Our Companies | Our Companies — Solis Group | Four verticals: Engineering, Intelligence, Strategic Forums, and Cultural Exchange. |
| SEC | Solis Engineering & Consulting | Infrastructure projects from feasibility to commissioning across Bangladesh. |
| Greymatter | Greymatter — Intelligence for Decision-Makers | Real-time media monitoring, policy analysis, and strategic research. |
| Forum | Solis Global Forum — Where Leaders Convene | Roundtables and symposia for diplomats, policymakers, and regional experts. |
| House of Solis | House of Solis — Culture Meets Policy | Exhibitions, artist residencies, and cultural exchanges bridging art with diplomacy. |
| Insights | Insights & Publications — Solis Group | Regional intelligence, policy briefs, market analysis for South Asia. |
| Partner | Partner With Us — Solis Group | Infrastructure investment, intelligence, diplomatic engagement, and cultural collaboration. |
| Contact | Contact Solis Group | Get in touch — Singapore and Dhaka offices. |

---

## 📐 Implementation Order (Recommended)

### Sprint 1: Foundation (Estimated: 1 session)
1. ✅ Phase 0 — Brand foundation (colors, fonts, CSS overrides)
2. ✅ Phase 1 — Navigation restructure
3. ✅ Phase 4 — Footer replacement
4. ✅ Phase 2 — Homepage content swap

### Sprint 2: Inner Pages (Estimated: 2 sessions)
5. Phase 3.1 — About page
6. Phase 3.2 — Leadership page
7. Phase 3.3 — Our Companies overview
8. Phase 3.4 — 4 Individual company pages

### Sprint 3: Remaining Pages + Polish (Estimated: 1–2 sessions)
9. Phase 3.5 — Insights page
10. Phase 3.6 — Partner With Us page
11. Phase 3.7 — Contact page
12. Phase 5 — Image generation/sourcing
13. Phase 6 — SEO metadata across all pages

### Sprint 4: Quality Assurance
14. Cross-browser testing
15. Mobile responsiveness check
16. Broken link audit
17. Performance optimization (image compression, lazy loading)
18. Accessibility (alt text, ARIA labels, keyboard navigation)

---

## ⚠️ Key Decisions Needed Before Starting

1. **Logo**: Do you have a Solis Group logo file? (SVG/PNG)
2. **Founder Photo**: Do you have a professional photo of Nahar Khan?
3. **Color Palette**: Are the suggested navy + gold colors acceptable, or do you have specific brand colors?
4. **Domain**: Will the site be deployed at `solisgroup.ltd`?
5. **Newsletter Signup**: Should this be a functional form (Mailchimp, etc.) or placeholder?
6. **Contact Form**: Should it actually send emails (needs backend), or be a mailto link?
7. **Template Pages**: Should we keep `home-2.html` as an alternate layout option, or remove it?
8. **Blog/CMS**: Will Insights content be manually added as static HTML, or will a CMS be integrated later?

---

## 📊 Effort Estimate

| Phase | Files Created/Modified | Estimated Effort |
|-------|----------------------|-----------------|
| Phase 0 | 2–3 CSS files | 30 min |
| Phase 1 | Nav in all pages | 30 min |
| Phase 2 | `index.html` | 1–2 hours |
| Phase 3 | 10 new HTML pages | 3–4 hours |
| Phase 4 | Footer in all pages | 30 min |
| Phase 5 | ~12 images | 1–2 hours |
| Phase 6 | Meta tags in all pages | 30 min |
| **Total** | | **~7–10 hours** |

---

*Plan created: February 16, 2026*
*Template: ACnalys Business Consulting (Bootstrap 5)*
*Target: Solis Group Corporate Website*
