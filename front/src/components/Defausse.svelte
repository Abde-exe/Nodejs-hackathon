<script>
	import back_card from "../lib/cards/back_card.jpg";
	export let defausse = [];
	$: console.log('defausse', defausse)
</script>

<div class="deck" >
	<img src={defausse[0]?.img} alt="back of the card"/>
</div>

<style>
	.deck {
		width: 96px;
        cursor: pointer;
	}
	.deck img {
		border-radius: 8px;
		box-shadow: 1px 2px 6px;
	}
</style>