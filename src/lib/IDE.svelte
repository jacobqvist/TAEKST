<script lang="ts">
	import Editor from "./Editor.svelte";
	import Preview from "./Preview.svelte";

</script>

<div class="ide">
	<Editor />
	<Preview />
</div>

<style lang="scss">
	@import "src/consts.scss";
	.ide {
		width: 100vw;
		display: flex;
	}

</style>
