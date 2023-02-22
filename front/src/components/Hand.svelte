<script>
	import back_card from "../lib/cards/back_card.jpg";
    import img from "../lib/cards/characters/img_harry_potter.jpg";

    export let isPlayer;

    let cardsInHand = [
		{   name: 'Bombe bleue',
            description: 'Avance de 25 km',
            distance: 25,
            number: 10,
            type: "special",
            img: '' 
        },
        {   name: 'Cape d\'invisibilité',
            description: '',
            distance: 25,
            number: 10,
            type: 'malus',
            img: '' 
        },
        {   name: 'Bombe bleue',
            description: '',
            distance: 25,
            number: 10,
            type: 'bonus',
            img: '' 
        },
        {   name: 'Bombe bleue',
            description: '',
            distance: 25,
            number: 10,
            type: 'miles',
            img: '' 
        },
        {   name: 'Bombe bleue',
            description: '',
            distance: 25,
            number: 10,
            img: '' 
        },
        {   name: 'Bombe bleue',
            description: '',
            distance: 25,
            number: 10,
            img: '' 
        }
	];

    
</script>

<ul class="cards">
    {#each cardsInHand as card}
        {#if isPlayer === true}
            <li class="card">
                <div class="card__img">
                    <img src="{img}" alt="image of {card.name}">
                </div>
                <h2 class="card__title">{card.name}</h2>
                <p class="card__description">{card.description}</p>
            </li>
        {:else}
            <li class="card--bg">
                <div class="card__img">
                    <img src="{back_card}" alt="back of the card">
                </div>
            </li>
        {/if}
    {/each}
</ul>


<style>
    .cards {
        display: flex;
    }
    .card{
        width: 88px;
        padding: 8px;
        border-radius: 8px;
        background-color: rgb(231, 217, 22);
        border: solid 1px black;
        cursor: pointer;
    }
    .card--bg {
        width: 88px;
        border-radius: 8px;
    }
    .card--bg:not(:first-child) {
        margin-left: -40px;
    }
    .card__img img{
        border-radius: 8px;
    }
    .card__title {
        font-weight: 600;
        font-size: 0.9rem;
    }
    .card__description {
        font-size: 0.8rem;
    }
</style>