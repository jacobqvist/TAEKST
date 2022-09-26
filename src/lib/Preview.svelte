<script lang="ts">
	import { previewFrame } from './preview';
	import { afterUpdate } from 'svelte';

	export let data: string;

	let iframe: HTMLIFrameElement;

	function setNode(node: HTMLIFrameElement) {
		iframe = node;
	}

	afterUpdate(() => {
		iframe.contentDocument!.body.innerHTML = data;
	})

</script>

<iframe title="preview" class="preview" srcdoc="{previewFrame}" use:setNode></iframe>

<style lang="scss">
	@import "src/consts.scss";
	.preview {
		width: calc((100vw - $default-padding * 4) / 2);
		height: calc(100vh - $header-height - 2 * $default-padding);
		background-color: $white;
		margin: $default-padding;
	}
	:global(body.dark-mode) .preview {
		background-color: $primary-color;
		color: $white;
	}
</style>
