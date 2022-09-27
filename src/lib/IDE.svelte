<script lang="ts">
	import Editor from "./Editor.svelte";
	import Preview from "./Preview.svelte";
	import { convertMarkdownToHtml } from '../../parser';
	import { markdown, html } from './store';
	import Divider from "./Divider.svelte";

	async function handleOutput(value: string) {
		const output = await convertMarkdownToHtml(value);
		html.set(output)
	}

	markdown.subscribe(async (value: string) => (await handleOutput(value)))
</script>

<div class="ide">
	<Editor />
	<Divider />
	<Preview />
</div>

<style lang="scss">
	@import "src/consts.scss";
	.ide {
		width: 100vw;
		display: flex;
	}

</style>
