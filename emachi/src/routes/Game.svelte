<script lang="ts">
	import { onMount } from 'svelte';
	import Countdown from './Countdown.svelte';
	import Found from './Found.svelte';
	import Grid from './Grid.svelte';
	import { levels } from './levels';
	import type { Level } from './levels';
	import { getEmojiUrl } from './utils';

	let level = levels[0];
	let size: number = level.size;
	let grid: string[] = createGrid(level);
	let found: string[] = [];
	let remaining = level.duration;
	let duration = level.duration;
	let playing = true;

	function createGrid(level: Level): string[] {
		let copy = level.emojis.slice();
		const pairs: string[] = [];

		for (let i = 0; i < level.size ** 2 / 2; i++) {
			const index = Math.floor(Math.random() * copy.length);
			pairs.push(copy[index]);
			copy = copy.filter((_, myIndex) => myIndex != index);
		}

		let res = [...pairs, ...pairs];

		for (let i = 0; i < level.size; i++) {
			const index = Math.floor(Math.random() * res.length);
			const index2 = Math.floor(Math.random() * res.length);
			if (index != index2) {
				let tmp = res[index];
				res[index] = res[index2];
				res[index2] = tmp;
			}
		}
		return res;
	}

	function countdown() {
		const start = Date.now();
		let remaining_at_start = remaining;

		function loop() {
			if (!playing) return;
			requestAnimationFrame(loop);

			remaining = remaining_at_start - (Date.now() - start);
			// console.log(remaining);

			if (remaining <= 0) {
				playing = false;
			}
		}
		loop();
	}

	onMount(() => {
		countdown();
	});
</script>

<div class="game">
	<div class="info">
		<Countdown {duration} {remaining} />
	</div>
	<div class="grid-container">
		<Grid
			{grid}
			{found}
			on:found={(e) => {
				found = [...found, e.detail.emoji];
			}}
		/>
	</div>
	<div class="info">
		<Found {found} />
	</div>
	<div style="font-size: 20px; display: flex;align-items: center;justify-content: center;">
		{grid.length}
		{#each grid.map((e) => getEmojiUrl(e)) as url}
			<img src={url} />
		{/each}
	</div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: min(1vmin, 0.3rem);
	}

	.info {
		width: 80em;
		height: 10em;
	}

	.grid-container {
		width: 80em;
		height: 80em;
	}
</style>
