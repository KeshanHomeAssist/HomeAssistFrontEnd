/**
 * Keeps the shipped asset folder to what the site actually uses.
 *
 * The Claude Design export ships the whole illustration library (~24MB). Only a
 * handful of those images appear on the site, and everything in `public/` is
 * copied into `dist/` verbatim — so without this, every deploy pushes 24MB to
 * xneelo and Cloudflare caches images nobody requests.
 *
 * Nothing is deleted. Unused artwork moves to `design-export/asset-library/`,
 * which stays in git so it is there when you build the next page. Move a file
 * back into `public/assets/illustrations/` to use it.
 *
 * Run with --check to report without moving anything.
 */
import { readFileSync, readdirSync, mkdirSync, renameSync, statSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(here, '..');
const PUBLIC_ILLUSTRATIONS = join(ROOT, 'public/assets/illustrations');
const LIBRARY = join(ROOT, 'design-export/asset-library/illustrations');
const CHECK_ONLY = process.argv.includes('--check');

// Folders whose every file is either referenced dynamically or small enough
// that pruning is not worth the risk of a broken image.
//   logo/          - referenced by name across pages and the design system
//   plates/        - iterated over as a gallery in the warranty article
//   certificates/  - IOPSA certificate shown on /about

/** Every string in the source that looks like an image filename. */
function referencedNames() {
  const names = new Set();
  const dirs = [join(ROOT, 'src'), join(ROOT, 'design-export/website')];
  for (const dir of dirs) {
    for (const file of walk(dir)) {
      const text = readFileSync(file, 'utf8');
      for (const m of text.matchAll(/['"`]([A-Za-z0-9._-]+\.(?:png|jpe?g|gif|svg|webp|avif))['"`]/gi)) {
        names.add(m[1]);
      }
      for (const m of text.matchAll(/\/assets\/[a-z-]+\/([A-Za-z0-9._-]+)/gi)) {
        names.add(m[1]);
      }
    }
  }
  return names;
}

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, files);
    else if (/\.(jsx?|tsx?|css|html)$/.test(entry)) files.push(p);
  }
  return files;
}

const used = referencedNames();
const present = readdirSync(PUBLIC_ILLUSTRATIONS);
const unused = present.filter((f) => !used.has(f));

let freed = 0;
for (const f of unused) freed += statSync(join(PUBLIC_ILLUSTRATIONS, f)).size;

console.log(
  `split-assets: ${present.length - unused.length} illustration(s) in use, ` +
  `${unused.length} unused (${(freed / 1024 / 1024).toFixed(1)} MB)`
);

if (CHECK_ONLY) {
  if (unused.length) console.log('  ' + unused.join('\n  '));
  process.exit(0);
}

if (!unused.length) process.exit(0);

mkdirSync(LIBRARY, { recursive: true });
for (const f of unused) renameSync(join(PUBLIC_ILLUSTRATIONS, f), join(LIBRARY, f));
console.log(`split-assets: moved to design-export/asset-library/illustrations/ (still in git, not shipped)`);
