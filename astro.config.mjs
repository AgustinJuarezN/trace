import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-nutritrack.chrstnl.com/',
	// vite: {
	// 	optimizeDeps: {
	// 		exclude: ['@resvg/resvg-js'],
	// 	},
	// 	ssr: {
	// 		external: ['svgo'],
	// 	},
	// },
	// prefetch: true,
	output: 'server',
	integrations: [
		react(),
		mdx(),
		sitemap(),
		tailwind(),
		// image({
		// 	serviceEntryPoint: '@astrojs/image/sharp',
		// }),
	],
});
