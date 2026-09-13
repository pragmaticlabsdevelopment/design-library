# Envisor Marketing Website v8 "Legora" — Handoff

## What this is

A full, independent design concept modeled on **legora.com** — not a patch
layered on v4's shared hero/nav/color system, a genuinely distinct page: own
palette, own type treatment, own nav, own footer, own hero. One of five such
concepts (v6 PermitFlow, v7 Pano AI, v8 Legora, v9 Hebbia, v10 Sierra),
built to be compared side by side. v4 ("Blended Inspirations") remains its
own separate direction; v1–v5 are untouched.

- **Repo:** https://github.com/pragmatic-labs-development/envisor (private)
- **Stack:** Plain HTML/CSS/vanilla JS, no build step
- **Local preview:** `cd marketing-website-v8 && python3 -m http.server 8080`
- **Public mirror:** `pragmatic-labs-development/envisor-demo`, `marketing-v8/`

## Design identity

- **Verified real accent: `#005032`**, sampled directly from legora.com's
  own CTA/announcement-bar green in an earlier session's forensic pass
  (`getComputedStyle()` against the live site) — not a guess.
- **Hero:** full-viewport (92vh) dark cinematic band, near-black
  (`#0A0B09`) with a layered vignette (darker top/bottom edges, a faint
  green radial glow through the middle) — not a contained card with an
  inset screenshot. Centered, single-column, large serif headline in
  Libre Caslon Text. No licensed photo exists, so the vignette itself
  carries the mood rather than photography, matching this project's own
  established constraint (no fake UI mockups, no unlicensed stock).
- **Nav:** fixed, transparent over the dark hero (white logo/links via a
  CSS filter + color swap), solidifies to a cream bar with ink text once
  scrolled past the hero — Legora's real nav behavior, not the sticky
  light-bar-from-the-top every other version in this repo uses by default.
- **Buttons:** rounded-rect (10px), not full pill — pill is Sierra's (v10)
  signature, deliberately not reused here so the two concepts don't share a
  shape language.
- **Platform section:** kept and extended the accordion + crossfading
  media-panel component built in an earlier session's Legora audit pass —
  hug-width capsule rows paired with a sticky product-shot panel that
  updates per row, matching legora.com's real "aOS" two-column anatomy.
- **Footer:** dark, minimal, same near-black tone as the hero rather than
  the lighter `--ink` most other versions use.
- **Bento tiles:** retinted from the old yellow-scheme charcoal/slate to
  green-black neutrals, consistent with the rest of the page.

## Content

Same real content bank as every other version — no new facts invented.
Hero headline/subhead is original Envisor copy written in Legora's composed,
institutional register ("A connected system, built for the work of
environmental review") — not a reuse of Legora's own marketing copy.
Underlying facts (product names/descriptions, the 4-step workflow, 3 impact
stats, 3 testimonials, real logos and screenshots) are unchanged from v4's
established content.

## Verification

- CSS brace balance confirmed matching (206/206)
- HTML section (9/9) and div (63/63) tag counts confirmed matching
- Confirmed no dangling references to the old `.hero-band`/`.hero-top`
  markup after the rewrite
- Traced the accordion+media-panel JS (crossfade on row click, unchanged
  mechanism) to confirm it still applies correctly against the new markup
- Nav CTA buttons switched from `.btn-ink` (illegible on a transparent-dark
  nav) to `.btn-primary` (green fill, legible in both the transparent and
  solidified nav states)
- No git commands run as part of this build — commit/push handled centrally

Base commit this was forked from: `5268617`.
