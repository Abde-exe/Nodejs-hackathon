<script>
	import defaultImg from "../lib/images/profilpicture.png";
    export let player;
    export let position = undefined;
</script>



<div class="info" id={position}>
    <img src={player?.img ? player?.img : defaultImg} class="playerImg"/>
    <div class="playerTextInfo">
        <h4>{player?.pseudo}</h4>
        <p style="font-size: smaller;">Avancée : {player?.progress} km</p>
    </div>

</div>

<style>
    .info {
        width: 180px;
        height: 50px;
        margin-left: 10px;
        background-color: #cea06a;
        padding: 8px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
    }
    .playerImg{
        height: 50px;
        width: 50px;
        border-radius: 25px;
    }
    .playerTextInfo{
        color: white;
        font-size: medium;
        margin-left: 8px;
        padding-top: 8px;
    }

    #top {
        rotate: 180deg;
        left: 66%;
        top: 70%;
    }
    #right {
        rotate: 90deg;
        position: absolute;
        bottom: 16%;
        left: 90%;
    }
    #left{
    rotate: -90deg;
    position: absolute;
    bottom: 16%;
        left: 90%;
    }

    </style>