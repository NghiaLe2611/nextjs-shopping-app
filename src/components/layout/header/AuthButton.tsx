'use client';

import { Button } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

export default function AuthButton() {
    const t = useTranslations('content');

	return (
		<Button
			fontSize={'sm'}
			// variant={'text'}
			colorScheme='teal'
			className='btn-account'
			// _hover={{
			// 	bg: 'var(--bg-button-hover)',
			// }}
		>
			{t('dangky')}
		</Button>
	);
}
