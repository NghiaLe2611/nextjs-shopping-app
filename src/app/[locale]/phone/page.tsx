import type { Metadata } from 'next';
import { i18n } from '../../../../i18n.config';

export const metadata: Metadata = {
	title: 'Phone Page',
	description: 'This is phone page',
};

export async function generateStaticParams() {
	return i18n.locales.map((locale: any) => ({ locale }));
}

export default async function Phone({ params: { locale } }: { params: { locale: string } }) {
	return (
		<div className='text-center p-2'>Dien thoai</div>
	);
}
