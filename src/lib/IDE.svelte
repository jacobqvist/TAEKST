<script lang="ts">
	import Editor from "./Editor.svelte";
	import Preview from "./Preview.svelte";
	import { unified } from 'unified'
	import remarkParse from 'remark-parse'
	import remarkRehype from 'remark-rehype'
	import remarkDirective from 'remark-directive'
	import remarkDirectiveRehype from 'remark-directive-rehype'
	import rehypeStringify from 'rehype-stringify'
	//import rehypeMathjax from 'rehype-mathjax' -> breaks svelte if imported?
	import remarkMath from 'remark-math'
	import remarkGfm from 'remark-gfm'
	import rehypeDocument from 'rehype-document'
	import { visit } from 'unist-util-visit'
	import { is } from 'unist-util-is'
	import { markdown, html } from './store'

	// TODO extract to custom file with typings
	// Remove any
	function directive(): any{
		return (tree: any, file: any) => {

			// Adds a ID to the heading based on the format: # test heading {#id}
			// TODO add typing
			visit(tree, "heading", (node) => {
			if (node.children.length === 1 && is(node.children[0], "text")) {
				const textNode = node.children[0];
				const matches = textNode.value.match("\{#(.*)\}");
		
				if (matches != null && matches.length === 2) {
				const id = matches[1];
		
				const data = node.data || (node.data = {})
				data.hProperties = { id: id }
		
				textNode.value = textNode.value.substring(0, textNode.value.length - matches[0].length);
				}
			}
			})

			visit(tree, 'textDirective', (node) => {
				if (node.name == 'author') {
					const data = node.data || (node.data = {})
					data.hName = 'p'
					data.hProperties = {className: ['author']}
				}

				if (node.name == 'theorem') {
					const data = node.data || (node.data = {})
					data.hName = 'div'
					data.hProperties = {className: ['theorem']}
				}

				if (node.name == 'lemma') {
					const data = node.data || (node.data = {})
					data.hName = 'div'
					data.hProperties = {className: ['lemma']}
				}

			});

			
	
			visit(tree, 'containerDirective', (node) => {
				if (node.name == 'abstract') {
					const data = node.data || (node.data = {})
					data.hName = 'div'
					data.hProperties = {className: ['abstract']}
				}

				if (node.name == 'theorem') {
					const data = node.data || (node.data = {})
					data.hName = 'div'
					data.hProperties = {className: ['theorem']}
				}

				if (node.name == 'proof') {
					// TODO TOC Should be auto generated
					const data = node.data || (node.data = {})
					data.hName = 'div'
					data.hProperties = {className: ['proof']}
				}


				if (node.name == 'toc') {
					// TODO TOC Should be auto generated
					const data = node.data || (node.data = {})
					data.hName = 'nav'
					data.hProperties = {role: ["navigation"], className: ['toc']}
				}

			})
		}
		}

	async function handleOutput(value: string) {

		const file = await unified()
		.use(remarkParse) // Convert to Markdown AST
		.use(remarkMath) // Support markdown math symbols
		.use(remarkGfm) // Support Github Flavoured Markdown
		.use(remarkDirective) // Support Markdown directives 
		.use(remarkDirectiveRehype) // Support directives in HTML
		.use(directive) // Custom logic
		.use(remarkRehype) // Convert to HTML AST
		// .use(rehypeMathjax) // Convert span math to mathjax -> does not currently work. Breaks svelte?
		.use(rehypeStringify) // To HTML string -> check XSS 
		.process(value)
		
		html.set(String(file))
	}

	markdown.subscribe(async (value: string) => (await handleOutput(value)))
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
