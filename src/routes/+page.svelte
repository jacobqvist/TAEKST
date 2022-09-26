<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Editor from '$lib/Editor.svelte';
	import Ide from '$lib/IDE.svelte';
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
