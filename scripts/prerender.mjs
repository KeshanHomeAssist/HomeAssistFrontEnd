/**
 * Prerenders every route to a real HTML file.
 *
 * Why this exists: a plain SPA ships an empty <div id="root"> and paints the
 * page only after React boots. Google can execute JavaScript, but it queues
 * that work and it costs you crawl budget and Core Web Vitals — a poor trade
 * for a site whose whole job is to be found. Prerendering means every URL
 * returns finished HTML with its own <title>, description and JSON-LD, and
 * React hydrates on top for the interactive bits (accordions, the blog reader,
 * the forms).
 *
 * It also means xneelo can serve the site as static files with no Node runtime
 * and no rewrite rules for the routes themselves.
 *
 * Output: dist/index.html, dist/<route>/index.html, dist/blog/<slug>/index.html,
 * plus sitemap.xml, robots.txt and a 404.html.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(here, '..');
const DIST = join(ROOT, 'dist');
const SSR = join(ROOT, 'dist-ssr');

const { render, POST_SLUGS, POSTS } = await import(join(SSR, 'entry-server.js'));
// seo.js is plain ESM with no JSX, so Node can load the source directly.
const { ROUTES, SITE_URL, articleMeta, jsonLd, isStub } = await import(resolve(ROOT, 'src/seo.js'));

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('prerender: index.html is missing the <!--app-html--> / <!--app-head--> markers');
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function head({ title, description, canonical, image, schema, noindex }) {
  const lines = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    noindex ? '<meta name="robots" content="noindex,follow" />' : '<meta name="robots" content="index,follow" />',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="Home Assist" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:locale" content="en_ZA" />`,
    image ? `<meta property="og:image" content="${esc(image)}" />` : '',
    '<meta name="twitter:card" content="summary_large_image" />',
    schema && schema.length ? `<script type="application/ld+json">${jsonLd(schema)}</script>` : '',
  ];
  return lines.filter(Boolean).join('\n    ');
}

function writePage(route, meta) {
  const canonical = SITE_URL + (route === '/' ? '/' : route);
  const html = render(route);
  const page = template
    .replace('<!--app-head-->', head({ ...meta, canonical }))
    .replace('<!--app-html-->', html);

  const dir = route === '/' ? DIST : join(DIST, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page, 'utf8');
  return canonical;
}

const urls = [];
let pageCount = 0;

// Static routes
for (const [route, meta] of Object.entries(ROUTES)) {
  const canonical = writePage(route, meta);
  pageCount++;
  if (!meta.noindex) urls.push({ loc: canonical, priority: route === '/' ? '1.0' : '0.8' });
  console.log(`prerender: ${route}`);
}

// One URL per blog article
let stubs = 0;
POSTS.forEach((post, i) => {
  const route = `/blog/${POST_SLUGS[i]}`;
  const canonical = writePage(route, articleMeta(post));
  pageCount++;
  // Unwritten posts still get a page so the blog grid links work, but they are
  // kept out of the sitemap and marked noindex until someone writes them.
  if (isStub(post)) { stubs++; console.log(`prerender: ${route}  (stub — noindex)`); return; }
  urls.push({ loc: canonical, priority: '0.7' });
  console.log(`prerender: ${route}`);
});
if (stubs) console.log(`prerender: ${stubs} blog post(s) have no body yet — excluded from the sitemap`);

// 404 — Apache serves this via ErrorDocument (see public/.htaccess)
{
  const html = render('/__not-found__');
  writeFileSync(
    join(DIST, '404.html'),
    template
      .replace('<!--app-head-->', head({
        title: 'Page not found | Home Assist',
        description: 'That page has moved or no longer exists.',
        canonical: `${SITE_URL}/404`,
        noindex: true,
        schema: [],
      }))
      .replace('<!--app-html-->', html),
    'utf8'
  );
  pageCount++;
  console.log('prerender: 404.html');
}

// sitemap.xml
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`).join('\n') +
  '\n</urlset>\n';
writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf8');
console.log(`prerender: sitemap.xml (${urls.length} URLs)`);

// The SSR bundle is a build artefact, not something to upload.
rmSync(SSR, { recursive: true, force: true });

console.log(`\nprerender: done — ${pageCount} HTML files in dist/, ${urls.length} in sitemap`);
