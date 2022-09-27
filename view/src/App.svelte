<script lang="js">
  import { convertMarkdownToHtml } from '../../parser';

  $: body = "";

	async function handleData(value) {
    body = await convertMarkdownToHtml(value);
	}

	let searchString = window.location.search != null ? window.location.search.substring(1) : null;
	if (searchString) {
		const taekst = JSON.parse(atob(searchString));
    handleData(taekst.text)
	}

</script>

{@html body}
