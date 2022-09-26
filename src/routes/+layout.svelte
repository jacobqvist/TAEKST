<script lang="ts">
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>


<style>
	@import '../styles.scss';
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100vw;
		box-sizing: border-box;
	}	
</style>
