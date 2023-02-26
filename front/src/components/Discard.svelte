<script>
    import discard_img from "../lib/cards/discard.png";

    export let discard;
</script>

<div class="deck">
    <img src={discard.length>0 ? discard[discard.length-1]?.img : discard_img} alt="back of the card"/>
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