<script lang="ts">
	export let remaining: number;
	export let duration: number;
	export let playing: bool;
</script>

<div class="countdown">
	<button on:click>
		{#if playing}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><title>pause-circle</title><path
					d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
				/></svg
			>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><title>play-circle</title><path
					d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
				/></svg
			>
		{/if}
	</button>

	<div class="duration">
		<div class="remaining" style="--p: {remaining / duration}" />
	</div>
</div>

<style>
	.countdown {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	button svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		fill: #999;
	}

	button {
		font-size: 8em;
		width: 1em;
		height: 1em;
		background-color: transparent;
		border: 0;
	}

	.duration {
		flex: 1;
		height: 1em;
		background-color: #ccc;
	}

	.remaining {
		position: absolute;
		width: calc(100% * var(--p));
		height: 100%;
		background-color: red;
	}
</style>
