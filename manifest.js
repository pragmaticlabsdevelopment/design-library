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
  repoUrl: "https://github.com/pragmatic-labs-development/design-library",

  projects: [
    {
      slug: "get-pragmatic",
      name: "Get Pragmatic",
      description: "Pragmatic Labs marketing site",
      versions: [
        {
          id: "v2",
          label: "Redesign",
          date: "2026-09-13",
          status: "draft",
          notes: "Starting point for the next iteration. Copy of v1 — ready for changes.",
          path: "projects/get-pragmatic/v2/index.html"
        },
        {
          id: "v1",
          label: "Current live site",
          date: "2026-09-13",
          status: "current",
          notes: "The production marketing site as deployed on get-pragmatic.com.",
          path: "projects/get-pragmatic/v1/index.html"
        }
      ]
    },
    {
      slug: "envisor-demo",
      name: "Envisor Marketing",
      description: "Envisor Launchpad marketing site concepts",
      versions: [
        {
          id: "v10",
          label: "Marketing v10",
          date: "2026-08-24",
          status: "current",
          notes: "",
          path: "projects/envisor-demo/v10/index.html"
        },
        {
          id: "v9",
          label: "Marketing v9",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v9/index.html"
        },
        {
          id: "v8",
          label: "Marketing v8",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v8/index.html"
        },
        {
          id: "v7",
          label: "Marketing v7",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v7/index.html"
        },
        {
          id: "v6",
          label: "Marketing v6",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v6/index.html"
        },
        {
          id: "v5",
          label: "Marketing v5",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v5/index.html"
        },
        {
          id: "v4",
          label: "Marketing v4",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v4/index.html"
        },
        {
          id: "v3",
          label: "Marketing v3",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v3/index.html"
        },
        {
          id: "v2",
          label: "Marketing v2",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v2/index.html"
        },
        {
          id: "v1",
          label: "Marketing v1",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor-demo/v1/index.html"
        }
      ]
    },
    {
      slug: "envisor",
      name: "Envisor Launchpad",
      description: "Envisor Launchpad app + marketing",
      versions: [
        {
          id: "v10",
          label: "Marketing v10",
          date: "2026-08-24",
          status: "current",
          notes: "",
          path: "projects/envisor/v10/index.html"
        },
        {
          id: "v9",
          label: "Marketing v9",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v9/index.html"
        },
        {
          id: "v8",
          label: "Marketing v8",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v8/index.html"
        },
        {
          id: "v7",
          label: "Marketing v7",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v7/index.html"
        },
        {
          id: "v6",
          label: "Marketing v6",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v6/index.html"
        },
        {
          id: "v5",
          label: "Marketing v5",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v5/index.html"
        },
        {
          id: "v4",
          label: "Marketing v4",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v4/index.html"
        },
        {
          id: "v3",
          label: "Marketing v3",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v3/index.html"
        },
        {
          id: "v2",
          label: "Marketing v2",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v2/index.html"
        },
        {
          id: "v1",
          label: "Marketing v1",
          date: "2026-08-24",
          status: "superseded",
          notes: "",
          path: "projects/envisor/v1/index.html"
        }
      ]
    },
    {
      slug: "nudgy-website",
      name: "Nudgy",
      description: "Mac screenshot tool marketing site",
      versions: [
        {
          id: "v1",
          label: "Marketing site",
          date: "2026-07-13",
          status: "current",
          notes: "",
          path: "projects/nudgy-website/v1/index.html"
        }
      ]
    },
    {
      slug: "aipm",
      name: "AIPM",
      description: "AI product management",
      versions: [
        {
          id: "v1",
          label: "Marketing site",
          date: "2026-08-22",
          status: "current",
          notes: "",
          path: "projects/aipm/v1/index.html"
        }
      ]
    },
    {
      slug: "pickpack",
      name: "PickPack",
      description: "PickPack marketing site",
      versions: [
        {
          id: "v1",
          label: "Marketing site",
          date: "2026-05-22",
          status: "current",
          notes: "",
          path: "projects/pickpack/v1/index.html"
        }
      ]
    },
    {
      slug: "inspection-software",
      name: "Inspection Software",
      description: "Modern OS for inspection businesses",
      versions: [
        {
          id: "v1",
          label: "Marketing site",
          date: "2026-05-25",
          status: "current",
          notes: "",
          path: "projects/inspection-software/v1/index.html"
        }
      ]
    },
    {
      slug: "chads-gpt",
      name: "Chad's GPT",
      description: "ChatGPT parody marketing site",
      versions: [
        {
          id: "v1",
          label: "Marketing site",
          date: "2026-04-04",
          status: "current",
          notes: "",
          path: "projects/chads-gpt/v1/index.html"
        }
      ]
    }
  ]
};
