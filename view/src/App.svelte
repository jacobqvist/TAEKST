<script lang="js">
  import Modal from './lib/Modal.svelte';
  import { convertMarkdownToHtml } from '../../parser';
  import JSConfetti from 'js-confetti'

  let jsConfetti;
  let showConfetti = false;

  function getCanvas(canvas) {
    jsConfetti = new JSConfetti({canvas})
    if(showConfetti) {
      jsConfetti.addConfetti({
        confettiRadius: 4,
          confettiNumber: 1000,
      });
    }
  }


  $: body = "";
  let message = "";
  let title = "";

  let showModal = true;

	async function handleData(value) {
    body = await convertMarkdownToHtml(value);
	}

	let searchString = window.location.search != null ? window.location.search.substring(1) : null;
	if (searchString) {

		const taekst = JSON.parse(atob(searchString));
    handleData(taekst.text)
    message = taekst.message;
    title = taekst.name;
    showConfetti = taekst.confetti == 'on';
	}

</script>

<canvas use:getCanvas style="position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 1000; pointer-events: none;"></canvas>

{@html body}

{#if showModal}
	<Modal on:close="{() => showModal = false}">
    <h1 slot="header">
			{ title }
		</h1>
		<div class="spacer"></div>
    <p>{ message }</p>
		<div class="spacer"></div>
		<button class="outlined-button" on:click={() => showModal = false}>Copy link</button>
	</Modal>
{/if}