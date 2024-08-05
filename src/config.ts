// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from './types';

export const SITE: Site = {
	siteUrl: 'https:/www.trace.com.uy/', // Always put "/" at the end of the URL
	author: 'software-crafters',
	desc: 'GPS for pets',
	title: 'Trace',
	ogImage: 'images/Web0.jpg',
	keywords: 'dog, cat, gps, tracker, animals',
	postPerPage: 3,
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/profile.php?id=61563818461079',
		icon: 'ph:facebook-logo-duotone',
		title: `Follow ${SITE.title} on Facebook`,
		active: false,
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/trace.gps/',
		icon: 'ph:instagram-logo-duotone',
		title: `Follow ${SITE.author} on Instagram`,
		active: true,
	},
];
