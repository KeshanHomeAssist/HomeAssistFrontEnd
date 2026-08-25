/**
 * Checks a build before it goes anywhere near the live domain.
 *
 * Catches the failures that are invisible until someone else finds them:
 * an icon or image that 404s, a page with no <title> or description, a missing
 * canonical, two <h1>s on a page, and any `[CONFIRM]` placeholder that was
 * never filled in. The current WordPress site went live with lorem ipsum on
 * /services/ and PHP warnings on /shop/ — this is the gate that stops a repeat.
 *
 *   npm run verify
 *
 * Exits non-zero on errors so it can gate a deploy or a CI run.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

if (!existsSync(DIST)) {
  console.error('verify: no dist/ — run `npm run build` first');
  process.exit(1);
}

const errors = [];
const warnings = [];

function htmlFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) htmlFiles(p, out);
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

const pages = htmlFiles(DIST);

/* ---------- public/_redirects ----------

   Two live incidents on 25 August 2026 came out of this file, so it is checked
   here rather than trusted.

   1. `/about/ -> /about` took /about and /blog down with ERR_TOO_MANY_REDIRECTS.
      Cloudflare Pages matches these sources ignoring the trailing slash, so a
      rule whose source and destination are the same path redirects that path to
      itself, forever. Only a direct hit shows it - in-app navigation uses the
      router and never asks the server, so the site looks fine while Google
      results are dead.

   2. Two rules pointed at blog articles that do not exist, so an old URL with
      inbound links 301'd straight into a 404.

   Both are cheap to check and invisible without checking. */
const redirectsFile = join(DIST, '_redirects');
if (existsSync(redirectsFile)) {
  const rules = readFileSync(redirectsFile, 'utf8')
    .split('\n')
    .map((line, i) => ({ line: i + 1, text: line.trim() }))
    .filter((r) => r.text.startsWith('/'))
    .map((r) => {
      const [from, to, status] = r.text.split(/\s+/);
      return { ...r, from, to, status };
    });

  const exists = (path) => {
    if (path === '/' || path.startsWith('/#')) return true;
    const clean = path.split('#')[0].split('?')[0].replace(/\/$/, '');
    return existsSync(join(DIST, clean, 'index.html')) || existsSync(join(DIST, clean));
  };

  for (const r of rules) {
    if (r.from.replace(/\/$/, '') === r.to.replace(/\/$/, '')) {
      errors.push(`_redirects line ${r.line}: "${r.from} -> ${r.to}" redirects a path to itself - Pages ignores the trailing slash when matching, so this is an infinite loop`);
    }
    if (r.to.startsWith('/') && !exists(r.to)) {
      errors.push(`_redirects line ${r.line}: "${r.from}" points at ${r.to}, which is not in this build - a 301 into a 404`);
    }
  }

  console.log(`verify: ${rules.length} redirect rules checked`);
}


for (const file of pages) {
  const rel = '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\/$/, '');
  const label = rel || '/';
  const html = readFileSync(file, 'utf8');

  // --- head metadata ---
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!title) errors.push(`${label}: no <title>`);
  else if (title.length > 65) warnings.push(`${label}: title is ${title.length} chars — Google truncates around 60`);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) errors.push(`${label}: no meta description`);
  else if (desc.length > 165) warnings.push(`${label}: meta description is ${desc.length} chars — aim for under 160`);

  if (!/rel="canonical"/.test(html)) errors.push(`${label}: no canonical link`);

  // --- content sanity ---
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s === 0) errors.push(`${label}: no <h1>`);
  if (h1s > 1) warnings.push(`${label}: ${h1s} <h1> elements — there should be one`);

  if (html.includes('<div id="root"></div>')) {
    errors.push(`${label}: rendered empty — prerender produced no markup`);
  }

  if (/\[CONFIRM/.test(html)) {
    const n = (html.match(/\[CONFIRM/g) || []).length;
    warnings.push(`${label}: ${n} unresolved [CONFIRM] placeholder(s) visible on the page`);
  }
  if (/lorem ipsum/i.test(html)) errors.push(`${label}: lorem ipsum in the output`);

  // Unwritten article bodies are fine as long as they are not being offered to
  // search engines as real pages.
  if (/is to be written/i.test(html) && !/name="robots" content="noindex/.test(html)) {
    errors.push(`${label}: placeholder article body but not marked noindex`);
  }

  // --- local references resolve ---
  const refs = new Set();
  for (const m of html.matchAll(/(?:src|href)="(\/[^"?#]*)"/g)) refs.add(m[1]);
  for (const m of html.matchAll(/url\(&quot;(\/[^&]*?)&quot;\)/g)) refs.add(m[1]);
  for (const m of html.matchAll(/url\("(\/[^"]*?)"\)/g)) refs.add(m[1]);

  for (const ref of refs) {
    if (ref.startsWith('//')) continue;
    const onDisk = join(DIST, ref);
    const ok = existsSync(onDisk) || existsSync(join(onDisk, 'index.html'));
    if (!ok) errors.push(`${label}: broken reference ${ref}`);
  }
}

// --- site-level files ---
for (const f of ['sitemap.xml', 'robots.txt', '404.html', '.htaccess', 'favicon.ico']) {
  if (!existsSync(join(DIST, f))) errors.push(`missing ${f} in dist/`);
}

const sitemap = existsSync(join(DIST, 'sitemap.xml')) ? readFileSync(join(DIST, 'sitemap.xml'), 'utf8') : '';
const sitemapUrls = (sitemap.match(/<loc>/g) || []).length;

console.log(`verify: ${pages.length} pages, ${sitemapUrls} URLs in sitemap`);

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ! ${w}`);
}

if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors) console.log(`  x ${e}`);
  process.exit(1);
}

console.log('\nverify: passed');
