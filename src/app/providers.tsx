// app/providers.tsx
'use client';

// import { CacheProvider } from '@emotion/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { CSSReset, ChakraProvider, ColorModeProvider, ColorModeScript, ThemeProvider, createLocalStorageManager, theme } from '@chakra-ui/react';
import createCache from '@emotion/cache';

const manager = createLocalStorageManager("theme")
const emotionCache = createCache({
	key: 'emotion-cache',
	prepend: true, // ensures styles are prepended to the <head>, instead of appended
  });

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={theme}>
			<ColorModeProvider>
				<CSSReset/>
				{children}
			</ColorModeProvider>
		</ThemeProvider>
	);

	// return (
	// 	<CacheProvider>
	// 		<ChakraProvider colorModeManager={manager} theme={theme}>
	// 			<ColorModeScript storageKey='theme' />
	// 			{children}
	// 		</ChakraProvider>
	// 	</CacheProvider>
	// );
}
