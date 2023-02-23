<svelte:head>
	<title>Room Choice</title>
	<meta name="Room" content="Svelte demo app" />
</svelte:head>

<section>
		<div class="box">
            <div class="room">
                <p>Room_1</p>
                <p>En attente de joueurs</p>
                <p>1/4 joueurs</p>
            </div>
		</div>
</section>

<!-- <script src="main.js">
                        setTimeout("location.href = '/game';", 2500);

</script> -->

<style>

    section{
        min-height: 100vh;
        margin: 0;
        background-attachment: fixed;
        background-size: 100vw 100vh;
        background-image: url($lib/images/bg-menu.png);
    }


    a{
        color: black;
    }

	.box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		padding: 125px;
		border-radius: 25px;
}

    .room{
        display: flex;
    }


    .room p{
        padding-right: 40px;
        padding-left: 40px;
    }
	
</style>
