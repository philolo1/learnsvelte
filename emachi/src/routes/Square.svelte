<script lang="ts">
	import { getEmojiUrl } from './utils';
	import { send } from './transition';

	export let emoji = '';
	export let selected = false;
	export let found = false;
	export let group: 'a' | 'b' = 'a';
</script>

<div class="square" class:flipped={selected || found}>
	<div class="background" />

	<button on:click />
	{#if !found}
		<img out:send={{ key: `${emoji}-${group}` }} src={getEmojiUrl(emoji)} alt="emoji" />
	{/if}
</div>

<style>
	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: transparent;
		backface-visibility: hidden;
		border-radius: 1em;
		border: 0.2em solid #eee;
	}
	.square {
		display: grid;
		place-items: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	.flipped {
		transform: rotateY(180deg);
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		background: #eee;
		border: 0;
		border-radius: 1em;
		font-size: inherit;
	}

	img {
		width: 7em;
		height: 7em;
		pointer-events: none;
		transform: rotateY(180deg);
		backface-visibility: hidden;
	}
</style>
