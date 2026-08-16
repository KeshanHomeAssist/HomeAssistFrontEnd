/**
 * Serves dist/ the way xneelo will — static files, directory index.html,
 * 404.html for anything missing. Use it to check a build before deploying.
 *
 *   npm run serve:dist   ->  http://localhost:4173
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, resolve } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const PORT = Number(process.env.PORT) || 4173;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

async function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const candidates = [join(DIST, clean), join(DIST, clean, 'index.html')];
  for (const c of candidates) {
    if (!c.startsWith(DIST)) continue; // no path traversal
    try {
      const s = await stat(c);
      if (s.isFile()) return c;
    } catch { /* try next */ }
  }
  return null;
}

createServer(async (req, res) => {
  const file = await resolveFile(req.url);
  if (!file) {
    const body = await readFile(join(DIST, '404.html')).catch(() => 'Not found');
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(body);
  }
  const body = await readFile(file);
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
  res.end(body);
}).listen(PORT, () => {
  console.log(`serve-dist: http://localhost:${PORT}`);
});
