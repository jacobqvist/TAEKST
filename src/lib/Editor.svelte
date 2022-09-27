<script lang="ts">
	import { onMount } from 'svelte';
	import { stop_propagation } from 'svelte/internal';
	import { markdown } from './store';

	onMount(() => {
		let savedValue = markdown.get();
		if (savedValue) {
			text = savedValue;
		}
	})

	$: text = '';
	$: editorHeight = Math.max(text.split('\n').length, 26);
	$: numbers = Array.from(Array(editorHeight).keys());

	// We should add to store instead -> support undo CMD+Z
	function saveToStore() {
		markdown.set(text);
	}


</script>
<div class="editor">
	<div class="line-numbering" style="height: calc({editorHeight * 1.5}em + 8px)">
		<ul>
			{#each numbers as number}
			<li>{number}</li>
			{/each}
		</ul>
	</div>
	<textarea style="min-height: calc({editorHeight}em + 100vh)" bind:value={text} on:input={() => saveToStore()}></textarea>
</div>

<style lang="scss">
	@import "src/consts.scss";
	.editor {
		width: calc((100vw - $default-padding * 4) / 2);
		height: calc(100vh - $header-height - 2 * $default-padding);
		background-color: $white;
		margin: $default-padding;
		display: flex;
		flex-direction: row;
		overflow: overlay;
	}

	:global(body.dark-mode) .editor {
		background-color: $primary-color;
		color: $white;
	}

	.line-numbering {
		width: 35px;
		display: flex;
		background-color: $grey;
	}

	:global(body.dark-mode) .line-numbering {
		background-color: $black;
	}

	ul {
		list-style-type: none;
		margin-left: -35px;
		padding-top: 10px;
	}
	textarea {
		width: 100%;
		resize: none;
		padding-top: 10px;
		padding-left: 8px;
		border: none;	
		overflow: visible;
}

:global(body.dark-mode) 	textarea {
		background-color: $primary-color;
}


</style>
