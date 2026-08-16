/**
 * Copies the Lucide icons the site uses into `public/icons/`.
 *
 * The design export's Icon component pointed at unpkg.com and loaded each glyph
 * as a CSS mask at runtime. That is a third-party request per icon on every
 * page view, and a site full of blank squares if unpkg has a bad day. We serve
 * them from our own origin instead (see scripts/build-ds.mjs, which rewrites
 * the CDN constant).
 *
 * Icon names are not always written as `<Icon name="x" />` — several pages keep
 * them inside data arrays (`['01', 'Title', 'headset', ...]`). Rather than try
 * to parse those, this collects every kebab-case string literal in src/ and
 * keeps the ones that are real Lucide icons. Copying a handful of unused ~400
 * byte SVGs is much cheaper than shipping a page with missing icons.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, rmSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = resolve(here, '../src');
const LUCIDE = resolve(here, '../node_modules/lucide-static/icons');
const OUT = resolve(here, '../public/icons');

// Chosen at runtime from component state, so they never appear as a literal
// anywhere a scan would find them.
const ALWAYS = ['plus', 'minus', 'chevron-up', 'chevron-down', 'x', 'menu'];

// Lucide renamed some icons between versions. The design export still uses the
// old names, so we write the current glyph out under the name the page asks
// for. Add to this if `npm run verify` reports a missing icon.
const ALIASES = {
  'bar-chart-3': 'chart-column',
  'bar-chart': 'chart-bar',
  'pie-chart': 'chart-pie',
  'line-chart': 'chart-line',
};

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, files);
    else if (/\.(jsx?|tsx?)$/.test(entry)) files.push(p);
  }
  return files;
}

const available = new Set(
  readdirSync(LUCIDE).filter((f) => f.endsWith('.svg')).map((f) => f.slice(0, -4))
);

/** Which file on disk supplies the glyph a page asks for. */
function sourceFor(name) {
  if (available.has(name)) return name;
  const alias = ALIASES[name];
  return alias && available.has(alias) ? alias : null;
}

const wanted = new Map(); // requested name -> lucide file to copy
for (const name of ALWAYS) {
  const src = sourceFor(name);
  if (src) wanted.set(name, src);
}
for (const file of walk(SRC_DIR)) {
  const text = readFileSync(file, 'utf8');
  for (const m of text.matchAll(/['"`]([a-z][a-z0-9]*(?:-[a-z0-9]+)*)['"`]/g)) {
    const src = sourceFor(m[1]);
    if (src) wanted.set(m[1], src);
  }
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

let bytes = 0;
let aliased = 0;
for (const [name, src] of [...wanted].sort()) {
  const svg = readFileSync(join(LUCIDE, `${src}.svg`));
  bytes += svg.length;
  if (name !== src) aliased++;
  writeFileSync(join(OUT, `${name}.svg`), svg);
}

console.log(
  `vendor-icons: ${wanted.size} icons -> public/icons/ (${(bytes / 1024).toFixed(0)} KB` +
  (aliased ? `, ${aliased} via alias` : '') + ')'
);
