
<script>
	export let player;
    export let position;
</script>



<div class="info" id={position}>
    <h3 class="textColor">{player?.pseudo}</h3>
    <p class="textColor"> {player?.progress} km</p>
    {#if player?.status}
    <p class="textColor">{player?.status}</p>
    {/if}

</div>

<style>
    .info {
        width: 80px;
        height: 40px;
        margin-left: 10px;
        background-color: #cea06a;
        padding: 8px;
        border-radius: 10px;
    }
     .textColor{
        color: white;
    }
   
    #top {
        rotate: 180deg;
        position: absolute;
        left: 66%;
        top: 70%;
    }
    #right {
        rotate: 90deg;
        position: absolute;
        bottom: 14%;
        left: 71%;
    }
    #left{
    rotate: -90deg;
    position: absolute;
        left: 12%;
        bottom: 14%;
    }

    </style>