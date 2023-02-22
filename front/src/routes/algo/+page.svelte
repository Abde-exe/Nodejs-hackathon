
<script>
    import {onMount} from 'svelte';
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
    let arrival_point = 1000;
    let progression = 0;

    let bluebottle = 25;
    let silverArrow = 50;
    let nimbus2000 = 75;
    let firebolt= 100;
    let thunderbolt7 = 200;

    // Fonction qui permet de vérifier que vous avez bien atteint la ligne d'arrivé
    function isFinish(value){
        if(value >= arrival_point){
            alert("You win");
            progression = 0;
        } else {
            console.log("There's still a long way to go");
        }
    }

    // Fonction pour avancer
    function addDistance(value){
        progression = progression + value;
        console.log("Nouvelle progression : " + progression);
        isFinish(progression);
    }

    // Ajout d'un event listener sur chaque boutons pour avancer selon la valeur définit (TEST)
    onMount(() => {
        let listOfButtons = document.getElementById("buttonList").getElementsByTagName('button');
        
        for(let i = 0; i < listOfButtons.length; i++){
            let buttonValue = parseInt(listOfButtons[i].attributes.value.value);

            listOfButtons[i].addEventListener('click', () => {
                addDistance(buttonValue)
            })
        }
    })

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		ALGO
	</h1>
    <span>Il faut atteindre {arrival_point}km</span>
    <span>Votre progression : {progression}km</span>
    <span>Il vous reste encore {arrival_point - progression}km à parcourir</span>


    <h2>Ajout d'une distance</h2>
    <div id="buttonList">
        <button value={bluebottle}>{bluebottle}km</button>
        <button value={silverArrow}>{silverArrow}km</button>
        <button value={nimbus2000}>{nimbus2000}km</button>
        <button value={firebolt}>{firebolt}km</button>
        <button value={thunderbolt7}>{thunderbolt7}km</button>
    </div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

    .buttonList {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

</style>
