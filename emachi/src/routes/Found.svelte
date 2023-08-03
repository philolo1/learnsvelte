<script lang="ts">
	import { getEmojiUrl } from './utils';

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji}
		<img src={getEmojiUrl(emoji)} alt="emoji" />
	{/each}
</div>

<style>
	.found {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		height: 100%;
	}
	img {
		width: 4em;
		height: 4em;
	}
</style>
