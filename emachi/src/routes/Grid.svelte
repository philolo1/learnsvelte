<script lang="ts">
	import Square from './Square.svelte';

	export let grid: string[];

	let a: number = -1;
	let b: number = -1;
	let reset_timeout: number;
</script>

<div class="grid">
	{#each grid as emoji, i}
		<Square
			selected={a === i || b == i}
			on:click={(event) => {
				clearTimeout(reset_timeout);
				if (a === -1 && b === -1) {
					a = i;
				} else if (b === -1) {
					b = i;
					if (grid[a] == grid[b]) {
						// correct
					} else {
						reset_timeout = setTimeout(() => {
							a = b = -1;
						}, 1000);
					}
				} else {
					b = -1;
					a = i;
				}
			}}
			{emoji}
		/>
	{/each}
</div>

<style>
	.grid {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 0.5em;
	}
</style>
