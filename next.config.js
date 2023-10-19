/** @type {import('next').NextConfig} */
// const { i18n } = require('./i18n.config');

const nextConfig = {
	// i18n,
	// i18n: {
	// 	// locales: ['default', 'en'],
	// 	// defaultLocale: 'default',
	// 	locales: ['vi', 'en'],
	// 	defaultLocale: 'vi',
	// 	localeDetection: false,
	// },
	trailingSlash: true,
};

module.exports = {
	// redirects
	// permanent: true, // Use permanent: true for a 301 redirect (optional)
	async rewrites() {
		// return [
		// 	{
		// 		source: '/dien-thoai',
		// 		destination: '/phone',
		// 		// has: [{ type: 'query', key: 'overrideMe' }],
		// 	},
		// ];

		return {
			beforeFiles: [
				// These rewrites are checked after headers/redirects
				// and before all files including _next/public files which
				// allows overriding page files
				{
					source: '/dien-thoai',
					destination: '/phone',
					// has: [{ type: 'query', key: 'overrideMe' }],
				},
			],
			afterFiles: [
				// These rewrites are checked after pages/public files
				// are checked but before dynamic routes
				{
					source: '/dien-thoai',
					destination: '/phone',
				},
			],
			// fallback: [
			// 	// These rewrites are checked after both pages/public files
			// 	// and dynamic routes are checked
			// 	{
			// 		source: '/:path*',
			// 		destination: `https://www.google.com/`,
			// 	},
			// ],
		};
	},
	...nextConfig,
};
