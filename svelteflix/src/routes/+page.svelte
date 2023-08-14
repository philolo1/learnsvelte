<script lang="ts">
	import Hero from './Hero.svelte';

	export let data;
	console.log({ data });
</script>

<h1 class="text-white my-3 text-2xl font-semibold">Top trending movies</h1>
<Hero movie={data.featured_data} />
