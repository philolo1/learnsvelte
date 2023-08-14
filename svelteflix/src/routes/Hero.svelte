<script lang="ts">
	import { getMedia } from '$lib/api';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;
	$: backdrop = movie.images.backdrops.find((img) => !img.iso_639_1) || movie.images.backdrops[0];
	$: logo = movie.images.logos.find((img) => img.iso_639_1 === 'en') || movie.images.logos[0];
</script>

<a class="relative" href="/movie/${movie.id}">
	<img class="w-full" alt={movie.title} src={getMedia(backdrop.file_path, 1280)} />
	<img
		class="logo absolute top-0 left-2 h-full w-1/3 object-contain drop-shadow"
		alt={`Logo of ${movie.title}`}
		src={getMedia(logo.file_path, 1280)}
	/>
</a>
