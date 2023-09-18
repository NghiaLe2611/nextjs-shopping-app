import React, { PropsWithChildren, Suspense } from 'react';
import Footer from '../layout/footer';
import Loading from '../Loading';
import Header from '../layout/header';
import { i18n } from '../../../i18n.config';

export async function generateStaticParams() {
	return i18n.locales.map((locale: any) => ({ locale }));
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Suspense fallback={<Loading />}>
			{/* <Loading /> */}
			<Header />
			<main className='flex min-h-screen flex-col items-center justify-between p-24'>{children}</main>
			<Footer />
		</Suspense>
	);
};
export default MainLayout;
