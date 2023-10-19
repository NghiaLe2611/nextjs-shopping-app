'use client';

import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Select,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { HiChevronDown, HiMoon, HiSun, HiGlobeAlt, HiOutlineDeviceMobile } from 'react-icons/hi';
import { Input } from '@chakra-ui/react';
import ThemeButton from './ThemeButton';
import LanguageButton from './LanguageButton';
import AuthButton from './AuthButton';
// import Link from 'next/link';
// import styles from './styles.css';

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	return (
		<Stack direction={'row'} spacing={4} alignItems='center'>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Box
								as='a'
								href={navItem.href ?? '#'}
								className='flex items-center text-sm text-gray-900 px-3'
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}>
								{navItem.label}
								{/* {navItem.children && <HiChevronDown /> } */}
							</Box>
						</PopoverTrigger>

						{/* {navItem.children && (
							<PopoverContent
								className='text-sm p-4'
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								rounded={'xl'}
								// minW={'xs'}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)} */}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

// const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
// 	return (
// 		<Box
// 			as='a'
// 			href={href}
// 			role={'group'}
// 			display={'block'}
// 			p={2}
// 			rounded={'md'}
// 			_hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>
// 			<Stack direction={'row'} align={'center'}>
// 				<Box>
// 					<Text transition={'all .3s ease'} _groupHover={{ color: 'green.400' }} fontWeight={500}>
// 						{label}
// 					</Text>
// 					{/* <Text fontSize={'sm'}>{subLabel}</Text> */}
// 				</Box>
// 				<Flex
// 					transition={'all .3s ease'}
// 					transform={'translateX(-10px)'}
// 					opacity={0}
// 					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
// 					justify={'flex-end'}
// 					align={'center'}
// 					flex={1}>
// 					<Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
// 				</Flex>
// 			</Stack>
// 		</Box>
// 	);
// };

const MobileNav = () => {
	return (
		<Box fontFamily='var(--font-raleway)'>
			<Box as='a' href='/' display='flex' alignItems='center' p={4} mb={3}>
				<Image src='/images/next-black.svg' alt='logo' width='32' height='32' />
				<Text ml={2}>NextJS Shopping App</Text>
			</Box>
			<Stack bg={useColorModeValue('white', 'gray.800')} px={4} display={{ md: 'none' }}>
				{NAV_ITEMS.map((navItem) => (
					<MobileNavItem key={navItem.label} {...navItem} />
				))}
			</Stack>
		</Box>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={2}>
			<Box
				py={3}
				// as='a'
				// href={href ?? '#'}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				_hover={{
					textDecoration: 'none',
				}}>
				<Box as='a' href={href ?? '#'} fontWeight={500} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Box>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
						onClick={onToggle}
					/>
				)}
			</Box>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack pl={4} mb={3} align={'start'}>
					{children &&
						children.map((child) => (
							<Box as='a' key={child.label} py={2} href={child.href}>
								{child.label}
							</Box>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'Điện thoại',
		href: 'dien-thoai',
		children: [
			{
				label: 'Apple',
				subLabel: 'Điện thoại Apple',
				href: '#',
			},
			{
				label: 'Samsung',
				subLabel: 'Điện thoại Samsung',
				href: '#',
			},
			{
				label: 'Xiaomi',
				subLabel: 'Điện thoại Xiaomi',
				href: '#',
			},
			{
				label: 'Oppo',
				subLabel: 'Điện thoại Oppo',
				href: '#',
			},
		],
	},
	{
		label: 'Thời trang',
		href: 'thoi-trang',
		children: [
			{
				label: 'Nam',
				subLabel: 'Thời trang nam',
				href: '#',
			},
			{
				label: 'Nữ',
				subLabel: 'Thời trang nữ',
				href: '#',
			},
		],
	},
];

export default function Header() {
	const { isOpen, onToggle, onClose } = useDisclosure();

	return (
		<Box as='header' borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}>
			<Box as='nav' className='mx-auto flex max-w-7xl items-center lg:px-8'>
				<Flex
					bg={useColorModeValue('white', 'gray.800')}
					color={useColorModeValue('gray.600', 'white')}
					minH={'60px'}
					py={{ base: 2 }}
					px={{ base: 4 }}
					width='100%'
					align={'center'}>
					<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
						<IconButton
							onClick={onToggle}
							icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
							variant={'ghost'}
							aria-label={'Toggle Navigation'}
						/>
					</Flex>
					<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
						<Box as='a' href='/'>
							<Image src='/images/next-black.svg' alt='logo' width='32' height='32' />
						</Box>
						<Flex display={{ base: 'none', md: 'flex' }} flex={1} ml={10}>
							{/* flex={1} justifyContent='center' */}
							<DesktopNav />
							<Flex ml={10} className='w-1/2'>
								<Input
									placeholder='Tìm kiếm'
									colorScheme='teal'
									_focusVisible={{
										outline: 'none',
										borderColor: 'var(--chakra-colors-teal-500)',
									}}
								/>
							</Flex>
						</Flex>
					</Flex>

					<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={1}>
						<ThemeButton />
						<LanguageButton />
						<AuthButton />
					</Stack>
				</Flex>
			</Box>

			<Drawer placement='left' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody padding={0}>
						<MobileNav />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}
