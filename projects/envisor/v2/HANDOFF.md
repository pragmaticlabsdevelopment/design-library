# ENVISOR Marketing Website (Brand/Agency) — Session Handoff

## Repo

- **Repo:** https://github.com/davepragmaticlabs-design/envisor (private)
- **Path:** `marketing-website-v2/`
- **Stack:** Plain HTML / CSS / vanilla JS (no framework)
- **Local preview:** `cd marketing-website-v2 && python3 -m http.server 8080`
- **Live CEQA Search:** https://envisor.ai/ceqa-search
- **Sibling site:** `marketing-website-v1/` (SaaS/product-focused version)

## Repo Structure

```
envisor/                            (monorepo)
├── launchpad/                      (Next.js app — existing project)
├── marketing-website-v1/         (SaaS-focused homepage — renamed from marketing-website)
│   ├── index.html
│   ├── styles.css
│   ├── favicon.svg
│   └── HANDOFF.md
├── marketing-website-v2/        (this project — brand/agency homepage)
│   ├── index.html
│   ├── styles.css
│   ├── hero-bg.mp4              (aerial forest video, Mixkit free license)
│   ├── solutions-graphics.html  (source SVGs for solutions section)
│   ├── favicon.svg
│   └── HANDOFF.md
└── README.md
```

## What Was Built

A fully designed one-page homepage for **envisor.ai** — the brand/agency version. Dark and cinematic visual direction, focused on industry problems, solutions, and credibility rather than software features. No product screenshots, no feature grids, no mega menu. Full-bleed video hero with aerial forest footage.

### Page Sections (in order)

1. **Header/Nav** — Transparent dark nav that gains backdrop-blur on scroll. "Envisor | AI" logo, simple links (Solutions, Industries, About, Contact), single "Get in Touch" CTA. No mega menu.
2. **Hero** — Full-viewport video background (aerial cloud forest footage, `hero-bg.mp4`, 5MB 720p, Mixkit free license). "The environmental review process is about to change." Large cinematic headline with gold gradient italic emphasis. Single CTA. Animated scroll indicator. Gradient placeholder fallback if video fails.
3. **Mission** — "Environmental review should be faster, not weaker." Two-column editorial text about Envisor's purpose and approach.
4. **The Challenge** — 3 numbered cards: Regulatory Complexity, Extended Timelines, Defensibility Burden. Frames the industry problem before presenting solutions.
5. **Solutions** — 3 alternating left/right rows: Accelerate Document Review, Strengthen Defensibility, Scale Without Compromise. Each with a world-class animated SVG graphic (SMIL animations — scan beams, orbiting nodes, growing charts, particle effects, self-drawing lines). Source SVGs in `solutions-graphics.html`. No product screenshots.
6. **Industries** — 6 sector cards with gold top borders: Infrastructure & Transportation, Energy & Utilities, Real Estate & Development, Natural Resources & Conservation, Public Agencies, Legal & Litigation Support.
7. **Our Approach** — 4 numbered phase cards in a row (Discovery & Scoping, Strategy & Framework, Embedded Execution, Delivery & Defense) with Lucide icons (compass, map, users, shield-check). Gold top-border accent. Describes the consultancy engagement model.
8. **Why Envisor** — 6 differentiator items using `.trust-point` pattern: Deep regulatory knowledge, Embedded with your team, AI-augmented not AI-dependent, Built for defensibility, Timeline-conscious delivery, Confidential and secure. Icons: brain, handshake, sparkles, award, clock, lock.
9. **Client Outcomes** (`#outcomes`) — 3 stacked full-width case study cards with stat on left / narrative on right. Transit expansion (14 mo. ahead), Solar permitting (3,200+ comments), General plan update (Zero legal challenges). Tag pills for sector.
10. **Final CTA** — "Start with a conversation, not a contract." Message-circle divider icon, "Request a Consultation" button, trust signals below ("No commitment required" / "Typical response within 24 hours"). Topographic contour decorations.
11. **Footer** — Dark background, "Envisor | AI" logo, tagline "Strategic environmental review advisory." Columns: Services (Advisory & Strategy, Document Review, Comment Response, Litigation Support), Company (About, Contact), Resources (Case Studies → #outcomes, Insights, CEQA Search).

### Interactions

- **Nav scroll state:** Transparent on hero, gains `is-scrolled` class (dark bg + backdrop-blur) when hero exits viewport via IntersectionObserver
- **Mobile menu:** Hamburger toggle, stacked nav links (no accordion — simpler than SaaS version)
- **Scroll animations:** All cards/sections use `data-animate` with staggered `transition-delay` (80ms increments)
- **No counter animation** (removed — was tied to old Impact stats section)
- **Smooth scroll:** Anchor links scroll smoothly to target sections, closes mobile menu if open
- **Hero video:** Autoplay muted loop with gradient fallback. Video is `hero-bg.mp4` (aerial forest, Mixkit free license)
- **Solution SVGs:** Three detailed SMIL-animated SVGs — document scan engine (viewBox 440x420), shield trust architecture (400x400), capacity growth chart (440x400). Animations include scan beams, orbiting nodes, self-drawing checkmarks, animated bar charts, particle effects, data flow packets via animateMotion
- **Grain texture:** SVG noise overlay at 3.5% opacity, `mix-blend-mode: overlay`

## Design System

### Visual Direction

**Dark & cinematic** — "Premium law firm meets modern AI." Deep green/black backgrounds, high contrast, gold accents. Authoritative and grounded. No software screenshots or product UI.

### Colors (CSS variables)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#080f0c` | Near-black green, primary page bg |
| `--bg-elevated` | `#0d1a14` | Card surfaces |
| `--bg-section` | `#0a1610` | Alternate section bg for rhythm |
| `--bg-subtle` | `#111f18` | Hover states |
| `--text` | `#f0ede6` | Primary text (warm off-white) |
| `--text-muted` | `rgba(240,237,230,0.6)` | Secondary text |
| `--text-faint` | `rgba(240,237,230,0.35)` | Tertiary / captions |
| `--gold` | `#a88413` | Primary accent (same as SaaS) |
| `--gold-light` | `#c9a83c` | Gradient highlight |
| `--gold-dark` | `#8a6d0d` | Hover/dark gold |
| `--gold-glow` | `rgba(168,132,19,0.15)` | Decorative glow backgrounds |
| `--border` | `rgba(240,237,230,0.08)` | Subtle card/section borders |
| `--border-hover` | `rgba(168,132,19,0.3)` | Hover border accent |
| `--forest` | `#0d2f24` | Gradient endpoint |
| `--forest-dark` | `#071b15` | Footer / deep gradient |

### Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Serif (headlines) | Source Serif 4 | clamp(34px–80px) | 700 |
| Sans (body) | Inter | 16–19px | 400 |
| Hero headline | Source Serif 4 | clamp(44px, 6vw, 80px) | 700 |
| Section headlines | Source Serif 4 | clamp(34px, 4.5vw, 56px) | 700 |
| Mission headline | Source Serif 4 | clamp(36px, 5vw, 60px) | 700 |
| Final CTA headline | Source Serif 4 | clamp(38px, 5vw, 60px) | 700 |
| Card headings | Source Serif 4 | 22–28px | 700 |
| Body text | Inter | 17–19px | 400 |
| Card body | Inter | 15–16px | 400 |
| Eyebrows | Inter | 12px / 700 / 0.14em tracking | uppercase |

### Icons

All icons from **Lucide** via CDN (`https://unpkg.com/lucide@latest`). Initialized with `lucide.createIcons()`. Some icons are inline SVGs (shield+check, sparkles in decorative contexts).

### Logo

"Envisor | AI" — italic serif "Envisor" + 2px gold vertical bar + lighter-weight sans "AI". Same as SaaS version but rendered in light text on dark background.

### Key CSS Patterns

- **Cards:** `border-radius: 16–20px`, `border: 1px solid var(--border)`, hover: `translateY(-2px/-3px)`
- **Buttons:** `border-radius: 100px` (pill shape), gold primary with gradient and glow shadow
- **Dark sections:** Subtle bg variations (`--bg`, `--bg-section`, `--bg-elevated`) for visual rhythm
- **Nav:** Transparent over hero, `backdrop-filter: blur(20px)` on scroll
- **Transitions:** `0.25s cubic-bezier(0.4, 0, 0.2, 1)`
- **Grid gaps:** 16–24px standard
- **Section padding:** 120px vertical (80px on mobile)
- **Responsive breakpoints:** 960px (tablet), 600px (mobile)

### Differences from SaaS Version

| Aspect | SaaS Version | Brand Version |
|--------|-------------|---------------|
| Background | Warm ivory (`#f6f1e7`) | Near-black green (`#080f0c`) |
| Hero | Product mockup with perspective transform | Full-bleed video background |
| Nav | White, mega menu with products | Transparent/dark, simple links |
| Sections | Platform bento grid, workflow steps | Solutions rows, challenge cards |
| Content focus | Product features and modules | Industry problems and outcomes |
| CTA language | "Request a Demo" | "Request a Consultation" / "Request a Conversation" |
| Section 8 | Platform bento / CEQA Search promo | Client Outcomes (case study cards) |
| Tone | SaaS product marketing | Enterprise brand / agency |

## What Remains

### High Priority
1. **Deployment** — Site is local-only. Deploy to Netlify/Vercel/Cloudflare Pages
2. **Contact form** — "Get in Touch" currently uses `mailto:`. Needs a real contact form or calendly embed
3. **Responsive testing** — Tested via CSS only; needs real device testing on iOS Safari, Android Chrome
4. **Hero video upgrade** — Current video (aerial forest) works but could be upgraded to custom footage (environmental review meetings, infrastructure sites, agency work)

### Medium Priority
5. **SEO/meta** — Open Graph tags, Twitter cards, structured data
6. **Analytics** — No tracking installed
7. **Custom domain** — Wire up envisor.ai to the deployed site
8. **Performance** — Preload fonts, optimize video loading (when added)
9. **Accessibility audit** — Full screen reader + keyboard navigation testing
10. **Hero poster image** — A still frame for the video before it loads

### Low Priority
11. **Additional pages** — About, Solutions detail, Industries detail
12. **Blog/Resources** — Footer links point to anchors, no standalone pages
13. **Custom favicon** — Currently using the SaaS version's SVG leaf
14. **Client logos/testimonials** — Social proof section when available
15. **Decorative refinement** — More detailed topographic contour lines, subtle particle effects

## Video Hero

The hero section uses `hero-bg.mp4` (5MB, 720p, aerial cloud forest footage from Mixkit, free license, no attribution required). The `<video>` element has `autoplay muted loop playsinline`. A CSS gradient placeholder remains as fallback if the video fails to load.

To upgrade the video, replace `hero-bg.mp4` with new footage. Recommended specs: 1920x1080, 15–30 seconds loop, dark/moody, compressed to ~3–5MB.

## Solutions SVG Graphics

The three animated SVGs in the Solutions section are inline in `index.html`. The source/reference versions are in `solutions-graphics.html`. Each SVG uses SMIL animations (no JavaScript) with unique ID prefixes to avoid conflicts:

| SVG | ID Prefix | viewBox | Description |
|-----|-----------|---------|-------------|
| 1. Document Intelligence | `d1*` | 440x420 | Layered document stack, scan beam, sidebar indicators, extraction lines to insight cards (THRESHOLD, MITIGATION, CITATION), knowledge graph connections |
| 2. Defensibility Architecture | `d2*` | 400x400 | Citation constellation, concentric rings, shield with self-drawing checkmark, 6 data flow streams with animateMotion packets, orbiting nodes, verification pulse |
| 3. Capacity Growth | `d3*` | 440x400 | Animated chart axes, 5 bars with spring easing, trend line with glow, data points with pulse rings, floating metric cards, rising particles |

## Session Convention

**Codeword: "pineapple"** — When Dave says "pineapple", it means: commit and push all changes, update this handoff doc, and provide a continuation prompt for the next session. Always include this convention in the handoff doc.

## Last Session (2026-07-10)

### What Was Done
- Replaced sections 6–9 and footer with consultancy-focused content (previously duplicated from SaaS site)
- **Section 6** ("Our Approach"): 4 numbered phase cards replacing the old Impact stats grid
- **Section 7** ("Why Envisor"): 6 differentiator items replacing the old "Designed for Scrutiny" section
- **Section 8** ("Client Outcomes"): 3 case study cards replacing the CEQA Search promo
- **Section 9** (Final CTA): New headline/button/icon/trust signals replacing SaaS-style CTA
- **Footer**: New tagline + Services/Company/Resources columns
- Removed dead counter animation JS
- Added `.approach-*`, `.outcomes-*`, `.final-cta-signals` CSS with responsive rules
- Removed all `.impact-*` and `.explore-*` CSS

### What Remains (Next Session)
1. Review the site visually (http://localhost:8080) and iterate on any design/content feedback
2. Deploy to hosting (Netlify/Vercel/Cloudflare Pages)
3. Contact form (replace mailto: with real form or Calendly)
4. Responsive device testing (iOS Safari, Android Chrome)
5. SEO meta tags (OG, Twitter cards)
6. Additional pages if needed (About, Case Studies detail)
