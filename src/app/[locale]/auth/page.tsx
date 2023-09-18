import type { Metadata } from 'next';
import { Locale, i18n } from '../../../../i18n.config';
import { getDictionary } from '../../../../getDictionary';
import AdminLayout from '@/src/components/common/AdminLayout';

export const metadata: Metadata = {
	title: 'Auth Page',
	description: 'This is auth page',
};

export async function generateStaticParams() {
	return i18n.locales.map((locale: any) => ({ locale }));
}

export default async function Auth({ params: { locale } }: { params: { locale: string } }) {
	const { authPage } = await getDictionary(locale);
	// const t = useTranslations('authPage'); // for CSR

	return (
		// <AdminLayout>
		<div className='text-center p-2'>{authPage.welcome}</div>
		// </AdminLayout>
	);
}
