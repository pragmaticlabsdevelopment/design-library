# Envisor Marketing Website v10 "Sierra" — Handoff

## What this is

A full, independent design concept modeled on **sierra.ai** — not a patch
layered on v4's shared hero/nav/color system, a genuinely distinct page: own
palette, own type voice, own nav, own footer, own hero. One of five such
concepts (v6 PermitFlow, v7 Pano AI, v8 Legora, v9 Hebbia, v10 Sierra),
built to be compared side by side. v4 ("Blended Inspirations") remains its
own separate direction; v1–v5 are untouched.

- **Repo:** https://github.com/pragmatic-labs-development/envisor (private)
- **Stack:** Plain HTML/CSS/vanilla JS, no build step
- **Local preview:** `cd marketing-website-v10 && python3 -m http.server 8080`
- **Public mirror:** `pragmatic-labs-development/envisor-demo`, `marketing-v10/`

## Design identity

- **Palette:** warm cream ground (`#FAF7F1`), near-black ink text, and three
  real gradient treatments this repo forensically sampled from sierra.ai in
  an earlier session — green `linear-gradient(130deg, #8DA46F, #4A6D4E)`,
  blue `linear-gradient(131deg, #3D78B6 29.8%, #03BDF5 175.51%)`, terracotta
  `linear-gradient(130deg, #C2674D, #A2462D)` — used across the announce
  card, bento tiles, and impact stats rather than one repeated hue.
- **Buttons:** full two-tier pill scale (40px base `.btn`, 52px `.btn-lg`),
  Sierra's actual signature move — every other version in this repo uses a
  different button shape.
- **Cards:** consistent 16px radius sitewide, matching Sierra's own
  bento-card treatment.
- **Hero → logo carousel → benefits:** hero is centered headline/subhead/CTA
  above a contained product shot, immediately followed by a full-color logo
  strip (no grayscale/silhouette treatment, a deliberate contrast with other
  versions), then the 3-column icon+headline benefit strip (kept from an
  earlier session's Sierra-referenced build) — matching Sierra's real
  hero→trust→benefits sequence.
- **Testimonials:** three individual bordered quote cards in a row, not the
  editorial quote-log or single-feature-quote formats used elsewhere in this
  repo.
- **Footer:** five-column layout (Product/Industries/Customers/Company +
  brand), matching Sierra's real multi-column density.
- **No fabricated trust badges.** sierra.ai runs a compliance-certification
  badge grid (SOC 2, ISO, etc.); that's deliberately omitted here since
  Envisor's actual certification status isn't established anywhere in this
  project's content bank, and displaying specific compliance badges would be
  an unverified claim about the client's product.

## Content

Same real content bank as every other version — no new facts invented.
Headline/subhead/nav-label/button-text *wording* was rewritten to Sierra's
warmer, more confident product-forward voice; underlying facts (product
names/descriptions, the 4-step workflow, 3 impact stats, 3 testimonials,
real logos and screenshots) are unchanged from v4's established content.

## Verification

- CSS brace balance and HTML section/div tag counts confirmed matching
  (156/156 braces, 10/10 sections, 68/68 divs)
- Served locally, confirmed 200 response and presence of key structural
  classes
- No git commands run as part of this build — commit/push handled centrally

Base commit this was forked from: `5268617`.
