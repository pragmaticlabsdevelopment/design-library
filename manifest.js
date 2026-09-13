/* ---------------------------------------------------------------------------
   Design Library manifest
   ---------------------------------------------------------------------------
   Add a project: push an object onto `projects`.
   Add a version: unshift an object onto that project's `versions` array
                  (newest first — the top one is what loads by default).

   version.status: "current" | "draft" | "superseded" | "archived"
   version.path:   path to the HTML file, relative to this repo's root
--------------------------------------------------------------------------- */

window.DESIGN_LIBRARY = {
  title: "Pragmatic Design Library",
  subtitle: "versioned UI prototypes",
  initial: "P",
  repoUrl: "",

  projects: [
    {
      slug: "get-pragmatic",
      name: "Get Pragmatic",
      description: "Marketing site redesign",
      versions: [
        {
          id: "v2",
          label: "First visual pass",
          date: "2026-09-13",
          status: "draft",
          notes: "Wireframe taken to a visual direction: type scale, color, and spacing applied. Copy is still placeholder — this is about layout and tone, not messaging.",
          path: "projects/get-pragmatic/v2/index.html"
        },
        {
          id: "v1",
          label: "Low-fi wireframe",
          date: "2026-09-13",
          status: "superseded",
          notes: "Structure only — grayscale blocks to settle the page skeleton and section order before any visual decisions.",
          path: "projects/get-pragmatic/v1/index.html"
        }
      ]
    }
  ]
};
