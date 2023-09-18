import { Spinner } from '@chakra-ui/react';
import React, { PropsWithChildren, Suspense } from 'react';

const AdminLayout = ({ children }: PropsWithChildren) => {
	return (
		<Suspense fallback={<Spinner size='xl' />}>
			<main>{children}</main>
		</Suspense>
	);
};
export default AdminLayout;
