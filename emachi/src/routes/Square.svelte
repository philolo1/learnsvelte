<script lang="ts">
	export let emoji = '';
	export let selected = false;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />
	<span>{emoji}</span>
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

	span {
		font-size: 10em;
		pointer-events: none;
	}
</style>
