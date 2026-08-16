# homeassist.co.za — front end

The Home Assist Technologies public website. Static, prerendered, no CMS.

Built from the Home Assist Design System export produced in Claude Design, turned
into a production React app that ships finished HTML.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # produces dist/
npm run verify     # checks the build before it goes anywhere
npm run serve:dist # serves dist/ the way xneelo will, on :4173
```

Node 20 or newer.

---

## How this repo is laid out

```
design-export/          The Claude Design output, unmodified. Source of truth.
  website/*.jsx           The eight page files as exported.
  asset-library/          Artwork not currently used on the site (kept, not shipped).
scripts/
  _ds_bundle.js         The design system bundle, straight from the export.
  build-ds.mjs          Turns that bundle into an ES module (src/ds/index.js).
  adapt-pages.mjs       Turns design-export/website/*.jsx into src/site/*.jsx.
  vendor-icons.mjs      Copies the Lucide icons used into public/icons/.
  prerender.mjs         Renders every route to real HTML + sitemap + 404.
  verify-build.mjs      Pre-deploy checks. Run before every upload.
  split-assets.mjs      Keeps unused artwork out of the shipped build.
  serve-dist.mjs        Local static server that behaves like xneelo.
src/
  App.jsx               Routes.
  seo.js                Titles, descriptions and JSON-LD per route.
  main.jsx              Browser entry (hydrates the prerendered HTML).
  entry-server.jsx      Build-time render entry.
  styles/               Design tokens + site CSS + the responsive layer.
  ds/index.js           GENERATED — do not edit.
  site/*.jsx            GENERATED — do not edit.
public/                 Copied verbatim into dist/ (assets, icons, .htaccess, robots.txt).
deploy/                 Upload script and credential template.
docs/DEPLOY.md          xneelo + Cloudflare runbook and the cutover checklist.
```

**`src/ds/index.js`, `src/site/*.jsx` and `public/icons/` are generated and
gitignored.** `npm run build` and `npm run dev` regenerate them. Edit
`design-export/website/*.jsx` instead — see below.

---

## Changing the site

### Content and layout

Edit the files in `design-export/website/`, then `npm run build`. The codemod in
`scripts/adapt-pages.mjs` re-derives `src/site/` from them every time.

### When you re-export from Claude Design

1. Drop the new `ui_kits/website/*.jsx` into `design-export/website/`.
2. Drop the new `_ds_bundle.js` into `scripts/`.
3. Copy any new artwork into `public/assets/`.
4. `npm run build`.

The codemods are deliberately strict: if the export changes shape in a way they
do not understand, they fail with a message naming the file and the pattern that
moved, rather than silently producing a broken site.

### Page titles, descriptions, JSON-LD

All in `src/seo.js`. Nothing else needs touching. Adding a route means adding an
entry there and a `<Route>` in `src/App.jsx`.

---

## What changed between the design prototype and this repo

The Claude Design export is a click-through prototype. It works in a browser but
is not a website. Specifically, it compiled JSX in the browser with
Babel-standalone, loaded React's development build from a CDN, kept every page at
a single URL, and passed data between files through `window` globals.

For a site whose purpose is to be found in search, that is disqualifying. This
repo changes:

| Prototype | Here | Why |
|---|---|---|
| Babel compiles JSX at page load | Compiled at build time | ~3MB of JS and a blank screen until it finishes |
| React development build from unpkg | Bundled production React | Development builds are slower and much larger |
| One URL for the whole site | A real URL per page and per article | Nothing else can be indexed, linked or shared |
| Metadata printed in an on-screen debug strip | Real `<title>`, description and JSON-LD in `<head>` | Search engines never saw the strip |
| Empty `<div id="root">` until React boots | Prerendered HTML, React hydrates on top | Crawl budget and Core Web Vitals |
| Lucide icons fetched from unpkg per icon | Served from our own origin | Third-party dependency on every page view |
| Whole 24MB illustration library shipped | Only what is used (see `split-assets`) | Deploy size and cache churn |
| Cross-file `window` globals | ES modules | Required for the build-time render to work at all |

The prototype's own README describes it as "the desktop composition". See
**Known gaps** below.

---

## Known gaps

These are real and worth planning, not nitpicks.

**Mobile is a stopgap.** `src/styles/responsive.css` stops the site scrolling
sideways and stacks the grids, using `!important` because the layouts are React
inline styles. The mobile drawer nav and the fixed WhatsApp/Call bar specified in
the original brief were never built. Most South African traffic is mobile —
treat proper mobile design as the next piece of work.

**Six of the seven blog posts have no article body.** Only the El Niño / fire
season piece is written. The rest render "The rest of this article is to be
written" under a real headline. The build marks those `noindex` and keeps them
out of `sitemap.xml`, so they will not be indexed as thin content — but they are
still linked from the blog grid and a visitor can land on them. Either write them
or remove them from `POSTS` before launch. `npm run build` lists which ones.

**`[CONFIRM]` placeholders are visible on the live pages.** `npm run verify`
lists them. They cover response times, guarantees, prices, the joining fee and
service-area list. They are visible to visitors as blue `[CONFIRM]` chips.

**The `/insurers` email gate is cosmetic.** The gated content is in the page
source, so anyone can read it with view-source and search engines will index it.
That is fine while the commercial figures are placeholders. It is not fine once
real fee bands go in — that content needs to move behind something server-side,
or be written on the assumption that it is public.

**Forms do not submit anywhere.** The homeowner request form, the About contact
form and the insurer email gate all have working front-end states and no
endpoint. They need to be wired to something before launch, or they will quietly
lose enquiries.

**Reviews and the map are placeholders.** The reviews section is a layout with
empty containers and no `AggregateRating`; the map is a labelled slot, not an
embed.

**Fonts come from Google Fonts.** `src/styles/tokens/fonts.css` substitutes
Source Sans 3 and Montserrat because no font binaries came with the brand pack.
Self-hosting them would remove a third-party request and is a small job.

---

## Deploying

See `docs/DEPLOY.md`. Short version:

```bash
npm run build
npm run verify
./deploy/deploy.sh staging     # then check it, then:
./deploy/deploy.sh production
```

Purge the Cloudflare cache after every deploy.

---

Home Assist Technologies (Pty) Ltd
