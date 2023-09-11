import TestModal from '@/components/TestModal';
import MainLayout from '@/components/common/MainLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'NextJS Shopping App | Homepage',
};
// generateMetadata for dynamic metadata

export default function Home() {
	return (
		<MainLayout>
			<div>Welcome to Home</div>
			<TestModal />
		</MainLayout>
	);
}
