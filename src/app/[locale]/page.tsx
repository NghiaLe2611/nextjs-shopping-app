import { Metadata } from 'next';
import TestModal from '../../components/TestModal';
import MainLayout from '../../components/common/MainLayout';
import { getDictionary } from '@/getDictionary';

export const metadata: Metadata = {
	title: 'NextJS Shopping App | Homepage',
};
// generateMetadata for dynamic metadata

// export async function generateStaticParams() {
// 	return i18n.locales.map((locale: any) => ({ lang: locale }));
// }

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
	const { homePage } = await getDictionary(locale);

	return (
		<MainLayout>
			<div>{homePage.welcome}</div>
			<div>
				<input type='text' />
			</div>
			<TestModal />
		</MainLayout>
	);
}
