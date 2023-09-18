import { Box, Spinner } from '@chakra-ui/react';

export default function Loading() {
	return (
		<Box textAlign='center' p={2}>
			<Spinner size='xl' />
		</Box>
	);
}
