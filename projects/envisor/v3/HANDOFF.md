# Envisor Marketing Website v3 — Session Handoff

## Repo

- **Repo:** https://github.com/pragmatic-labs-development/envisor (private)
- **Path:** `marketing-website-v3/`
- **Stack:** Plain HTML / CSS / vanilla JS (no framework, no build step)
- **Local preview:** `cd marketing-website-v3 && python3 -m http.server 8080`
- **Siblings:** `marketing-website-v1/`, `marketing-website-v2/` — different design directions, not shared code

## Design direction

**Register: Harvey.ai** (cream/ink, editorial serif, sharp small buttons, dark grain-textured panels), rebuilt with **Envisor's real content** — not a template, not fabricated copy.

This went through three discarded "competing variant" passes (Editorial Serif / Refined Minimal / Confident Technical, built by parallel agents) before landing here. The client's feedback on those: too similar to each other, not close enough to Harvey's actual layout, and the CSS-mockup product screenshots read as fake/overdesigned. This version responds directly to that:

- **Structural fidelity to Harvey**, measured from the live site (not guessed): nav height 72px, button `border-radius: 4px` / `padding: 0 12px` / `14px 500`, hero H1 weight 400, bg `#FAFAF9` / ink `#0F0E0D`, dark grain band under the hero holding one image panel, two-lane dark solution cards, logo wall, testimonials, final CTA, footer — same section order and proportions as harvey.ai.
- **No fake UI mockups.** Per explicit instruction, product-screenshot placeholders are solid rounded rectangles (`.placeholder-panel`, `.lane-panel`) — no invented dashboards, charts, or data.
- **Typeface: Harvey's actual fonts are proprietary** (`TWK Ghost` by WELTKERN for display, `ABC Diatype` by Dinamo for UI — confirmed via a Geist/Shawn Farsai rebrand case study, see Sources). Not licensed for this project. Tested 8 free alternatives side-by-side against a real Harvey headline screenshot (`Build a Frontier Legal Organization`) at matching size — **Libre Caslon Text** was the closest match (ball terminals, x-height, moderate contrast, open counters) and is what's shipped, paired with **Inter** for sans/UI.
- **"Introducing MIRA" section** — modeled directly on Harvey's own "Introducing Harvey II" pattern (NEW badge, centered serif headline, centered subhead, single centered CTA), per client reference screenshot.

## Content sourcing — every claim is traceable

- **Real live site** (https://envisor.ai/, fetched directly): hero tagline "The Operating System for Environmental Review," mission paragraph, product names spelled out (CARA = CEQA Comment Response Application, MIRA = Mapping Intake & Review Assistant, CEQA Search, Document Remediation), the 4-step Core Workflow (Preliminary Review → Initial Study → Public Comments → Project Implementation), stats (6–12mo → 3–6mo, billable hours cut in half), footer structure (Company: About/Contact/Security).
- **Company pitch deck** (Google Slides, client-supplied): supplementary platform framing (Knowledge Base / Analyze / Monitor), the MIRA "Blake Garden" example project stats (22 topics, 1,000+ sources, 1,355 evidence items), and the three customer testimonials (Stantec, EPD Solutions, Brian Harrington/UCOP Planning) — used verbatim, attributed exactly as given.
- **Explicitly excluded**: the deck's fundraising figures, ARR targets, and per-project pricing/economics tables — investor-only, not public marketing content.
- **Logo wall**: real client/partner logos pulled from `~/Desktop/Envisor Deck 6 Images/` (Stantec, EPD Solutions, ICF, PlaceWorks, Parsons, Ascent Environmental, UCOP, UC Berkeley, UC Irvine, UC Santa Barbara) — copied into `logos/`, grayscale-treated. **Client confirmed these are cleared for public display** before they were used (the deck slide labeled them "Example Commercial Partners," which was ambiguous, so this was checked rather than assumed).
- **Logo asset**: `envisor-logo.svg` (white, for dark sections) / `envisor-logo-ink.svg` (ink, for light sections) — derived from the client-supplied source lockup (`~/Desktop/Envisor-Logo.svg`), aspect ratio preserved, gold divider bar kept as-is.

## Page sections (in order)

1. Nav — logo, Solutions dropdown (CARA/MIRA/CEQA Search/Document Remediation), About, Contact, Book Demo
2. Hero — two-column (headline left, subhead+CTA right), matching Harvey's split ratio and top alignment
3. Dark grain band — solid placeholder panel + caption
4. "Introducing MIRA" — NEW badge, centered announcement
5. Logo wall — 10 real partner/client logos, grayscale
6. Two-lane cards — For Environmental Consultants / For Public Agencies
7. Platform grid — Knowledge Base + 5 modules (MIRA, CARA, Initial Study Assistant, CEQA Search, Document Remediation)
8. Core Workflow — real 4-step process from the live site
9. Impact band — real stats (review timeline, billable hours, defensibility)
10. Testimonials — 3 real quotes
11. Final CTA
12. Footer — Solutions / Company columns, real copyright line

## What remains

1. **Deployment** — local-only, needs Netlify/Vercel/Cloudflare Pages + custom domain wiring
2. **Solutions/About/Contact pages** — nav and footer links currently point to in-page anchors or `#`
3. **Real product screenshots** — swap the solid-color placeholder panels for actual product UI once available; markup (`.placeholder-panel`, `.lane-panel`) is sized and ready to receive `<img>` or embed content
4. **ICF logo legibility** — the ICF mark reads small/cramped in the wall at 34px height; consider a taller logo row or per-logo max-width tuning
5. **Mega-menu functionality** — Solutions dropdown is hover/focus CSS only, not keyboard-menu-pattern compliant; fine for a v3 but worth an a11y pass before launch
6. **SEO/OG tags, analytics** — not yet added

## Sources

- Harvey.ai typeface case study: Geist Portland / Shawn Farsai rebrand — TWK Ghost (WELTKERN) + ABC Diatype (Dinamo)
