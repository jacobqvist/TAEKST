<script lang="ts">
	export let data: string;
</script>

<iframe title="preview" class="preview" srcdoc={data}>

</iframe>


<style  lang="scss">
	@import "src/latex.scss";
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
