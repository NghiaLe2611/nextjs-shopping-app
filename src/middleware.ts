import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['vi', 'en'],
	defaultLocale: 'vi',
	localeDetection: false,
});

export const config = {
	// Skip all paths that should not be internationalized
	matcher: ['/((?!api|images|_next|.*\\..*).*)'],
};
