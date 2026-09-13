#!/usr/bin/env python3
"""
Scaffold a new design version.

    ./new-version.py <project-slug> <version-id> "Label"  [--blank]

Copies the project's newest version as the starting point (or starts blank),
then inserts the new entry at the top of that project's `versions` list
in manifest.js.
"""
import os, re, sys, shutil, datetime

ROOT = os.path.dirname(os.path.abspath(__file__))
MANIFEST = os.path.join(ROOT, "manifest.js")

BLANK = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<style>
  body{{margin:0;font:16px/1.6 ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}}
</style>
</head>
<body>
</body>
</html>
"""

def die(msg):
    print("error: " + msg, file=sys.stderr)
    sys.exit(1)

def main():
    args = [a for a in sys.argv[1:] if a != "--blank"]
    blank = "--blank" in sys.argv[1:]
    if len(args) < 2:
        die('usage: ./new-version.py <project-slug> <version-id> "Label" [--blank]')
    slug, vid = args[0], args[1]
    label = args[2] if len(args) > 2 else vid

    src = open(MANIFEST, encoding="utf-8").read()

    m = re.search(r'slug:\s*"%s"' % re.escape(slug), src)
    if not m:
        die('project "%s" not found in manifest.js' % slug)

    vm = re.search(r'versions:\s*\[', src[m.end():])
    if not vm:
        die('no versions array for project "%s"' % slug)
    insert_at = m.end() + vm.end()

    if re.search(r'id:\s*"%s"' % re.escape(vid), src[m.end():insert_at + 4000]):
        die('version "%s" already exists for %s' % (vid, slug))

    # ---- files ----
    proj_dir = os.path.join(ROOT, "projects", slug)
    new_dir = os.path.join(proj_dir, vid)
    if os.path.exists(new_dir):
        die("%s already exists" % new_dir)
    os.makedirs(new_dir)

    newest = None
    if not blank and os.path.isdir(proj_dir):
        pm = re.search(r'path:\s*"([^"]+)"', src[insert_at:])
        if pm:
            cand = os.path.join(ROOT, pm.group(1))
            if os.path.isfile(cand):
                newest = cand

    dest = os.path.join(new_dir, "index.html")
    if newest:
        shutil.copyfile(newest, dest)
        origin = os.path.relpath(newest, ROOT)
    else:
        open(dest, "w", encoding="utf-8").write(BLANK.format(title="%s — %s" % (slug, vid)))
        origin = "blank starter"

    # ---- manifest ----
    entry = (
        '\n        {\n'
        '          id: "%s",\n'
        '          label: "%s",\n'
        '          date: "%s",\n'
        '          status: "draft",\n'
        '          notes: "",\n'
        '          path: "projects/%s/%s/index.html"\n'
        '        },'
    ) % (vid, label.replace('"', '\\"'), datetime.date.today().isoformat(), slug, vid)

    open(MANIFEST, "w", encoding="utf-8").write(src[:insert_at] + entry + src[insert_at:])

    print("created  projects/%s/%s/index.html  (from %s)" % (slug, vid, origin))
    print("manifest updated — %s %s is now the default version" % (slug, vid))

if __name__ == "__main__":
    main()
