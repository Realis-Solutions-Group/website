import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: site is at https://<owner>.github.io/<repo>/
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repoName ? `/${repoName}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
