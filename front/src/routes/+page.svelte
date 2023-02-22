<script>
	import Board from '../components/Board.svelte';
	import Hand from '../components/Hand.svelte';
	import Deck from '../components/Deck.svelte';
	import PlayerBoard from '../components/PlayerBoard.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="layout">
	<section class="board">
		<Board />
	</section>
	<section class="top-player">
		<Hand isPlayer={false}/>
		<PlayerBoard />
	</section>
	<section></section>
	<section class="left-player">
		<PlayerBoard />
		<Hand isPlayer={false}/>
	</section>
	<section class="deck-area">
		<Deck />
	</section>
	<section class="right-player">
		<PlayerBoard />
		<Hand isPlayer={false}/>
	</section>
	<section></section>
	<section class="active-player">
		<PlayerBoard />
		<Hand isPlayer={true}/>
	</section>
</div>

<style>
	.board {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.active-player {
		gap: 10px;
		display: flex;
		flex-direction: column;		
		align-items: center;
		transform: translateY(40px);
	}
	.top-player {
		gap: 10px;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		transform: rotate(180deg);
	}
	.left-player {
		gap: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transform: rotate(90deg);
	}
	.right-player{
		gap: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transform: rotate(-90deg);
	}

	.layout {
		display: grid;
		grid-template-columns: 1fr 1.5fr 1fr;
		grid-template-rows: 1fr 300px 1.2fr;
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
