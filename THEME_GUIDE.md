# Solis Group - Multi-Theme Architecture

## Overview

This project supports **multiple visual themes** using a **CSS Custom Properties** (variables) approach. The same HTML and JavaScript code is shared across all themes — only the CSS color tokens change.

## How It Works

### Architecture

```
assets/css/
├── themes/
│   ├── black.css          ← 🖤 Dark theme (current default)
│   └── white.css          ← 🤍 Light theme
├── solis-overrides.css    ← Layout & component styles (uses --solis-* variables)
├── nav-2.css              ← Template navbar (hardcoded — overridden by white.css)
├── footer-2.css           ← Template footer (hardcoded — overridden by white.css)
├── home-2.css             ← Template homepage
├── common.css             ← Template base
└── bootstrap.min.css      ← Framework
```

### CSS Load Order (in every HTML file)

```html
<!-- 1. Vendor / Template CSS -->
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/nav-2.css">
<link rel="stylesheet" href="assets/css/footer-2.css">
<link rel="stylesheet" href="assets/css/home-2.css">

<!-- 2. Active Theme (defines all --solis-* CSS variables) -->
<link rel="stylesheet" href="assets/css/themes/black.css" id="theme-stylesheet">

<!-- 3. Solis Overrides (consumes --solis-* variables for layout/components) -->
<link rel="stylesheet" href="assets/css/solis-overrides.css">
```

## Switching Themes

### Method 1: Change the HTML link (Static)

In every HTML file, change the theme stylesheet:

```html
<!-- Dark theme (default) -->
<link rel="stylesheet" href="assets/css/themes/black.css" id="theme-stylesheet">

<!-- Light theme -->
<link rel="stylesheet" href="assets/css/themes/white.css" id="theme-stylesheet">
```

### Method 2: JavaScript toggle (Runtime)

```javascript
function switchTheme(themeName) {
  document.getElementById('theme-stylesheet').href = 
    `assets/css/themes/${themeName}.css`;
}

// Usage:
switchTheme('white');  // Switch to light theme
switchTheme('black');  // Switch back to dark theme
```

## Theme Variables Reference

Each theme file defines these CSS custom properties:

| Variable | Purpose | Black Theme | White Theme |
|---|---|---|---|
| `--solis-body` | Page background | `#001d21` | `#f8f9fb` |
| `--solis-surface` | Cards, elevated areas | `#01272d` | `#ffffff` |
| `--solis-primary` | Buttons, links (blue) | `#0e59f2` | `#0e59f2` |
| `--solis-accent` | Gold highlights | `#d4a017` | `#b8860b` |
| `--solis-text` | Main text | `#ffffff` | `#1a1a2e` |
| `--solis-text-secondary` | Muted body copy | `#94a3b8` | `#5a6577` |
| `--solis-text-tertiary` | Low-contrast copy | `rgba(255,255,255,0.75)` | `rgba(26,26,46,0.72)` |
| `--solis-border` | Borders | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` |
| `--solis-card-bg` | Card backgrounds | `rgba(255,255,255,0.03)` | `#ffffff` |
| `--solis-nav-bg` | Navbar background | `#001d21` | `#ffffff` |
| `--solis-nav-text` | Navbar text | `#ffffff` | `#1a1a2e` |

*See `black.css` and `white.css` for the full list of 40+ variables.*

## Adding a New Theme

1. Copy `assets/css/themes/black.css` to `assets/css/themes/your-theme.css`
2. Update the `:root` variables with your new colors
3. If the template has hardcoded colors that conflict, add CSS overrides (see `white.css` for reference)
4. Update the `<link>` tag in all HTML files to point to your new theme

## Important Notes

- **Template files** (`nav-2.css`, `footer-2.css`, `home-2.css`, `common.css`) should NOT be modified — they contain hardcoded hex values from the original Acnalys template.
- **`solis-overrides.css`** handles all Solis-specific styling and uses CSS variables. This is the file to edit for layout/component changes.
- **Theme files** only define color tokens (and override template hardcoded colors for the white theme specifically).
- The **footer stays dark** in both themes for brand consistency.

---

**Last Updated**: February 2026
**Theme System Version**: 1.0
