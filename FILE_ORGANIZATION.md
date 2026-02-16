# File Organization Guide - Solis Group Website

## 📂 Directory Structure

```
solisgroup/
│
├── 📄 index.html                    # Main homepage (formerly home-2.html)
├── 📄 home-2.html                   # Original home template (backup)
├── 📄 README.md                     # Project documentation
├── 📄 FILE_ORGANIZATION.md          # This file
│
├── 📁 assets/                       # All static assets
│   │
│   ├── 📁 css/                      # Stylesheets
│   │   ├── bootstrap.min.css        # Bootstrap framework
│   │   ├── common.css               # Shared styles
│   │   ├── footer-2.css             # Footer styles
│   │   ├── home-2.css               # Homepage styles
│   │   ├── magnific-popup.css       # Popup/modal styles
│   │   ├── nav-2.css                # Navigation styles
│   │   └── swiper.min.css           # Slider styles
│   │
│   ├── 📁 js/                       # JavaScript files
│   │   ├── bootstrap.bundle.min.js  # Bootstrap JS
│   │   ├── counter-up.js            # Counter animations
│   │   ├── gsap.min.js              # GSAP animations
│   │   ├── magnific-popup.js        # Popup functionality
│   │   ├── main.js                  # Main custom scripts
│   │   ├── metismenu.js             # Menu functionality
│   │   ├── scrolltigger.js          # Scroll animations
│   │   ├── split-text.js            # Text animation utilities
│   │   ├── split-type.js            # Text animation utilities
│   │   ├── swiper.js                # Slider functionality
│   │   ├── waw.js                   # Custom animations
│   │   └── waypoint.js              # Scroll waypoints
│   │
│   └── 📁 images/                   # Image assets (reorganized)
│       ├── 📁 common/               # ✨ NEW: Shared images
│       │   ├── logo.png             # Company logo
│       │   └── favicon.png          # Browser favicon
│       │
│       ├── 📁 home/                 # ✨ NEW: Homepage images (consolidated)
│       │   ├── banner.png
│       │   ├── build-website-bg.png
│       │   ├── build-website-client-logo-*.png
│       │   ├── choose-us-*.png
│       │   ├── client-*.png
│       │   ├── industry-expert-*.png
│       │   ├── latest-news-*.png
│       │   ├── solution-today.png
│       │   ├── meet-our-expert.png
│       │   ├── our-office.png
│       │   ├── project-completed.png
│       │   └── ...more homepage images
│       │
│       ├── 📁 about/                # ✨ NEW: About page images (ready for content)
│       ├── 📁 services/             # ✨ NEW: Services page images
│       ├── 📁 projects/             # ✨ NEW: Project showcase images
│       ├── 📁 blog/                 # ✨ NEW: Blog/news images
│       └── 📁 team/                 # ✨ NEW: Team member photos
│
├── 📁 pages/                        # ✨ NEW: Secondary pages (organized by category)
│   ├── 📁 about/                    # About-related pages
│   ├── 📁 blog/                     # Blog pages
│   ├── 📁 projects/                 # Project pages
│   ├── 📁 services/                 # Service pages
│   └── 📁 team/                     # Team pages
│
└── 📁 components/                   # ✨ NEW: Reusable HTML components
    ├── header.html (to be created)  # Navigation header
    ├── footer.html (to be created)  # Footer component
    └── modals.html (to be created)  # Modal components

```

---

## ✅ What's Been Done

### 1. **Image Reorganization**
   - ❌ **Before**: `assets/images/home-1/`, `home-2/`, `home-3/` (scattered)
   - ✅ **After**: Consolidated into organized folders:
     - `assets/images/common/` - Logo, favicon, shared assets
     - `assets/images/home/` - All homepage images in one place
     - Created category folders: about, services, projects, blog, team

### 2. **Homepage Setup**
   - ❌ **Before**: Main file was named `home-2.html`
   - ✅ **After**: 
     - Created `index.html` as the main entry point
     - Updated all image paths to new locations
     - Kept `home-2.html` as backup

### 3. **Directory Structure**
   - ✅ Created `pages/` directory for secondary pages
   - ✅ Created `components/` directory for reusable components
   - ✅ Created organized image subdirectories

---

## 🎯 Benefits of New Organization

### **Scalability**
- Easy to add new pages without cluttering the root directory
- Clear separation between different page categories

### **Maintainability**
- Common assets (logo, favicon) in one place
- Images organized by purpose/page
- Easier to find and update specific files

### **Performance**
- Logical grouping makes asset management easier
- Easier to implement lazy loading or optimization

### **Collaboration**
- Clear structure for team members
- Easy to understand where new files should go

---

## 📝 Next Steps (Recommended)

### 1. **Create Missing Pages**
The navigation menu references these pages that don't exist yet:
   - about-us.html
   - service.html & service-details.html
   - project-grid.html & project-details.html
   - team.html & team-details.html
   - blog-standard.html, blog-grid.html, blog-details.html
   - pricing-plan.html
   - faq.html
   - contact.html

### 2. **Extract Reusable Components**
Create these in the `components/` folder:
   - `header.html` - Navigation bar
   - `footer.html` - Footer section
   - `modals.html` - Search modal and other modals

### 3. **Organize CSS**
Consider splitting large CSS files:
   - `home.css` - Homepage-specific styles
   - `pages.css` - Shared page styles
   - `components.css` - Component-specific styles

### 4. **Image Optimization**
   - Compress images for better performance
   - Create WebP versions for modern browsers
   - Implement responsive images

---

## 🛠️ File Naming Conventions

### HTML Files
- **Root**: `index.html`, `contact.html`, `faq.html`
- **Pages**: `pages/category/page-name.html`
- **Format**: Lowercase with hyphens (kebab-case)

### CSS Files
- **Format**: `feature-name.css` or `component-name.css`
- **Examples**: `nav-2.css`, `footer-2.css`, `common.css`

### JavaScript Files
- **Format**: `library-name.js` or `feature-name.js`
- **Examples**: `main.js`, `counter-up.js`, `swiper.js`

### Images
- **Format**: `descriptive-name.png/jpg`
- **Location**: Store in categorized folders
- **Examples**: 
  - Common: `logo.png`, `favicon.png`
  - Home: `banner.png`, `choose-us-icon-1.png`

---

## 📌 Quick Reference

### Where to Put New Files

| File Type | Location | Example |
|-----------|----------|---------|
| New homepage | Root directory | `index.html` |
| About page | `pages/about/` | `pages/about/about-us.html` |
| Blog post | `pages/blog/` | `pages/blog/post-slug.html` |
| Team profile | `pages/team/` | `pages/team/member-name.html` |
| Logo/Favicon | `assets/images/common/` | `assets/images/common/logo.png` |
| Homepage image | `assets/images/home/` | `assets/images/home/banner.png` |
| Service image | `assets/images/services/` | `assets/images/services/consulting.png` |
| Custom CSS | `assets/css/` | `assets/css/custom.css` |
| Custom JS | `assets/js/` | `assets/js/custom.js` |

---

## 🔧 Updating Image Paths

If you need to update image paths in HTML files:

### Old Path Format:
```html
<img src="assets/images/home-2/logo.png" alt="Logo">
<link rel="icon" href="assets/images/favicons-2.png">
```

### New Path Format:
```html
<img src="assets/images/common/logo.png" alt="Logo">
<link rel="icon" href="assets/images/common/favicon.png">
```

### Homepage Images:
```html
<!-- Old -->
<img src="assets/images/home-2/banner.png">

<!-- New -->
<img src="assets/images/home/banner.png">
```

---

## 📞 Support

For questions about file organization:
1. Check this document first
2. Review README.md for project overview
3. Follow the naming conventions above
4. Keep related files grouped together

---

**Last Updated**: February 2026  
**Organization Version**: 1.0
