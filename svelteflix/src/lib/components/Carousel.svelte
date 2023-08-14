<script lang="ts">
	import { getMedia } from '$lib/api';
	import type { MovieListResult } from '$lib/types';

	export let movies: MovieListResult[];
	export let title: string;
	export let href: string;
</script>

<section class="mt-6">
	<h2 class="text-xl font-medium">
		{title}
		{#if href}<a class="text-sm underline" {href}>see all</a>{/if}
	</h2>
	<div class="flex overflow-scroll gap-4 snap-mandatory scroll-p-0 no-scrollbar">
		{#each movies as movie}
			<a class="py-2 my-2" href="/movie/{movie.id}">
				<img class="min-w-[5rem]" alt={movie.title} src={getMedia(movie.poster_path, 500)} />
			</a>
		{/each}
	</div>
</section>
