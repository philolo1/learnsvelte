<script lang="ts">
	import { receive } from './transition';
	import { getEmojiUrl } from './utils';

	export let found: string[];
</script>

<div class="found flex gap-1 h-10 items-center justify-center">
	{#each found as emoji}
		<div class="pair flex relative p-2 mt-3">
			<img in:receive={{ key: `${emoji}-a` }} src={getEmojiUrl(emoji)} alt="emoji" />
			<img
				class="absolute top-2 left-2"
				in:receive={{ key: `${emoji}-b` }}
				src={getEmojiUrl(emoji)}
				alt="emoji"
			/>
		</div>
	{/each}
</div>

<style>
	.pair {
		border-radius: 50%;
		border: solid 1px black;
	}

	img {
		width: 4em;
		height: 4em;
	}
</style>
