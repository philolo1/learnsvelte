<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import { views } from '$lib/views';
	import Hero from './Hero.svelte';

	export let data;
	console.log({ data });
</script>

<h1 class="text-white my-3 text-2xl font-semibold">Top trending movies</h1>
<Hero movie={data.featured_data} />
<Carousel
	title={views.trending.title}
	href={views.trending.endpoint}
	movies={data.trending.results}
/>
<Carousel
	title={views.now_playing.title}
	href={views.now_playing.endpoint}
	movies={data.now_playing.results}
/>
<Carousel
	title={views.upcoming.title}
	href={views.upcoming.endpoint}
	movies={data.upcoming.results}
/>
