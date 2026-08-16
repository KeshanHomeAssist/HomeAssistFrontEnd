import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // xneelo serves these as plain files behind Cloudflare; hashed names let us
    // cache them hard and for a long time without stale-asset problems.
    assetsDir: 'assets/build',
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});
