<script lang="ts">
	let innerWidth = 0;
	let moving = false;
	let newXPosition = 0;
	let hasBeenMoved = false;
	let nowIKnow = false;

	function onMouseDown() {
		hasBeenMoved = true;
		moving = true;
	}
	
	function onMouseMove(e: { movementX: number; }) {
		if(hasBeenMoved && !nowIKnow){
			newXPosition += e.movementX;
			nowIKnow = true;
		}
		if (moving) {
			console.log("SD", e.movementX);
			newXPosition += e.movementX;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}	

</script>
<!-- TODO: Implement slider -->
<div class="divider" style="display: none; left: {hasBeenMoved ? newXPosition : innerWidth/2 - 7}px" on:mousedown={onMouseDown}>
	
</div>


<svelte:window bind:innerWidth on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style lang="scss">
	@import "src/consts.scss";
	.divider {
		position: absolute;
		height: calc(100vh - 64px);
		top: calc(63px);
		width: $divider-width;
		background-color: white;
		border-left-color: $primary-color;
		border-right-color: $primary-color;
		border-right-width: 1px;
		border-left-width: 1px;
		border-right-style: solid;
		border-left-style: solid;
		
	}

	
</style>
