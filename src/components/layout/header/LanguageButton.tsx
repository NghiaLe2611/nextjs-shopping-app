'use client';

import { Button, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HiGlobeAlt } from 'react-icons/hi';
import { useLocale } from 'next-intl';
import './LanguageButton.scss';

export default function LanguageButton(params: any) {
    const locale = useLocale();

    console.log(locale)
	return (
		<Menu>
			<MenuButton
				as={Button}
				leftIcon={<HiGlobeAlt />}
				bg='transparent'
				_hover={{
					bg: 'var(--bg-button-hover)',
				}}>
				VN
			</MenuButton>
			<MenuList className='menu-language'>
				<MenuItem>
					<Link href='/vi'>VN</Link>
				</MenuItem>
				<MenuItem>
					<Link href='/en'>EN</Link>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}
