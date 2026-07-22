// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// Static output: every page is prerendered at build time (fast, cached at the edge).
// The Cloudflare adapter still ships a real Worker so it deploys via `wrangler deploy`.
export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    // Keep image transforms at build time; no runtime IMAGES binding needed.
    imageService: 'compile',
  }),
});
