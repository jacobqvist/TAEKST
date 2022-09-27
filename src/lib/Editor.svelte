<script lang="ts">
	import { onMount } from 'svelte';
	import { markdown } from './store';

	onMount(() => {
		let savedValue = markdown.get();
		if (savedValue) {
			text = savedValue;
		}
	})

	let text = '';

	// We should add to store instead -> support undo CMD+Z
	function saveToStore() {
		markdown.set(text);
	}

</script>

<textarea  bind:value={text} on:input={() => saveToStore()} class="editor"></textarea>

<style lang="scss">
	@import "src/consts.scss";
	.editor {
		width: calc((100vw - $default-padding * 4) / 2);
		height: calc(100vh - $header-height - 2 * $default-padding);
		background-color: $white;
		margin: $default-padding;
	}

	:global(body.dark-mode) .editor {
		background-color: $primary-color;
		color: $white;
	}
</style>
