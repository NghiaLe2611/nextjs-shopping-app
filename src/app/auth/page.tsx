import AdminLayout from '@/components/common/AdminLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Auth Page',
	description: 'This is auth page'
};

export default function Auth() {
	return (
		<AdminLayout>
			<div>Welcome to Auth</div>
		</AdminLayout>
	);
}

