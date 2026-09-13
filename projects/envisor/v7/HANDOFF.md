# Envisor Marketing Website v7 "Pano AI" — Handoff

## What this is

One of five full, independent redesigns of the Envisor marketing site, each
modeled on a different SaaS reference site's real identity (hero, nav,
color, type, footer — not a shared skeleton with a patch). This is the
**Pano AI** (pano.ai) direction. See `../marketing-website-v4/HANDOFF.md`
for the earlier "Blended Inspirations" base this diverges from, and this
repo's top-level `README.md` history for why v5–v10 exist.

- **Repo:** https://github.com/pragmatic-labs-development/envisor (private)
- **Stack:** Plain HTML/CSS/vanilla JS, no build step
- **Local preview:** `cd marketing-website-v7 && python3 -m http.server 8080`
- **Public mirror:** `pragmatic-labs-development/envisor-demo`, `marketing-v7/`

## Design direction

Modeled on pano.ai's real structure (researched live this session): a
split hero (imagery one side, headline/CTA the other — not a contained
card), a cream/off-white background with a genuinely colorful accent pair
(teal `#0e9c96` primary, warm orange `#e8833d` secondary) rather than
black/yellow, pure sans typography throughout (no serif — Pano AI runs
sans-only), a dropdown mega-nav with a "Talk to Us" CTA, three product
feature cards, a tiered trust/logo grid (kept from an earlier session's
consultant/agency split, restyled), and a single large testimonial set
against a branded gradient shape — Pano AI's own pattern for its featured
quote.

**Hero imagery**: Pano AI's own hero depends on real photographic mood
(their site uses wildfire-camera/aerial footage). No confidently-sourceable
free aerial photograph was pulled in for this pass — rather than risk a
broken or dubiously-licensed external image, the hero uses
`product-shots/mira-site-intelligence-soft.png`, a real Envisor screenshot
with a genuine baked-in soft vignette, framed on the image side of the
split hero. Revisit if a real licensed/CC aerial photo becomes available.

**Copy**: hero headline/subhead is original Envisor copy written in Pano
AI's mission-driven, reliability-first register ("Catch the risk before it
becomes a redline") — not a reuse of Pano AI's own marketing copy. All
facts (stats, testimonials, product descriptions, the 4-step workflow) are
reused verbatim from the existing content bank established in v1–v4.

## Verification

- CSS brace balance and HTML section-tag counts confirmed matching
- Served locally, confirmed 200 response and presence of key structural
  classes (`feature-card`, `trust-tier`, `tf-quote`, `workflow-num`)
- No git commands run as part of this build — commit/push handled centrally
