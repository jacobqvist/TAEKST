<script lang="ts">
	import logo from './taekst-logo.svg';
</script>

<header>
		<a href="https://github.com/qvisten999/TAEKST">
			<img src={logo} alt="TAEKST" />
		</a>
		<div class="header-content-container">
			<input class="file-name-input" placeholder="Draft"/>
			<ul>
				<li>File</li>
				<li>Edit</li>
				<li>Tools</li>
				<li>Help</li>
			</ul>
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

	.header-content-container {
		display: flex;
		flex-direction: column;
		padding-left: $tiny-padding;
		margin-top: 4px;
	}

	.file-name-input {
		width: calc(100vw - $default-padding - $logo-size - 300px );
		height: 24px;
		font-weight: 600;
		font-size: 20px;
		border: none;
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
