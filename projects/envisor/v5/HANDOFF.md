# Envisor Marketing Website v5 "Harvey Audit" — Handoff

## What this is

One of six parallel design-critique passes run against `marketing-website-v4`
("Blended Inspirations"), each auditing the v4 base against one additional
SaaS reference site and implementing structural fixes directly. v4 itself
remains the base/parent direction — see `../marketing-website-v4/HANDOFF.md`
for the full multi-source blend history (Legora/Hebbia/Sierra/Harvey) this
was forked from. This version isolates just the **Harvey.ai** pass so it can
be reviewed on its own before any of the six audits are folded back in.

- **Repo:** https://github.com/pragmatic-labs-development/envisor (private)
- **Stack:** Plain HTML/CSS/vanilla JS, no build step — same as v1–v4
- **Local preview:** `cd marketing-website-v5 && python3 -m http.server 8080`
- **Public mirror:** `pragmatic-labs-development/envisor-demo`, `marketing-v5/`

## What changed vs. v4

Forked from v4 at commit `5268617`, then audited a second time specifically
against harvey.ai's own live spacing/radius vocabulary:

- Collapsed the page's radius vocabulary down to Harvey's own two-value
  system (4px / 8px), replacing what had drifted into several inconsistent
  radius values across cards, buttons, and bento tiles.
- Adopted Harvey's 64/128/160 spacing ladder for section rhythm, in place of
  the prior 104/152/168 scale.

Base commit this was forked from: `5268617` ("Document next-session plan:
re-run design-critique agents to completion" on `envisor` main).
