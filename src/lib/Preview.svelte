<script lang="ts">
	import { previewFrame } from './preview';
	import { html } from './store';

	let iframe: HTMLIFrameElement;

	function setNode(node: HTMLIFrameElement) {
		iframe = node;
	}

	function subscribe() {
		html.subscribe(value => (
			iframe.contentDocument!.body.innerHTML = value
		));
	}

</script>

<iframe on:load="{() => subscribe()}" title="preview" class="preview" srcdoc="{previewFrame}" use:setNode></iframe>

<style lang="scss">
	@import "src/consts.scss";
	.preview {
		width: calc((100vw - $default-padding * 4) / 2);
		height: calc(100vh - $header-height - 2 * $default-padding);
		background-color: $white;
		margin: $default-padding;
		border: none;
	}
	:global(body.dark-mode) .preview {
		background-color: $primary-color;
		color: $white;
	}
</style>
