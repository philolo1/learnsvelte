<script lang="ts">
	import { getEmojiUrl } from './utils';

	export let emoji = '';
	export let selected = false;
	export let found = false;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />
	{#if !found}
		<img src={getEmojiUrl(emoji)} alt="emoji" />
	{/if}
</div>

<style>
	.square {
		display: grid;
		place-items: center;
		background: yellow;
	}

	.flipped button {
		background: red;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	img {
		width: 7em;
		height: 7em;
		pointer-events: none;
	}
</style>
