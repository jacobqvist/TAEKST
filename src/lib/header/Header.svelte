<script lang="ts">
	import logo from './taekst-logo.svg';
	$: day = true;
	$: src = day ? 'src/lib/header/night.svg' : 'src/lib/header/day.svg';
	function toggle() {
		day = !day
		window.document.body.classList.toggle('dark-mode')
}
</script>

<header>
		<a href="https://github.com/qvisten999/TAEKST">
			<img src={logo} alt="TAEKST" />
		</a>
		<div class="header-content">

		<div class="header-content-container-left">
			<input class="file-name-input" placeholder="Draft"/>
			<ul>
				<li>File</li>
				<li>Edit</li>
				<li>Tools</li>
				<li>Help</li>
			</ul>
		</div>
		<div class="header-content-container-right">
			<img src={src} class="dark-mode-icon" alt="dark-mode-toggle" on:click={toggle} />
			<button>Share</button>
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

<style lang='scss'>
	@import "src/consts.scss";

	.dark-mode-icon {
		height: 32px;
		width: 32px;
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
		justify-content: space-between;
	

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

</style>
