# Design Library

A single public page that indexes UI prototypes by project and version.
Every version is a real, clickable HTML page — open it in the gallery, resize it
to phone/tablet/desktop, or put two versions side by side to see what changed.

## Using it

- **Sidebar** — projects, each expanding to its versions (newest at top).
- **Device toggles** — Desktop / Laptop / Tablet / Phone, scaled to fit.
- **Compare** — two versions of the same project, side by side, same viewport.
- **Copy link** — every version has its own URL (`#/get-pragmatic/v2`), so you
  can send someone a specific version. Compare views are linkable too
  (`#/get-pragmatic/v2...v1`).
- **Open ↗** — the design on its own, full size, outside the gallery frame.

## Adding a version

```sh
./new-version.py get-pragmatic v3 "Tighter hero"
```

That copies the newest version as your starting point, drops it at
`projects/get-pragmatic/v3/index.html`, and adds it to the top of the manifest
as a draft. Edit the HTML, then commit and push — GitHub Pages redeploys on its
own.

Pass `--blank` to start from an empty page instead of copying.

## Adding a project

Add an object to `projects` in `manifest.js`:

```js
{
  slug: "new-thing",          // used in the URL
  name: "New Thing",
  description: "What it is",
  versions: []
}
```

Then `./new-version.py new-thing v1 "First pass" --blank`.

## Layout

```
index.html                 the gallery — the only page that is "the app"
manifest.js                projects and versions live here
new-version.py             scaffolds a new version + manifest entry
projects/<slug>/<id>/      one folder per version, index.html inside
```

Version `status` drives the badge and sidebar dot:
`current` · `draft` · `superseded` · `archived`.

## Working locally

Open `index.html` directly in a browser — it works from `file://`. Or serve it:

```sh
python3 -m http.server 8000
```

## Note on the seeded designs

`get-pragmatic` v1 and v2 are starting points, not finished work — v1 is a
structural wireframe and v2 takes it to a first visual direction. All copy in
them is placeholder.
