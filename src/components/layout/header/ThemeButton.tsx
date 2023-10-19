'use client';
import { IconButton } from '@chakra-ui/react';
import { HiMoon } from 'react-icons/hi';

export default function ThemeButton() {
	return (
		<IconButton
			aria-label='Theme'
			icon={<HiMoon />}
			variant={'text'}
			_hover={{
				bg: 'var(--bg-button-hover)',
			}}
		/>
	);
}
