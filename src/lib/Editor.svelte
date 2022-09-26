<script lang="ts">
</script>

<div class="editor">
	#WHAAAAAT UUUUP!?
</div>

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
