# HOMES24DESIGNS — Luxury Interior Design Studio

> **Official Website & Digital Showcase for HOMES24DESIGNS**  
> Premier residential interior design firm based in Batla House, Jamia Nagar, Okhla, New Delhi — delivering bespoke residential interiors, waterproof modular kitchens, luxury wardrobes, and 45-day turnkey home execution across South Delhi and Delhi NCR.

---

## Table of Contents
1. [Overview & Tech Stack](#overview--tech-stack)
2. [Quick Start & Setup](#quick-start--setup)
3. [Project Directory Architecture](#project-directory-architecture)
4. [Design System & Luxury Palette](#design-system--luxury-palette)
5. [Key Architectural Features](#key-architectural-features)
   - [Luxury Dark Entry Loader](#1-luxury-dark-entry-loader)
   - [Universal Light-Mode Theme Lock](#2-universal-light-mode-theme-lock)
   - [Image Optimization & Asset Pipeline](#3-image-optimization--asset-pipeline)
   - [Turnkey WhatsApp & Contact Integration](#4-turnkey-whatsapp--contact-integration)
   - [Local SEO & JSON-LD Structured Data](#5-local-seo--json-ld-structured-data)
6. [Content Management (`src/data`)](#content-management-srcdata)
7. [Scripts & Development Commands](#scripts--development-commands)
8. [Production Deployment](#production-deployment)
9. [Firm & Legal Details](#firm--legal-details)

---

## Overview & Tech Stack

The application is engineered for lightning-fast first paint, fluid kinetic typography, responsive mobile touch ergonomics, and strict visual consistency across all devices and operating system themes.

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 5](https://vitejs.dev/) with Rollup chunking
- **Routing**: [React Router v7](https://reactrouter.com/) (Eager core pages + Lazy secondary routes)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom luxury design tokens
- **Head & SEO Management**: [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Platform**: [Vercel](https://vercel.com/) / Static Web Host

---

## Quick Start & Setup

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/hashmiii14/homes24designs.git

# Navigate into the project directory
cd homes24designs

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## Project Directory Architecture

```
homes24designs/
├── public/                         # Static assets served at root
│   ├── images/
│   │   ├── hero/                   # Hero section backgrounds
│   │   ├── instagram/              # Social media showcase images
│   │   ├── journal/                # Editorial journal article covers
│   │   ├── portfolio/              # Featured project images & galleries
│   │   └── services/               # Core service card visuals
│   ├── apple-touch-icon.png        # iOS touch icon (180x180)
│   ├── ehtashamul-islam.webp       # Founder portrait (optimized WebP)
│   ├── favicon.svg                 # Scalable vector favicon
│   ├── favicon-32x32.png           # Standard browser tab icon
│   ├── favicon-16x16.png           # Small tab icon
│   ├── icon-192.png / icon-512.png # PWA manifest icons
│   ├── manifest.json               # Progressive Web App manifest
│   ├── og-image.jpg                # Social sharing card (1200x630)
│   ├── robots.txt                  # Search engine crawler rules
│   └── sitemap.xml                 # XML sitemap for Google Search Console
├── src/
│   ├── components/
│   │   ├── layout/                 # Global UI (Header, Footer, Loader, ScrollToTop, WhatsApp)
│   │   ├── sections/               # Modular homepage & landing sections
│   │   └── ui/                     # Atoms & primitives (Button, Logo, Reveal, SEO, Breadcrumbs)
│   ├── data/                       # Centralized data stores (SiteConfig, Services, Journal, etc.)
│   ├── hooks/                      # Custom hooks (useReveal, useScrollPosition, useBodyScrollLock)
│   ├── pages/                      # Page route components
│   ├── App.tsx                     # Top-level routing & Suspense setup
│   ├── index.css                   # Global base styles, resets & Tailwind layers
│   └── main.tsx                    # React DOM entry point & runtime locks
├── index.html                      # HTML entry with instant 0ms preloader & SEO tags
├── tailwind.config.js              # Theme extensions, luxury colors & keyframe animations
├── tsconfig.json                   # TypeScript compiler configuration
└── package.json                    # Project dependencies and npm scripts
```

---

## Design System & Luxury Palette

The aesthetic follows an **architectural luxury** theme inspired by high-end design ateliers:

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **`ivory`** | `#f7f4ef` | Primary website background, clean, warm, non-harsh white |
| **`accent`** | `#a8855f` | Warm metallic gold for highlights, active links, accents |
| **`accent-light`**| `#c4a585` | Subtle champagne gold for dark overlays & badges |
| **`charcoal-800`**| `#1c1917` | Primary typography color, dark charcoal replacing pure black |
| **`charcoal-900`**| `#0c0a09` | Deep obsidian for footers, modal backdrops, and initial loader |
| **`stone-50`** | `#faf8f4` | Alternating section background |
| **`stone-200`** | `#e8e1d6` | Delicate borders, dividers, and card outlines |

### Typography
- **Serif Display**: `Cormorant Garamond`, Georgia, serif (Headings, titles, architectural branding)
- **Sans-Serif Body**: `Inter`, system-ui, sans-serif (Paragraphs, navigational items, form inputs)

---

## Key Architectural Features

### 1. Luxury Dark Entry Loader
- Defined in `index.html` as inline CSS & JS to render in **0 milliseconds** before external scripts load.
- Features obsidian background (`#0c0a09`) with an architectural grid, brand mark (`HOMES24 DESIGNS`), and a slim 2px gold progress line that fills across 1.8s.
- Features a **theatrical curtain reveal exit**: upon completion, the loader slides smoothly upward (`transform: translateY(-100%)` with `cubic-bezier(0.76, 0, 0.24, 1)`), elegantly unveiling the website and triggering the hero animations.

### 2. Universal Light-Mode Theme Lock
- **Problem Solved**: Mobile browsers (Android Chrome Auto-Dark, Samsung Internet, iOS Safari) often aggressively invert light websites when system dark mode is turned on.
- **Implementation**:
  - `index.html`: `<meta name="color-scheme" content="only light" />` and `<meta name="theme-color" content="#f7f4ef" />`.
  - `tailwind.config.js`: `darkMode: 'class'` to eliminate OS media query dark styles.
  - `src/index.css`: `color-scheme: only light !important` and `forced-color-adjust: none !important` applied universally (`*`, `:root`, `html`, `body`).
  - `src/main.tsx`: Runtime script that dynamically asserts `only light` on document root and clears any dark class.
  - Result: The website maintains its signature ivory & gold palette identically whether device dark mode is ON or OFF.

### 3. Image Optimization & Asset Pipeline
- All images in `public/images/` are compressed using **progressive JPEG encoding (quality 82)**, keeping resolution capped at 1400px.
- Redundant and duplicate image files have been purged to save bandwidth and storage.
- Founder portrait is delivered in modern **WebP** (`/ehtashamul-islam.webp`).
- Critical above-the-fold assets (`hero-bg.jpg` and `ehtashamul-islam.webp`) are preloaded in `index.html` with `fetchpriority="high"`.

### 4. Turnkey WhatsApp & Contact Integration
- The consultation form in `src/components/sections/ConsultationForm.tsx` supports instant WhatsApp direct routing:
  - Form entries auto-compile into a formatted WhatsApp message with property type, bedrooms, budget, and location details.
  - Floating WhatsApp button and direct telephone call buttons for rapid lead acquisition.

### 5. Local SEO & JSON-LD Structured Data
- Deeply optimized for hyper-local search rankings (`Okhla`, `Jamia Nagar`, `Batla House`, `South Delhi`, `Delhi NCR`).
- Rich Schema.org structured data embedded in `index.html` and `src/components/ui/SEO.tsx`:
  - `InteriorDesignFirm`
  - `LocalBusiness`
  - `PostalAddress` & `GeoCoordinates`
  - Canonical links and OpenGraph tags configured on every page.

---

## Content Management (`src/data`)

To update website content without modifying layout logic, edit the files in `src/data/`:

| Data File | Description |
| :--- | :--- |
| **`siteConfig.ts`** | Studio address, phone numbers, email, GSTIN, UDYAM registration number, and social links. |
| **`services.ts`** | Core service offerings (Full home, modular kitchens, wardrobes, lighting, etc.) with titles, descriptions, and feature lists. |
| **`portfolio.ts`** | Featured projects, categories, gallery photos, and project location tags. |
| **`journal.ts`** | Architectural blog posts, homeowner guides, and interior articles with headings and paragraphs. |
| **`faq.ts`** | Frequently asked questions grouped for homeowners and clients. |
| **`pricing.ts`** | Interior package estimates, square footage costs, and turnkey scope details. |
| **`testimonials.ts`**| Verified client reviews, ratings, and project descriptions. |

---

## Scripts & Development Commands

```bash
# Start Vite development server with Hot Module Replacement
npm run dev

# Run TypeScript typecheck without emitting output
npm run typecheck

# Lint source files with ESLint
npm run lint

# Build production bundle with optimized chunking
npm run build

# Preview production build locally
npm run preview
```

---

## Production Deployment

The project builds to static files in `dist/` and is ready for zero-config deployment on any modern cloud hosting provider.

### Deploying to Vercel
1. Connect your GitHub repository [hashmiii14/homes24designs](https://github.com/hashmiii14/homes24designs) to [Vercel](https://vercel.com/).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

For single-page application (SPA) client-side routing, the repository includes rewrite handling so deep links (e.g., `/services/modular-kitchens`) route seamlessly.

---

## Firm & Legal Details

- **Business Name**: HOMES24DESIGNS
- **Proprietor & Principal Designer**: Ehtashamul Islam
- **Studio Address**: M-74, First Floor, Batla House, Jamia Nagar, Okhla, New Delhi, Delhi 110025, India
- **Phone**: [+91 9818083436](tel:+919818083436)
- **Email**: [homes24designs@gmail.com](mailto:homes24designs@gmail.com)
- **GSTIN**: `07AHGPI4995P2ZH`
- **UDYAM**: `UDYAM-DL-09-0040538`
- **Copyright**: © 2026 HOMES24DESIGNS. All rights reserved.
