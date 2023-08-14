export const BASE_URL = 'https://api.movies.tastejs.com';
export const BASE_MEDIA_URL = 'https://image.tmdb.org/t/p';

export function getMedia(file_path: string, width: number) {
	return `${BASE_MEDIA_URL}/w${width}${file_path}`;
}
export async function get<T>(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const q = new URLSearchParams(params);
	const response = await fetch(`${BASE_URL}/${endpoint}?${q.toString()}`);
	return (await response.json()) as T;
}
