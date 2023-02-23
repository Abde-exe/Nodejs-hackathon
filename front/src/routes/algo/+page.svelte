
<script>
    import {onMount} from 'svelte';
    import {CardType, distanceCards, specialCards, bonusCards, malusCards, characterCards, allCards} from '../../../../back/classes/cardsAssets';
	import {Player} from '../../../../back/classes/Player';

    // Variables du plateau
    let arrival_point = 1000;
    let progression = 0;

    // Variables des cartes d'avancement
    let bluebottle = 25;
    let silverArrow = 50;
    let nimbus2000 = 75;
    let firebolt= 100;
    let thunderbolt7 = 200;

    // Déclaration d'un tableau d'objet players
    const Players = [
      new Player(
        'Harry',
        'https://images.rtl.fr/~c/2000v2000/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg',
        '#FF0000'
      ),
      new Player(
        'Hermione',
        'https://www.g33kmania.com/wp-content/uploads/HarryPotter-1-Hermione-Granger.jpg',
        '#0000FF'
      ),
      new Player(
        'Ron',
        'https://www.g33kmania.com/wp-content/uploads/HarryPotter-1-Ron-Weasley.jpg',
        '#00FF00'
      ),
      new Player(
        'Hagrid',
        'https://static.wikia.nocookie.net/harrypotter/images/1/1a/PromoHP3_Rubeus_Hagrid.jpg/revision/latest?cb=20090103221029&path-prefix=fr',
        '#888888'
      ),
    ];

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

    // TEST DE L'AVANCEMENT
    onMount(() => {
        let buttonsContainer = document.getElementById("buttonList");
        let buttonsList = document.getElementById("buttonList").getElementsByTagName('button');

        // Création des cartes distance dans le DOM
        distanceCards.forEach(distanceCard => {
            let distanceCardDOM = document.createElement('button');
            distanceCardDOM.setAttribute('value', distanceCard.distance);
            distanceCardDOM.textContent = distanceCard.name + " - " + distanceCard.distance + "km";
            buttonsContainer.appendChild(distanceCardDOM);

            let buttonValue = parseInt(distanceCardDOM.value);
            distanceCardDOM.addEventListener('click', function(){
                addDistance(buttonValue);
            })
        });
    })

    // function canPlay(value) {
    //     switch(value){
    //         case "Cognard":
    //             if(Player.hand)
    //             break;
    //     }
    // }

    // TEST D'AJOUT DE MALUS/BONUS
    onMount(() => {
        let malusContainer = document.getElementById("malusList");
        let bonusContainer = document.getElementById("bonusList");

        // Création des cartes malus dans le DOM
        malusCards.forEach(malusCard => {
            let malusCardDOM = document.createElement('button');
            malusCardDOM.setAttribute('value', malusCard.name);
            malusCardDOM.textContent = malusCard.name;
            malusContainer.appendChild(malusCardDOM);

            let buttonValue = malusCardDOM.value;
            malusCardDOM.addEventListener('click', function(){
                alert(buttonValue);
            })

        });

        // Création des cartes bonus dans le DOM
        bonusCards.forEach(bonusCard => {
            let bonusCardDOM = document.createElement('button');
            bonusCardDOM.setAttribute('value', bonusCard.name);
            bonusCardDOM.textContent = bonusCard.name;
            bonusContainer.appendChild(bonusCardDOM);

            let buttonValue = bonusCardDOM.value;
            bonusCardDOM.addEventListener('click', function(){
                alert(buttonValue);
            })
        });
    })

    console.log(Player.pseudo);

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
    <span>Etat actuel : </span>

    <h2>Ajout d'une carte distance</h2>
    <div id="buttonList"></div>

    <h2>Ajout d'une carte malus</h2>
    <div id="malusList"></div>

    <h2>Ajout d'une carte bonus</h2>
    <div id="bonusList"></div>

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

    #buttonList {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

</style>
