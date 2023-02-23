
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
        position: relative;
        bottom: 50px;
        left: 50px;

    }
    #right {
        rotate: 90deg;
        position: relative;
        bottom: 50px;
        left: 50px;
    }
    #left{
    rotate: -90deg;
    position: relative;
        bottom: 50px;
        left: 50px;
    }

    </style>