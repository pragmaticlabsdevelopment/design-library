/**
 * Generates manifest.js: every project, from both GitHub accounts, plus the
 * prototype snapshots committed under projects/.
 *
 * Two sources, deliberately:
 *   - CURATED below: projects with real snapshots you can click into.
 *   - The GitHub API: everything else, so nothing is invisible just because it
 *     has no snapshot yet. A library that silently omits half your work is worse
 *     than one that admits a gap.
 *
 * Run: node build-manifest.mjs
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync, existsSync } from 'node:fs';

const OWNERS = ['pragmatic-labs-development', 'pragmaticlabsdevelopment'];
const sh = (c, a) => execFileSync(c, a, { encoding: 'utf8', maxBuffer: 20e6 });

const marketing = (n) =>
  Array.from({ length: 10 }, (_, i) => 10 - i).map((v) => ({
    id: `v${v}`,
    label: `Marketing v${v}`,
    date: '2026-08-24',
    status: v === 10 ? 'current' : 'superseded',
    notes: '',
    path: `projects/${n}/v${v}/index.html`,
  }));

/** Projects with committed snapshots. Order here is the order on the page. */
const CURATED = [
  {
    slug: 'get-pragmatic', name: 'Get Pragmatic', repo: 'pragmatic-website',
    description: 'Pragmatic Labs marketing site',
    versions: [
      { id: 'v2', label: 'Redesign', date: '2026-09-13', status: 'draft', notes: 'Starting point for the next iteration.', path: 'projects/get-pragmatic/v2/index.html' },
      { id: 'v1', label: 'Current live site', date: '2026-09-13', status: 'current', notes: 'As deployed.', path: 'projects/get-pragmatic/v1/index.html' },
    ],
  },
  {
    // One project, not two. `envisor` and `envisor-demo` held near-identical
    // copies of the same ten marketing concepts; only the Launchpad app build
    // genuinely differed, so it becomes one more version on the same card.
    slug: 'envisor', name: 'Envisor', repo: 'envisor',
    // envisor-demo is the public Pages mirror of this same project, not a
    // separate thing. Folded in so it doesn't appear as a second card.
    alsoCovers: ['envisor-demo'],
    description: 'Launchpad app + ten marketing concepts',
    versions: [
      { id: 'launchpad', label: 'Launchpad (app)', date: '2026-08-24', status: 'current', notes: 'The product itself, not the marketing site.', path: 'projects/envisor-demo/launchpad/index.html' },
      ...marketing('envisor-demo'),
    ],
  },
  { slug: 'nudgy-website', name: 'Nudgy — screenshot tool', repo: 'nudgy-legacy-desktop', alsoCovers: ['nudgy-website'], description: 'The original Mac screenshot tool. Archived Sept 2026.', versions: [{ id: 'v1', label: 'Live site', date: '2026-09-13', status: 'archived', notes: 'Frozen when Nudgy became a personal CRM.', path: 'projects/nudgy-website/v1/index.html' }] },
  { slug: 'aipm', name: 'AIPM', repo: 'aipm', description: 'AI product management', versions: [{ id: 'v1', label: 'Live site', date: '2026-09-13', status: 'current', notes: '', path: 'projects/aipm/v1/index.html' }] },
  { slug: 'pickpack', name: 'PickPack', repo: 'pickpack-marketing', description: 'PickPack marketing site', versions: [{ id: 'v1', label: 'Live site', date: '2026-09-13', status: 'current', notes: '', path: 'projects/pickpack/v1/index.html' }] },
  { slug: 'inspection-software', name: 'Inspection Software', repo: 'inspection-software', description: 'Modern OS for inspection businesses', versions: [{ id: 'v1', label: 'Live site', date: '2026-09-13', status: 'current', notes: '', path: 'projects/inspection-software/v1/index.html' }] },
  { slug: 'chads-gpt', name: "Chad's GPT", repo: 'chads-gpt', description: 'ChatGPT parody marketing site', versions: [{ id: 'v1', label: 'Live site', date: '2026-09-13', status: 'current', notes: '', path: 'projects/chads-gpt/v1/index.html' }] },
];

// Drop any curated version whose snapshot isn't actually on disk, so the page
// never renders an iframe pointing at a 404.
for (const p of CURATED) {
  const before = p.versions.length;
  p.versions = p.versions.filter((v) => existsSync(v.path));
  if (p.versions.length !== before) {
    console.warn(`  ${p.slug}: dropped ${before - p.versions.length} version(s) with no snapshot`);
  }
}

const repos = OWNERS.flatMap((owner) =>
  JSON.parse(sh('gh', ['repo', 'list', owner, '--limit', '100', '--json',
    'name,description,visibility,isArchived,pushedAt,url,primaryLanguage'])).map((r) => ({ ...r, owner })),
);

/**
 * Display names. Repo slugs are for machines; this page is for a person.
 */
const NAMES = {
  'nudgy': 'Nudgy',
  // description comes from the repo; it's the personal CRM
  'design-library': 'Design Library',
  'projects-index': 'Projects Index',
  'box-ops': 'Box Ops',
  'domain-bot': 'Domain Bot',
  'pickup-soccer-bot': 'Pickup Soccer Bot',
  'anaconda-ai-governance-dashboard': 'Anaconda AI Governance',
  'TeachGPT': 'TeachGPT',
  'HAL': 'HAL',
};

/**
 * Repos that are part of another card's product rather than their own thing.
 * nudgy-site is the CRM's marketing site — one product, two repos, one card.
 */
const FOLDED_INTO = { 'nudgy-site': 'nudgy' };

/**
 * Not projects. `demo-repository` is GitHub's own sample repo; HAL is a
 * scratchpad. Listing them makes the library look padded rather than complete.
 */
const NOT_PROJECTS = new Set(['demo-repository', 'HAL']);

const CUSTOM_LIVE = {
  'nudgy-website': 'https://get-nudged.online',
  'chads-gpt': 'https://chads-gpt.com',
  'box-ops': 'https://box-ops.vercel.app',
};

function liveUrl(r) {
  if (CUSTOM_LIVE[r.name]) return CUSTOM_LIVE[r.name];
  try {
    const url = `https://${r.owner}.github.io/${r.name}/`;
    return sh('curl', ['-sL', '-o', '/dev/null', '-w', '%{http_code}', url, '--max-time', '8']).trim() === '200' ? url : null;
  } catch { return null; }
}

const claimed = new Set(CURATED.flatMap((p) => [p.repo, ...(p.alsoCovers ?? [])]));
const rest = repos
  .filter((r) => !claimed.has(r.name) && !NOT_PROJECTS.has(r.name) && !FOLDED_INTO[r.name])
  .sort((a, b) => b.pushedAt.localeCompare(a.pushedAt))
  .map((r) => ({
    slug: r.name,
    name: NAMES[r.name] ?? r.name,
    description: r.description || '',
    repoUrl: r.url,
    liveUrl: liveUrl(r),
    visibility: r.visibility,
    archived: r.isArchived,
    language: r.primaryLanguage?.name ?? null,
    updated: r.pushedAt.slice(0, 10),
    versions: [],            // no snapshot committed yet
  }));

// Attach folded repos as extra links on their parent card.
for (const [child, parent] of Object.entries(FOLDED_INTO)) {
  const c = repos.find((r) => r.name === child);
  const target = rest.find((r) => r.slug === parent) ?? CURATED.find((r) => r.slug === parent);
  if (c && target) {
    target.alsoUrl = liveUrl(c) ?? c.url;
    target.alsoLabel = 'Marketing site';
    if (!target.description) target.description = c.description || '';
  }
}

// Attach repo metadata to the curated ones too.
const byName = Object.fromEntries(repos.map((r) => [r.name, r]));
for (const p of CURATED) {
  const r = byName[p.repo];
  if (r) {
    p.repoUrl = r.url;
    p.liveUrl = liveUrl(r);
    p.visibility = r.visibility;
    p.archived = r.isArchived;
    p.language = r.primaryLanguage?.name ?? null;
    p.updated = r.pushedAt.slice(0, 10);
  }
  delete p.repo;
  delete p.alsoCovers;
}

// Previewable projects first — the point of the page is looking at work.
// Everything else by recency, so active repos beat dormant ones.
const ordered = [...CURATED, ...rest];

const out = `/* GENERATED by build-manifest.mjs — do not edit by hand.
   Snapshots live in projects/. Everything else comes from the GitHub API, so a
   project with no snapshot still appears rather than silently vanishing.
   Regenerate: node build-manifest.mjs */

window.DESIGN_LIBRARY = ${JSON.stringify({
  title: 'Pragmatic Design Library',
  subtitle: 'versioned UI prototypes',
  initial: 'P',
  repoUrl: 'https://github.com/pragmaticlabsdevelopment/design-library',
  projects: ordered,
}, null, 2)};
`;

writeFileSync('manifest.js', out);
const withSnaps = ordered.filter((p) => p.versions.length).length;
console.log(`\nmanifest.js: ${ordered.length} projects (${withSnaps} with previews, ${rest.length} listed only)`);
