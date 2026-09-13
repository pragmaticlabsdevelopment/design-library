# ENVISOR Marketing Website (SaaS) — Session Handoff

## Repo

- **Repo:** https://github.com/davepragmaticlabs-design/envisor (private)
- **Path:** `marketing-website-v1/` (renamed from `marketing-website/`)
- **Stack:** Plain HTML / CSS / vanilla JS (no framework)
- **Local preview:** `cd marketing-website-v1 && python3 -m http.server 8080`
- **Live CEQA Search:** https://envisor.ai/ceqa-search
- **Sibling site:** `marketing-website-v2/` (brand/agency-focused version)

## Repo Structure

```
envisor/                            (monorepo)
├── launchpad/                      (Next.js app — existing project)
├── marketing-website-v1/         (this project — SaaS-focused homepage)
│   ├── index.html
│   ├── styles.css
│   ├── favicon.svg
│   └── HANDOFF.md
├── marketing-website-v2/        (brand/agency homepage — dark cinematic)
│   ├── index.html
│   ├── styles.css
│   ├── favicon.svg
│   └── HANDOFF.md
└── README.md
```

## What Was Built

A fully designed one-page homepage for **envisor.ai** — 10 sections, fully responsive, with a functional Products mega menu, animated interactions, and a CEQA Search free trial CTA.

### Page Sections (in order)

1. **Header/Nav** — "Envisor | AI" logo (italic serif + gold bar + sans "AI"), Platform mega menu, Solutions/Resources/Company placeholders, Log in + Request Demo CTAs
2. **Hero** — "AI that turns complex reviews into clarity" headline with gradient "clarity", product mockup with perspective transform, 3 metric stats, dual CTAs
3. **Purpose-Built** — "The AI built for work that has to hold up." 4 cards: Knows the domain, Shows its sources, Fits the workflow, Built for scrutiny. Topographic SVG background.
4. **Platform (Bento Grid)** — Knowledge Base hub (dark, spans 3 rows) + 6 module cards: Review (MIRA), Respond (CARA), Analyze, Monitor, Remediate, Search
5. **Workflow** — 6 numbered steps: Scope, Review, Draft, Respond, Track, Close. Gold connecting line.
6. **Outcomes** — Dark section with glass cards. Counter-animated stats: 50%+, 30-50%, 2-3x, 100%. Gold gradient numbers.
7. **Sectors** — 6 cards: Infrastructure, Natural Resources, Commercial Development, Public Agencies, Consultants, Legal & Litigation. Gold accent bars. 3×2 grid.
8. **Trust** — "Every answer needs a trail." 8 trust points with unique Lucide icons, left-border card treatment, 2-column grid.
9. **CEQA Search** — "Explore CEQA with AI — free." Free trial CTA linking to https://envisor.ai/ceqa-search. "No account required."
10. **Final CTA** — Dark section with shield+check icon flanked by gold lines, "Built for Defensible Review" eyebrow, "Move faster without losing defensibility." headline, dual buttons, sparkles icon footer, topographic contour line decorations. Flows into dark footer.
11. **Footer** — Dark background, "Envisor | AI" logo, Platform/Company/Resources columns.

### Interactions

- **Mega menu:** Hover/click to open, Escape to close, backdrop overlay, gold indicator bar
- **Mobile menu:** Hamburger toggle, accordion for Platform products, stacked navigation
- **Scroll animations:** All cards/modules use `data-animate` with staggered `transition-delay` (80ms increments)
- **Counter animation:** Outcome numbers count up from 0 on scroll (IntersectionObserver, 1.2s easeOut)
- **Grain texture:** SVG noise overlay at 3.5% opacity, `mix-blend-mode: overlay`

## Design System

### Colors (CSS variables)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#f6f1e7` | Warm ivory background |
| `--bg-light` | `#fbf8f1` | Light background variant |
| `--text` | `#171716` | Primary text |
| `--muted` | `#5f5b52` | Secondary text |
| `--border` | `#ddd4c3` | Card/section borders |
| `--gold` | `#a88413` | Primary accent |
| `--gold-dark` | `#8a6d0d` | Hover/dark gold |
| `--forest` | `#0d2f24` | Dark section backgrounds |
| `--forest-dark` | `#071b15` | Footer / gradient endpoints |
| `--card` | `#fffdf7` | Card backgrounds |
| `--white` | `#ffffff` | White |

### Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Serif (headlines) | Source Serif 4 | clamp(34px-64px) | 700 |
| Sans (body) | Inter | 16-18px | 400 |
| Hero headline | Source Serif 4 | clamp(42px, 5.5vw, 64px) | 700 |
| Section headlines | Source Serif 4 | clamp(34px, 4.5vw, 56px) | 700 |
| Final CTA headline | Source Serif 4 | clamp(38px, 5vw, 60px) | 700 |
| Card headings | Source Serif 4 | 24px | 700 |
| Body text | Inter | 18px | 400 |
| Card body | Inter | 16px | 400 |
| Eyebrows | Inter | 12px / 700 / 0.14em tracking | uppercase |

- **Design tone:** "Environmental law firm meets modern AI platform"
- **Previous font:** Cormorant Garamond was replaced with Source Serif 4 for bolder, thicker serif headers

### Icons

All icons from **Lucide** via CDN (`https://unpkg.com/lucide@latest`). Initialized with `lucide.createIcons()`. Some icons are inline SVGs (shield+check, sparkles, leaf in decorative contexts).

### Logo

"Envisor | AI" — italic serif "Envisor" + 2px gold vertical bar + lighter-weight sans "AI". Used in both nav and footer with size adjustments.

### Key CSS Patterns

- **Cards:** `border-radius: 16px`, `border: 1px solid var(--border)`, hover: `translateY(-2px)`
- **Buttons:** `border-radius: 100px` (pill shape), gold primary, outline secondary
- **Dark sections:** `radial-gradient(ellipse at 50% 0%, #163d2e 0%, #0d2f24 50%, #071b15 100%)`
- **Transitions:** `0.25s cubic-bezier(0.4, 0, 0.2, 1)`
- **Grid gaps:** 20px standard
- **Section padding:** 120px vertical

## What Remains

### High Priority
1. **Deployment** — Site is local-only. Deploy to Netlify/Vercel/Cloudflare Pages for a shareable URL
2. **Product detail pages** — `/products/review`, `/products/analyze`, etc. (mega menu links go nowhere)
3. **Solutions, Resources, Company pages** — Nav items are placeholders with no links
4. **Hero mockup imagery** — Current mockup is CSS-only; could use a real product screenshot or interactive embed
5. **Responsive testing** — Tested via CSS only; needs real device testing on iOS Safari, Android Chrome

### Medium Priority
6. **Mega menus for other nav items** — Solutions, Resources, Company are static labels
7. **SEO/meta** — Open Graph tags, Twitter cards, structured data
8. **Analytics** — No tracking installed (Google Analytics, Plausible, etc.)
9. **Custom domain** — Wire up envisor.ai to the deployed site
10. **Performance** — Optimize Google Fonts loading (preload, font-display), lazy-load below-fold sections
11. **Accessibility audit** — ARIA labels exist but needs full screen reader + keyboard navigation testing
12. **Contact form** — "Request a Demo" buttons link to `/contact` which doesn't exist

### Low Priority
13. **Blog/Resources section** — Footer links to `/blog`, `/docs`, `/security` (don't exist)
14. **Custom favicon** — Currently using an SVG leaf; may want the shield+check or a custom brand mark
15. **Old site content gaps** — Mission narrative ("Transforming Environmental Review in the Era of AI"), ADA accessibility emphasis, specific timeline metrics ("6-12 months becomes 3-6")
16. **Decorative refinement** — Topographic contour lines in Final CTA could be more detailed; Purpose section topo background could be revisited

## Reference Design

- **Aspirational tone:** "More defensible record system, less startup confetti cannon"
- **Warm, precise, serious** — no neon, no excessive gradients
- **Product modules named for the job** (Review, Analyze, etc.), AI brands (MIRA, CARA) as secondary labels
- **Workflow ordering tells the story:** Review > Analyze > Respond > Monitor > Remediate > Search
- **Old website:** Had CEQA Search free trial, Document Remediation, 4 core workflow assistants, sector cards with photos
- **Typography direction:** User prefers bold/thick serif headers — Source Serif 4 at weight 700 was chosen for this reason
