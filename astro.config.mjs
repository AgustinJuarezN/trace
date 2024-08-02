import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import partytown from '@astrojs/partytown';

export default defineConfig({
	site: 'https://trace.com.uy',
	output: 'server',
	adapter: vercel(),
	integrations: [
		react(),
		mdx(),
		sitemap(),
		tailwind(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
});
