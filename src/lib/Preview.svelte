<script lang="ts">
</script>

<div class="preview">
	<h1>Hej Mads</h1>
</div>

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
