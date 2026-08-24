/**
 * Turns the Claude Design website UI kit into real ES modules.
 *
 * The design export is a browser prototype: every file drops its helpers onto
 * `window` and Babel compiles the JSX in the browser at page load. That is fine
 * for a click-through but not for a public site — it means ~3MB of JS, React in
 * development mode, no per-page URLs and nothing for Google to index quickly.
 *
 * This codemod reads the pristine export from `design-export/website/` and
 * writes proper modules into `src/site/`:
 *   - `window.HomeAssistDesignSystem_<hash>` destructuring  ->  `import ... from '../ds'`
 *   - implicit cross-file globals                           ->  explicit `import ... from './Chrome'`
 *   - Chrome's `Object.assign(window, {...})`               ->  named exports
 *   - relative `../../assets/...` paths                     ->  absolute `/assets/...`
 *   - each page gets an explicit `export`
 *
 * WHY A CODEMOD AND NOT HAND EDITS: when you re-export the design system from
 * Claude Design, drop the new files into `design-export/website/`, run
 * `npm run prepare:ds`, and your production site picks the changes up. Hand
 * edits would have to be redone every time.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const IN = resolve(here, '../design-export/website');
const OUT = resolve(here, '../src/site');

// Everything Chrome.jsx used to publish on `window`.
const CHROME_EXPORTS = [
  'CH', 'wa', 'mailtoLink', 'whatsappHandoff', 'NAV', 'WRAP', 'LABEL', 'H1', 'H2', 'H3', 'DISPLAY', 'BODY',
  'SMALL', 'CARD', 'INPUT', 'Eyebrow', 'Section', 'Header', 'Footer',
  'NavyBand', 'LabelCard', 'Stat', 'Steps', 'Accordion', 'FieldRow',
  'ChannelCard', 'Confirm',
];

// What each generated module must export for App.jsx to route to it.
const PAGE_EXPORTS = {
  'HomePage.jsx': ['HomePage'],
  'InsurersPage.jsx': ['InsurersPage'],
  'PropertyManagersPage.jsx': ['PropertyManagersPage'],
  'ManagingAgentsPage.jsx': ['ManagingAgentsPage'],
  'JoinPage.jsx': ['JoinPage'],
  'PortalPage.jsx': ['PortalPage'],
  'AboutPage.jsx': ['AboutPage'],
  'BlogPage.jsx': ['BlogPage', 'POSTS'],
  'LegalPage.jsx': ['TermsPage', 'PrivacyPage'],
};

// Site.jsx is the prototype's page-switcher plus a debug strip that printed the
// title tag and JSON-LD types on screen. src/App.jsx replaces it with real
// routes, and src/seo.js carries that metadata properly into <head>.
const SKIP = new Set(['Site.jsx']);

const dsImportLine = /^const \{([^}]*)\} = window\.[A-Za-z0-9_]+;\s*\n/m;

// Component names available from the design system, read from the bundle
// manifest so this stays correct when the export changes.
const DS_COMPONENTS = JSON.parse(
  readFileSync(resolve(here, '_ds_bundle.js'), 'utf8').match(/\/\* @ds-bundle:\s*(\{[\s\S]*?\})\s*\*\//)[1]
).components.map((c) => c.name);

mkdirSync(OUT, { recursive: true });

const report = [];

for (const file of readdirSync(IN).filter((f) => f.endsWith('.jsx'))) {
  if (SKIP.has(file)) continue;
  const isChrome = file === 'Chrome.jsx';
  let src = readFileSync(join(IN, file), 'utf8');
  const notes = [];

  // 1. Design-system components: window namespace -> ES import.
  //    Some files (LegalPage) never destructured the namespace at all — they
  //    just used whatever an earlier <script> had already put on `window`. So
  //    on top of the explicit destructure we scan for design-system components
  //    used as JSX tags, skipping any the file defines for itself.
  const dsNames = new Set();
  const dsMatch = src.match(dsImportLine);
  if (dsMatch) {
    for (const n of dsMatch[1].split(',').map((s) => s.trim()).filter(Boolean)) dsNames.add(n);
    src = src.replace(dsImportLine, '');
  }
  for (const name of DS_COMPONENTS) {
    const usedAsTag = new RegExp(`<${name}[\\s/>]`).test(src);
    const definedLocally = new RegExp(`\\b(function|const|let|var)\\s+${name}\\b`).test(src);
    if (usedAsTag && !definedLocally) dsNames.add(name);
  }
  if (dsNames.size) notes.push(`ds:${[...dsNames].join('+')}`);

  // 2. Assets move from a relative prototype path to the site root.
  const assetHits = (src.match(/\.\.\/\.\.\/assets\//g) || []).length;
  if (assetHits) {
    src = src.replace(/\.\.\/\.\.\/assets\//g, '/assets/');
    notes.push(`assets:${assetHits}`);
  }

  // 3. Nothing writes to `window` any more.
  //    Every file in the prototype ends by publishing its components globally
  //    so the next <script type="text/babel"> can see them. In a module world
  //    that is both unnecessary and fatal during the server-side prerender,
  //    where there is no `window` at all.
  const assignRe = /^Object\.assign\(window,\s*\{[\s\S]*?\}\);[ \t]*$/m;
  const hadAssign = assignRe.test(src);
  if (isChrome) {
    if (!hadAssign) {
      throw new Error('adapt-pages: Chrome.jsx no longer ends with Object.assign(window, {...}) — check the export');
    }
    src = src.replace(assignRe, `export {\n${CHROME_EXPORTS.map((n) => `  ${n},`).join('\n')}\n};`);
    notes.push(`exports:${CHROME_EXPORTS.length}`);
  } else if (hadAssign) {
    src = src.replace(assignRe, '');
    notes.push('globals-removed');
  }

  // 4. Pull in whichever Chrome helpers this file actually references.
  const imports = ["import React from 'react';"];
  if (dsNames.size) imports.push(`import { ${[...dsNames].join(', ')} } from '../ds';`);
  if (!isChrome) {
    const used = CHROME_EXPORTS.filter((n) => new RegExp(`\\b${n}\\b`).test(src));
    if (used.length) imports.push(`import { ${used.join(', ')} } from './Chrome';`);
    notes.push(`chrome:${used.length}`);
  }

  // 5. Blog articles need their own URLs.
  //    In the prototype an article was component state, so every post lived at
  //    /blog and none of them could be indexed, linked or shared. This lifts the
  //    selection into props so App.jsx can drive it from /blog/<slug>.
  if (file === 'BlogPage.jsx') {
    const patches = [
      [
        'function BlogPage() {',
        'function BlogPage({ initialPost = null, onSelectPost, onBack }) {',
      ],
      [
        'const [post, setPost] = React.useState(null);',
        'const post = initialPost;\n  const setPost = (i) => (i === null ? onBack && onBack() : onSelectPost && onSelectPost(i));',
      ],
      [
        'back={() => setPost(null)}',
        'back={() => setPost(null)}',
      ],
    ];
    for (const [from, to] of patches) {
      if (!src.includes(from)) {
        throw new Error(
          `adapt-pages: BlogPage.jsx no longer contains "${from}".\n` +
          '  The blog routing patch needs updating for the new design export.'
        );
      }
      src = src.replace(from, to);
    }
    notes.push('blog-routing');
  }

  // 6. Explicit exports for the router.
  let tail = '';
  const wanted = PAGE_EXPORTS[file];
  if (wanted) {
    for (const name of wanted) {
      if (!new RegExp(`\\b(function|const|let|var)\\s+${name}\\b`).test(src)) {
        throw new Error(`adapt-pages: ${file} does not define ${name} — the design export changed shape`);
      }
    }
    tail = `\nexport { ${wanted.join(', ')} };\n`;
  }

  const header =
    `// GENERATED by scripts/adapt-pages.mjs from design-export/website/${file}\n` +
    `// Edit the file in design-export/website/, not this one.\n`;

  writeFileSync(join(OUT, file), header + imports.join('\n') + '\n\n' + src.trimStart() + tail, 'utf8');
  report.push(`  ${basename(file).padEnd(18)} ${notes.join('  ')}`);
}

console.log('adapt-pages: wrote src/site/');
console.log(report.join('\n'));
