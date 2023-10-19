// 'use client';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Inter, Raleway } from 'next/font/google';
import { i18n } from '../../../i18n.config';
import { Providers } from '../providers';
import './globals.scss';
import { getDictionary } from '@/getDictionary';

type Props = {
	children: React.ReactNode;
	params: { locale: string };
};

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
	// weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'NextJS Shopping App',
	description: 'NextJS Shopping App by NghiaLe',
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ locale }));
}

// Root layout for common
// Use file layout.tsx in folder page in app for different layouts

export default async function RootLayout({ children, params: { locale } }: Props) {
	// const { content } = await getDictionary(locale);
	const content = await getDictionary(locale);

	console.log(123, locale);

	return (
		<html lang={locale} className='h-full' data-theme='light' suppressHydrationWarning>
			<head>
				<link rel='icon' href='/favicon.ico' />
				{/* <script>0</script> */}
			</head>
			<Providers>
				<body className={`h-full ${inter.className} ${raleway.variable}`}>
					<NextIntlClientProvider locale={locale} messages={content}>
						{children}
						{/* <NextScript /> */}
						{/* <Script src='/js/theme.js' strategy='beforeInteractive' /> */}
					</NextIntlClientProvider>
				</body>
			</Providers>
		</html>
	);
}
