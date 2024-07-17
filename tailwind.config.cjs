/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Apfel-Grotezk', 'Sans Serif'],
				title: ['Apfel-Grotezk', 'Sans Serif'],
			},
			fontSize: {
				body: [
					'1rem',
					{
						lineHeight: '1.5rem',
					},
				],
				h1: [
					'3.5rem',
					{
						lineHeight: '3.75rem',
					},
				],
				h2: [
					'2.25rem',
					{
						lineHeight: '2.625rem',
					},
				],
				h3: [
					'1.875rem',
					{
						lineHeight: '2.25rem',
					},
				],
				h4: [
					'1.5rem',
					{
						lineHeight: '2rem',
					},
				],
				h5: [
					'1.25rem',
					{
						lineHeight: '1.75rem',
					},
				],
				h6: [
					'1.125rem',
					{
						lineHeight: '1.5rem',
					},
				],
				mini: [
					'0.75rem',
					{
						lineHeight: '1.5rem',
					},
				],
			},
			colors: {
				black: {
					DEFAULT: '#1f1d2b',
					50: '#1f1d2b',
					100: '#1f1d2b',
					200: '#1f1d2b',
					300: '#1f1d2b',
					400: '#1f1d2b',
					500: '#1f1d2b',
					600: '#1f1d2b',
					700: '#1f1d2b',
					800: '#1f1d2b',
					900: '#1f1d2b',
				},
				white: {
					DEFAULT: '#FFFFFF',
					50: '#FFFFFF',
					100: '#FCFCFC',
					200: '#FCFCFC',
					300: '#FAFAFA',
					400: '#FAFAFA',
					500: '#F7F7F7',
					600: '#C7C7C7',
					700: '#949494',
					800: '#636363',
					900: '#303030',
				},
				primary: {
					50: '#FCFCFC',
					100: '#FCFCFC',
					200: '#FCFCFC',
					300: '#FCFCFC',
					400: '#FAFAFA',
					500: '#FAFAFA',
					600: '#E3E3E3',
					700: '#C7C7C7',
					800: '#A6A6A6',
					900: '#787878',
					950: '#595959',
				},
				secondary: {
					50: '#59c6f2',
					100: '#59c6f2',
					200: '#59c6f2',
					300: '#59c6f2',
					400: '#59c6f2',
					500: '#e05a51',
					600: '#59c6f2',
					700: '#59c6f2',
					800: '#59c6f2',
					900: '#59c6f2',
					950: '#59c6f2',
				},
				badge: '#F1F5F9',
				badgeText: '#475569',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
