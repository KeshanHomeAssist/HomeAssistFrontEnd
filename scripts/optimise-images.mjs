/**
 * Re-encodes the shipped artwork for the web.
 *
 * The design export's illustrations are print-scale — several are 1MB+ PNGs
 * displayed in a 170px-tall card. Most South African visitors will arrive on a
 * mobile connection where that is the difference between a page that feels
 * instant and one that does not, and it is billed to their data bundle.
 *
 * Caps the longest edge and re-encodes in place. Idempotent: running it twice
 * changes nothing, because already-small images are skipped.
 *
 *   node scripts/optimise-images.mjs [--check]
 *
 * Run it after adding new artwork to public/assets/.
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, resolve, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIRS = ['public/assets/illustrations', 'public/assets/logo', 'public/assets/plates', 'public/assets/certificates'];

const MAX_EDGE = 1400;      // nothing on the site is displayed wider than this
const JPEG_QUALITY = 82;
const CHECK = process.argv.includes('--check');

let before = 0;
let after = 0;
const changed = [];

for (const dir of DIRS) {
  const abs = join(ROOT, dir);
  for (const name of readdirSync(abs)) {
    const ext = extname(name).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue; // GIFs animate; leave them alone

    const file = join(abs, name);
    const size = statSync(file).size;
    before += size;

    const img = sharp(file);
    const meta = await img.metadata();
    const needsResize = Math.max(meta.width, meta.height) > MAX_EDGE;

    // Small, already-efficient files are not worth touching.
    if (!needsResize && size < 150 * 1024) { after += size; continue; }

    let pipeline = sharp(file);
    if (needsResize) pipeline = pipeline.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true });

    pipeline = ext === '.png'
      ? pipeline.png({ compressionLevel: 9, palette: true })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

    const out = await pipeline.toBuffer();

    // Never make a file bigger than it was.
    if (out.length >= size) { after += size; continue; }

    after += out.length;
    changed.push(`  ${dir}/${name}  ${(size / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB`);
    if (!CHECK) writeFileSync(file, out);
  }
}

console.log(
  `optimise-images: ${changed.length} file(s) ${CHECK ? 'would be' : ''} re-encoded, ` +
  `${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`
);
if (changed.length) console.log(changed.join('\n'));
