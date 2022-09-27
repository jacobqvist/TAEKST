<script lang="ts">
	import Ide from '$lib/IDE.svelte';
	import { markdown, settings } from '../lib/store'
	import { page } from '$app/stores';
	import type { TaekstObject } from '$lib/taekst';

	let searchString = $page.url.search != null ? $page.url.search.substring(1) : null;
	if (searchString) {
		const taekst: TaekstObject = JSON.parse(atob(searchString));
		markdown.set(taekst.text);
		settings.set({name: taekst.name});
	}

</script>

<svelte:head>
	<title>TAEKST</title>
	<meta name="description" content="TAEKST" />
</svelte:head>

<section>
	<Ide />
</section>

<style lang="scss">
	@import "src/consts.scss";

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		background-color: $background-color;
	}

	:global(body.dark-mode) section { 
		background-color: black;
	}

</style>
