<script lang="ts">
	export interface TaekstObject {
		text: string;
		message: string;
		confetti: boolean;
		editable: boolean;
	}
	import Switch from "$lib/Switch.svelte";
	import Modal from "../Modal.svelte";
	import { markdown } from "../store";
	let showModal = false;
	import logo from './taekst-logo.svg';
	$: day = true;
	$: src = day ? 'src/lib/header/night.svg' : 'src/lib/header/day.svg';
	$: fileName = "";
	$: message = "";
	let confetti: boolean;
	let editable: boolean;
	function toggle() {
		day = !day
		window.document.body.classList.toggle('dark-mode')
}

	function copyToClipboard(){
		const baseUrl = window.location.origin;
		markdown.subscribe((val) => navigator.clipboard.writeText(baseUrl + "/" + btoa(JSON.stringify({text: val, message: message, confetti: confetti, editable: editable} as TaekstObject))));
	}
</script>

<header>
		<div class="header-content">
				<a href="https://github.com/qvisten999/TAEKST">
					<img src={logo} alt="TAEKST" />
				</a>
		<div class="header-content-container-left">
			<input class="file-name-input" placeholder="Draft" bind:value={fileName} />
			<ul>
				<li>File</li>
				<li>Edit</li>
				<li>Tools</li>
				<li>Help</li>
			</ul>
	</div>
		<div class="header-content-container-right">
			<img src={src} class="dark-mode-icon" alt="dark-mode-toggle" on:click={toggle} />
			<button on:click="{() => showModal = true}">Share</button>
		</div>

	</div>

		<!--	<nav data-sveltekit-prefetch>
 		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a href="/todos">Todos</a>
			</li>
		</ul>
	</nav>  -->
</header>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h1 slot="header">
			{"Share a link to " + (fileName ? fileName : "Draft")}
		</h1>
		<p class="heading-description">Everyone with the link will be able make a copy of your work</p>
		<div class="spacer"></div>
		<label>Message to show when the reciever opens the link</label>
		<textarea bind:value={message} placeholder="E.g. Here’s an invitation for my garden party next week. Hope to see you!"></textarea>
		<div class="spacer"></div>
		<Switch bind:value={confetti} label="Enable confetti" fontSize={12} design="slider"/>
		<div class="spacer"></div>
		<Switch bind:value={editable} label="Editable" fontSize={12} design="slider"/>
		<div class="spacer"></div>
		<button class="outlined-button" on:click={copyToClipboard}>Copy link</button>
	</Modal>
{/if}


<style lang='scss'>
	@import "src/consts.scss";

	.dark-mode-icon {
		height: 32px;
		width: 32px;
		margin-right: $tiny-padding;
	}

	header {
		height: $header-height;
		background-color: $white;
		box-sizing: border-box;
		padding-left: $default-padding;
		padding-left: $default-padding;
		display: flex;
		align-items: center;
		border-bottom: 1px;
		border-bottom-color: $primary-color;
		border-bottom-style: solid;
	}

	:global(body.dark-mode) header {
		background-color: black;
		color: $white;
	}

	.header-content {
		display: flex;
		align-items: center;
		width: calc(100vw - ($default-padding * 2));	
	

	.header-content-container-left {
		display: flex;
		flex-direction: column;
		padding-left: $tiny-padding;
		margin-top: 4px;

		.file-name-input {
		width: calc(100vw - $default-padding - $logo-size - 300px );
		height: 24px;
		font-weight: 600;
		font-size: 20px;
		border: none;
	}


	}

	.header-content-container-right {
		display: flex;
		flex-direction: row;
		padding-left: $tiny-padding;
		align-items: center;
		margin-left: auto;

		button {
			background-color: $primary-color;
			height: 37px;
			color: white;
			font-weight: 700px;
			border-radius: 8px;
			padding-left: 32px;
			padding-right: 32px;
			border: none;
			margin: 0;
			width: auto;
			overflow: visible;
			line-height: normal;
			&:hover {
				background-color: black;
			}
			}
	}
	}

:global(body.dark-mode) .file-name-input {
		background-color: $black;
		color: $white;
	}

	ul {
		position: relative;
		display: flex;
		list-style: none;
		background-size: contain;
		padding-left: 0;
	}
	
	li {
		padding-right: $tiny-padding;
		position: relative;
		height: 100%;
	}

	// li.active::before {
	// 	--size: 6px;
	// 	content: '';
	// 	width: 0;
	// 	height: 0;
	// 	position: absolute;
	// 	top: 0;
	// }

	.heading-description {
		font-size: 14px;
		color: $primary-color;
		margin-top: -4px;
	}

	.spacer {
		width: 100%;
		height: $default-padding;
	}

	textarea {
		width: 100%;
		height: 90px;
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.05);
		border: none;
		padding: $tiny-padding;
		resize: none;
	}

	.outlined-button {
			background-color: white;
			height: 37px;
			color: $primary-color;
			font-weight: 700px;
			border-radius: 8px;
			border-style: solid;
			border-color: $primary-color;
			border-width: 1px;
			padding-left: 32px;
			padding-right: 32px;
			margin: 0;
			width: auto;
			overflow: visible;
			line-height: normal;
			&:hover {
				cursor: pointer;
				background-color: rgb(249, 249, 249);
			}
			}

</style>
