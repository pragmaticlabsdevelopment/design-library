# Envisor Marketing Website v6 "PermitFlow" — Handoff

## What this is

A full, independent design concept modeled on **permitflow.com** — not a
patch layered on v4's shared hero/nav/color system, a genuinely distinct
page: own palette, own type voice, own nav, own footer, own hero. One of
five such concepts (v6 PermitFlow, v7 Pano AI, v8 Legora, v9 Hebbia, v10
Sierra), built to be compared side by side. v4 ("Blended Inspirations")
remains its own separate direction; v1–v5 are untouched.

- **Repo:** https://github.com/pragmatic-labs-development/envisor (private)
- **Stack:** Plain HTML/CSS/vanilla JS, no build step — same as every other
  version in this repo
- **Local preview:** `cd marketing-website-v6 && python3 -m http.server 8080`
- **Public mirror:** `pragmatic-labs-development/envisor-demo`, `marketing-v6/`

## Design identity (sampled from permitflow.com, live research)

- **Palette:** white/very light gray backgrounds (`#FFFFFF` / `#F6F7FA`),
  deep navy ink (`#0F1F3D`) for text and headlines, one restrained warm
  accent (`#E8622C`, construction-adjacent amber) used sparingly for CTAs
  and emphasis — not a gradient system, not black/yellow.
- **Type:** sans-serif only (Inter), bold/heavy display weights (800),
  generous whitespace, no serif anywhere on the page.
- **Nav:** simple bar — logo, "Product" and "Who We Serve" dropdown menus,
  "Sign In" link, "Book a Demo" button. No mega-menu.
- **Hero:** large centered headline + subhead + single CTA, no framed
  product screenshot — followed immediately by a muted customer-logo strip,
  matching PermitFlow's own hero→logo-strip sequence.
- **"Why" stat strip:** three big bold standalone numbers directly under the
  hero logo strip (2.1× faster, 50% lower cost, 100% cited), matching
  PermitFlow's "in Action" stat-block pattern — not gradient cards.
- **Pipeline:** the numbered `[01]`–`[04]` step list fused with a swapping
  product-shot panel (kept from an earlier session's PermitFlow-referenced
  build), restyled to this version's navy/white/amber system.
- **Testimonials:** three equal bordered cards on a light-gray ground,
  matching PermitFlow's block-quote-with-attribution pattern — not the
  editorial quote-log style used elsewhere in this repo.
- **Footer:** stacked multi-column (Product/Solutions/Resources/Company) on
  a dark navy ground, copyright + legal row — standard B2B SaaS convention.

## Content

Same real content bank as every other version — no new copy invented.
Headline/subhead/nav-label/button-text *wording* was rewritten to match
PermitFlow's bolder, results-forward voice; underlying facts (product
names/descriptions, the 4-step workflow, 3 impact stats, 3 testimonials,
real logos and screenshots) are unchanged from v4's established content.

Base commit this was forked from: `5268617`.
