# Envisor Marketing Website v9 "Hebbia" — Handoff

## What this is

A full, independent design concept modeled on **hebbia.com** — not a patch
layered on v4's shared hero/nav/color system, a genuinely distinct page: own
palette, own type voice, own nav, own footer, own hero. One of five such
concepts (v6 PermitFlow, v7 Pano AI, v8 Legora, v9 Hebbia, v10 Sierra), built
to be compared side by side. v4 ("Blended Inspirations") remains its own
separate direction; v1–v5 are untouched.

- **Repo:** https://github.com/pragmatic-labs-development/envisor (private)
- **Stack:** Plain HTML/CSS/vanilla JS, no build step — same as every other
  version in this repo
- **Local preview:** `cd marketing-website-v9 && python3 -m http.server 8080`
- **Public mirror:** `pragmatic-labs-development/envisor-demo`, `marketing-v9/`

## Design identity

- **Palette:** near-monochrome — white (`#FFFFFF`) background, near-black ink
  (`#0A0A0A`) text and CTAs, one muted signal color (`#0E7C66`, a teal) used
  sparingly for link hover/active states only. Deliberately colorless
  compared to every other version in this repo — Hebbia's real register is
  institutional and data-forward, not decorative.
- **Radius:** sharp 8px sitewide (buttons included), not the pill-button
  vocabulary used elsewhere in this repo — Hebbia's real signature is sharp
  corners, not rounded ones. The existing bento grid's mixed dark-charcoal/
  blue-gray/light-blue-gray tiles (from an earlier session's real forensic
  sampling of hebbia.com) are kept at the same sharp radius.
- **Typography:** sans body (Inter), serif display headlines carrying the
  positive-tracking/compressed-leading treatment sampled from hebbia.com's
  live computed styles in an earlier session (`--lts-display: 0.02em`,
  `--lh-display: 1.0`) — kept and extended across every display-scale serif
  element.
- **Nav:** genuine dual-tier, matching Hebbia's real pattern — a slim dark
  utility bar (audience-segment links, Sign In) above the primary bar (logo,
  Solutions/Company dropdowns, Request Demo).
- **Hero:** full-bleed near-black band, the page's one loud dark moment up
  front. Hebbia's actual hero runs a video background; no video asset exists
  in this project, so a bold ink band stands in rather than reusing the
  light contained-card hero every other version on this page has. The
  existing framed product screenshot is kept inside the dark band rather
  than dropped, so the hero still carries real proof rather than becoming
  pure typography.
- **Section hairlines:** full-bleed 1px rules (`.rule-top`) at light-on-light
  section seams, modeling hebbia.com's `.bd-top`/`.bd-bottom` convention
  (kept from an earlier session).
- **Testimonials:** one large left-aligned featured quote with an avatar,
  supporting quotes demoted below a hairline (kept from an earlier session —
  matches Hebbia's own single-large-quote pattern rather than a card row).
- **Footer:** five link columns + brand (Product/Solutions/Company/Policies/
  Follow Us), matching Hebbia's real, information-dense footer structure.

## Content

Same real content bank as every other version — no new facts invented.
Headline/subhead/nav-label/button-text *wording* was rewritten to Hebbia's
terser, more institutional voice ("The system of record for environmental
review" instead of "The Operating System for..."); underlying facts (product
names/descriptions, the 4-step workflow, 3 impact stats, 3 testimonials,
real logos and screenshots) are unchanged from v4's established content.

## Verification

- CSS brace balance confirmed matching (234/234)
- HTML `<section>`/`<div>` tag counts confirmed matching (9/9, 74/74)
- Served locally, confirmed 200 response and presence of key structural
  classes (`util-bar`, `hero-band--ink`, `footer-hebbia`,
  `testimonial-feature-avatar`)
- Fixed a latent contrast bug found while auditing: `.btn-primary` inherited
  `color: var(--ink)` on `background: var(--accent)`, and this version's
  `--accent` now equals `--ink` (both near-black) — would have rendered
  invisible black-on-black text. Not currently used anywhere in this page's
  HTML, but fixed to `color: var(--bg)` so the class is safe if used later.
- No git commands run as part of this build — commit/push handled centrally

Base commit this was forked from: `5268617`.
