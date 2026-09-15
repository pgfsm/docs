import react from '@vitejs/plugin-react';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fumadocsMdx } from 'fumadocs-mdx/vite';
import { nitro } from 'nitro/vite';

export default defineConfig({
  // Served on GitHub Pages as a project page at https://pgfsm.github.io/docs/,
  // so all built asset URLs need the /docs/ prefix.
  base: '/docs/',
  server: {
    port: 3000,
  },
  plugins: [
    fumadocsMdx(),
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
      },

      pages: [
        {
          path: '/',
        },
        {
          path: '/docs',
        },
        {
          path: '/api/search',
        },
        {
          path: 'llms-full.txt',
        },
        {
          path: 'llms.txt',
        },
      ],
    }),
    react(),
    // please see https://tanstack.com/start/latest/docs/framework/react/guide/hosting#nitro for guides on hosting
    nitro({
      // Emit the static site into the repo root `docs/` folder (see
      // repository CLAUDE.md) instead of the default `.output/public`.
      output: {
        publicDir: '../../docs',
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      tslib: 'tslib/tslib.es6.js',
    },
  },
});
