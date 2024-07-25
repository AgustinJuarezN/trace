import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
	site: 'https://astro-nutritrack.chrstnl.com/',
	output: 'server',
	integrations: [react(), mdx(), sitemap(), tailwind()],
});
