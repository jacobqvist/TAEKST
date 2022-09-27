<script lang="ts">
	import Ide from '$lib/IDE.svelte';
	import { markdown } from '../lib/store'
	import { page } from '$app/stores';

	let searchString = $page.url.search != null ? $page.url.search.substring(1) : null;
	if (searchString) {
		markdown.set(JSON.parse(atob(searchString)).text);
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
