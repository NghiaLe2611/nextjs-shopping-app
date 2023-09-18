// module.exports = {
// 	i18n: {
// 		locales: ['vi', 'en'],
// 		defaultLocale: 'vi',
// 		localeDetection: false,
// 	},
// };

export const i18n = {
	locales: ['vi', 'en'],
	defaultLocale: 'vi',
	localeDetection: false,
} as const;

export type Locale = (typeof i18n)['locales'][number];
// https://github.com/HamedBahram/next-i18n/blob/main/app/%5Blang%5D/about/page.tsx
// https://github.com/vercel/next.js/discussions/18419