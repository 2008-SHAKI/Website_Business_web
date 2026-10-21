# WEBORA — Website Design & Development Agency

> **“Thoughtful websites. Built for real businesses.”**

Webora is an independent website design and development agency website crafted for an internship assignment. It presents a complete, authentic, human-designed business website that avoids the generic "AI landing page" look in favor of editorial craftsmanship, clear information hierarchy, and restrained aesthetics.

---

## 1. Project Overview

- **Brand Name**: Webora
- **Category**: Website Design & Development Agency
- **Target Audience**: Small businesses, early-stage startups, independent professionals, local brands, and studios.
- **Core Proposition**: A good website should do more than look attractive. It should explain what a business does, build genuine trust, and make it effortless for customers to take the next step.
- **Assignment Context**: Built as an internship showcase demonstrating end-to-end frontend development, accessible UI architecture, brand strategy, and high-fidelity visual design without third-party frameworks or bloated dependencies.

---

## 2. Design Philosophy & Editorial Direction

Webora deliberately avoids typical AI-generated landing page tropes:
- **No generic gradients**: Replaced with warm off-white parchment (`#FAF8F5`, `#F4EFEA`) and crisp white surfaces.
- **Controlled typography**: Pairing **Newsreader** (an editorial serif with warmth and character) with **Plus Jakarta Sans** (a geometric/humanist hybrid with high legibility) and **JetBrains Mono** for specifications and tables.
- **Restrained color accent**: Near-black typography (`#161513`) with subtle warm grey accents and a single editorial violet accent (`#5B3CC4`, tint `#F3EFFD`).
- **Varied section rhythm**: Replaced repetitive three-card layouts with asymmetrical grids, editorial splits, and varied deliverable lists.
- **Authentic visual previews**: Instead of abstract shapes or stock photos, projects are showcased using browser frames with pure HTML/CSS layouts that reflect actual client design systems.

---

## 3. Website Structure & Features

| Section | Key Content & Architecture |
| :--- | :--- |
| **Header** | Typographic wordmark `Webora · Studio`, sticky scroll states, desktop links, mobile navigation drawer with keyboard accessibility. |
| **Hero** | Clear value proposition, twin CTAs (*Start a Project* / *Explore Our Work*), and an interactive browser mockup showcasing 3 switchable concept previews. |
| **Brand Statement** | Editorial philosophy callout addressing the friction small businesses face with cookie-cutter templates. |
| **Services** | Asymmetrical editorial layout covering all 6 core services: *Business Websites*, *Portfolio Websites*, *E-Commerce*, *Landing Pages*, *Website Redesign*, and *Website Maintenance & Care*. |
| **Selected Work** | 3 concept projects (*Northstar Studio*, *Common Ground Café*, *Fieldnote Goods*) clearly labeled as fictional demonstrations with realistic browser frames and an interactive detail modal. |
| **About Webora** | Agency mission, our content-first approach, four core values (*Clarity Over Clutter*, *Honest Craftsmanship*, *Purposeful Usability*, *Honest Collaboration*), and how we work with clients. |
| **Our Process** | 4-phase structured journey: *01 Discovery*, *02 Planning*, *03 Design & Build*, and *04 Review & Launch*. |
| **Pricing** | Illustrative sample packages in INR (₹): *Starter Website* (₹28,000–₹38,000), *Business Website* (₹48,000–₹72,000), and *Online Store* (₹76,000–₹1,15,000). Includes package pre-selection link to contact form. |
| **FAQ** | Accessible accordion answering 6 practical client questions (process, timelines, redesigns, mobile readiness, quotation flow, prerequisites). |
| **Contact** | Validated client inquiry form with input validation, demo submission state capturing data to session storage, and a `mailto:` fallback. |
| **Footer** | Agency wordmark, site links, services directory, copyright, and academic demonstration disclosure. |
| **Concept Modal** | Dynamic dialog with **Desktop**, **Tablet**, and **Mobile** viewport simulator, color swatches, typography pairing breakdown, and design rationale. |

---

## 4. Concept Projects Showcase

All portfolio projects are original fictional concept studies built using pure HTML/CSS:

1. **Northstar Studio**:
   - *Typology*: Architecture & Spatial Design Practice
   - *Palette*: Warm Ivory (`#F5F3EF`), Graphite (`#1A1A1A`), Terracotta (`#B4533C`)
   - *Features*: Asymmetrical case cards, structured index table, minimalist typography.
2. **Common Ground Café**:
   - *Typology*: Neighbourhood Café & Micro-Roastery
   - *Palette*: Oat Cream (`#FAF6F0`), Roasted Espresso (`#241C16`), Sage Olive (`#4D5C4A`), Peach (`#D98358`)
   - *Features*: Live operating hours pill, weekly single-origin feature roast banner, scannable morning menu with pricing.
3. **Fieldnote Goods**:
   - *Typology*: Sustainable Lifestyle & Stationery Storefront
   - *Palette*: Raw Linen (`#F2EFEB`), Forest Evergreen (`#21392E`), Sand (`#DFD7CB`), Clay (`#C0704D`)
   - *Features*: Recycled material badges, mini cart bag indicator, product catalog cards with price formatting.

---

## 5. Technical Requirements & Standards

- **Zero External Dependencies**: Pure vanilla HTML5, modern CSS3, and ES6+ JavaScript. No build step or Node.js required.
- **Semantic & Accessible**: Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`, ARIA attributes (`aria-expanded`, `aria-selected`, `aria-controls`), and visible keyboard focus states.
- **Fluid & Fully Responsive**: Tested across desktop (1440px+), tablet (768px–1024px), and mobile (320px–480px).
- **Custom SVG Favicon**: Clean geometric monoline vector icon embedded in `assets/favicon.svg`.
- **Performance**: Instantaneous load times with clean CSS variables and responsive media scaling.

---

## 6. How to Run & Preview

You can run the website in any modern browser using any of the following methods:

### Method A: Direct File Open (Easiest)
Simply double-click `index.html` or open it in Google Chrome, Microsoft Edge, Firefox, or Safari:
```powershell
Start-Process .\index.html
```

### Method B: Built-in PowerShell Local Server
We have included a zero-dependency PowerShell script (`serve.ps1`) that launches a local HTTP server:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
The server will start at `http://localhost:3000/` and automatically open your default browser.

---

## 7. Project File Structure

```text
Webora/
├── index.html              # Main semantic HTML5 document
├── css/
│   ├── style.css           # Global design tokens, typography, grid layouts, component styles
│   └── mockups.css         # Browser chrome frames, realistic concept layouts, interactive modal
├── js/
│   └── main.js             # Interactive logic: tabs, modal, FAQ accordion, form validation, scroll spy
├── assets/
│   └── favicon.svg         # Typographic vector favicon
├── serve.ps1               # Zero-dependency local PowerShell web server
└── README.md               # Documentation and project overview
```

---

&copy; 2026 Webora. Built with care for real businesses.
