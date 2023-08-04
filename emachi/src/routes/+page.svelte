<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
	import { levels } from './levels';

	let game: Game;
	let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting';
</script>

<Game
	on:play={() => {
		state = 'playing';
	}}
	on:pause={() => {
		state = 'paused';
	}}
	on:lost={() => {
		state = 'lost';
	}}
	on:win={() => {
		state = 'won';
	}}
	bind:this={game}
/>

{#if state !== 'playing'}
	<Modal>
		<header>
			<h1>e<span>mach</span>i</h1>
			<p>the emoji machiging game</p>
		</header>

		{#if state === 'won' || state === 'lost'}
			<p>you {state} the game!</p>
		{:else if state === 'paused'}
			<p>game is paused</p>
		{:else if state === 'waiting'}
			<p>Choose a level</p>
		{/if}

		<div class="button">
			{#if state === 'paused'}
				<button
					on:click={() => {
						state = 'playing';
						game.resume();
					}}>resume</button
				>
				<button
					on:click={() => {
						state = 'waiting';
					}}>quit</button
				>
			{:else}
				{#each levels as level}
					<button
						on:click={() => {
							game.start(level);
						}}>{level.label}</button
					>
				{/each}
			{/if}
		</div>
	</Modal>
{/if}

<style>
	h1 span {
		color: purple;
	}
</style>
