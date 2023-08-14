import type { MovieDetails, MovieList } from '$lib/types.js';

import { get } from '$lib/api';

export async function load({ fetch }) {
	const [trending, now_playing, upcoming] = await Promise.all([
		get<MovieList>(fetch, 'trending/movie/day'),
		get<MovieList>(fetch, 'movie/now_playing'),
		get<MovieList>(fetch, 'movie/upcoming')
	]);
	const featured = trending.results[0];
	const featured_data = await get<MovieDetails>(fetch, `movie/${featured.id}`, {
		append_to_response: 'images'
	});

	return {
		trending,
		featured_data,
		now_playing,
		upcoming
	};
}
