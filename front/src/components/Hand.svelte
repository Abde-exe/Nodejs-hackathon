<script>
    import Card from "./Card.svelte";
    import Action from "./Action.svelte";

    export let isPlayer;
    export let cards;
    export let me = undefined
    export let players = undefined
    export let playCard = undefined;
    export let position = undefined;

    let showActionCard = undefined

    const closeAction = () =>{
        showActionCard = undefined
    }
    const showAction = (card) =>{
        if(cards.length === 7){
            showActionCard = card
        }
    }

</script>

<ul class="cards" id={position}>
    {#if cards && Array.isArray(cards)}
        {#each cards as card}
            <Card card={card} isPlayer={isPlayer} click={() => showAction(card)}/>
        {/each}
    {/if}
    {#if showActionCard && me && players && playCard !== undefined}
        <Action card={showActionCard} closeAction={closeAction} me={me} players={players} playCard={playCard} />
    {/if}
</ul>


<style>
    .cards {
        display: flex;
        position: relative;
        justify-content: center;
        /* height: 0%; */
    }
    #top{
        max-width: 30vw; 

    }
</style>