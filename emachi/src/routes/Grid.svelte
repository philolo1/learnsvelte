<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Square from './Square.svelte';

	export let found: string[];
	export let grid: string[];

	const dispatch = createEventDispatcher();

	let a: number = -1;
	let b: number = -1;
	let reset_timeout: number;
</script>

<div class="grid">
	{#each grid as emoji, i}
		<Square
			found={found.includes(emoji)}
			selected={a === i || b == i}
			group={grid.indexOf(emoji) === i ? 'a' : 'b'}
			on:click={(event) => {
				clearTimeout(reset_timeout);
				if (a === -1 && b === -1) {
					a = i;
				} else if (b === -1) {
					b = i;
					if (grid[a] == grid[b]) {
						// correct
						dispatch('found', {
							emoji
						});
						reset_timeout = setTimeout(() => {
							a = b = -1;
						}, 1000);
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
		grid-template-columns: repeat(var(--size), 1fr);
		grid-template-rows: repeat(var(--size), 1fr);
		grid-gap: 0.5em;
		perspective: 100vw;
	}
</style>
