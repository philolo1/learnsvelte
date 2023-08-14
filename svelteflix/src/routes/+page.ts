import type { MovieDetails, MovieList } from '$lib/types.js';

import { get } from '$lib/api';

export async function load({ fetch }) {
	const trending = await get<MovieList>(fetch, 'trending/movie/day');
	const featured = trending.results[0];
	const featured_data = await get<MovieDetails>(fetch, `movie/${featured.id}`, {
		append_to_response: 'images'
	});

	return {
		trending,
		featured_data
	};
}
