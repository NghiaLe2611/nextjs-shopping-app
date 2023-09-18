import 'server-only';
const dictionaries: { [key: string]: () => Promise<any> } = {
	'vi': () => import('@/dictionaries/vi.json').then((r) => r.default),
	'en': () => import('@/dictionaries/en.json').then((r) => r.default),
};

export async function getDictionary(locale: string) {
	try {
		const dictionary = await dictionaries[locale]();
		return dictionary;
	} catch (error) {
		console.error(error);
		return {}; // Return an empty object in case of an error
	}
}