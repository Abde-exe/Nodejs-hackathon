<script>
	import defausse_img from "../lib/cards/defausse.png";
	export let defausse = [];
	$: console.log('defausse', defausse)
</script>

<div class="deck" >
	<img src={defausse.length>0 ? defausse[0]?.img : defausse_img} alt="back of the card"/>
</div>

<style>
	.deck {
		width: 96px;
		margin-right: 10px;
	}
	.deck img {
		border-radius: 8px;
		box-shadow: 1px 2px 6px;
	}
	.deck:hover {
        transform: translateY(-85px) scale(2);
        transition: all 0.3s;
    }
</style>