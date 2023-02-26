<script>
    import defaultImg from "../lib/images/profilpicture.png";

    export let player;
    export let position = undefined;
</script>


<div class="info" id={position}>
    <img src={player?.img ? player?.img : defaultImg} class="playerImg"/>
    <div class="playerTextInfo">
        <h4>{player?.pseudo}</h4>
        <p style="font-size: smaller;">Avancée : {player?.progress || 0} km</p>
        <p style="font-size: smaller;">Etat : { player?.state.name || "Normal"}</p>
    </div>

</div>

<style>
    .info {
        width: 10vw;
        height: 7vh;
        margin-left: 10px;
        background-color: #cea06a;
        border: 1px white solid;
        padding: 8px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 10vh;
        left:-12vw;

    }

    .playerImg {
        height: 3vw;
        width: 3vw;
        border-radius: 1.5vw;
    }

    .playerTextInfo {
        color: white;
        font-size: hvw;
        margin-left: 8px;
    }

    #top {
        rotate: 180deg;
        right:-20vh;
        top:14vh;

    }

    #right {
        rotate: 90deg;
        position: absolute;
        top:10vh;
        left:-9vw
      }

    #left {
        rotate: -90deg;
        position: absolute;
        left:-9vw;
        
    }

</style>