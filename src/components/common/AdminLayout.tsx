import React, { PropsWithChildren, Suspense } from 'react';

const AdminLayout = ({ children }: PropsWithChildren) => {
	return (
		<Suspense>
			<main>{children}</main>
		</Suspense>
	);
};
export default AdminLayout;
