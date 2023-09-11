import './globals.scss';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextJS Shopping App',
	description: 'NextJS Shopping App by NghiaLe',
};

// Root layout for common
// Use file layout.tsx in folder page in app for different layouts
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='h-full'>
			<body className={`h-full ${inter.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
