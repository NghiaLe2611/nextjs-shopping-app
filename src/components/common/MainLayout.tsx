import React, { PropsWithChildren, Suspense } from 'react';
import Header from '@/components/layout/header';
import Footer from '../layout/footer';

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<Suspense>
			<Header />
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>{children}</main>
			<Footer />
		</Suspense>
	);
};
export default MainLayout;
