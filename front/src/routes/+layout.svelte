<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Hand from '../components/Hand.svelte';
	import Deck from '../components/Deck.svelte';
</script>

<div class="layout">

	<main>
		<slot />
	</main>
	<section class="top-player">
		<Hand isPlayer={false}/>
	</section>
	<section></section>
	<section class="left-player">
		<Hand isPlayer={false}/>
	</section>
	<section class="deck-area">
		<Deck />
	</section>
	<section class="right-player">
		<Hand isPlayer={false}/>
	</section>
	<section></section>
	<section class="active-player">
		<Hand isPlayer={true}/>
	</section>
</div>

<style lang="scss">

	.active-player {
		display: flex;
		flex-direction: column-reverse;		
		align-items: center;
	}

	.top-player {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		transform: rotate(180deg);
	}
	.left-player {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		transform: rotate(90deg);
	}

	.right-player{
		display: flex;
		justify-content: center;
		align-items: flex-end;
		transform: rotate(-90deg);
	}

	.layout {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		height: 100vh;
	}

	.deck-area {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
</style>
