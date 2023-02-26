<script>
    import {io} from 'socket.io-client';
    import {onDestroy, onMount} from 'svelte';
    import Board from "../../components/Board.svelte";
    import Hand from "../../components/Hand.svelte";
    import PlayerBoard from "../../components/PlayerBoard.svelte";
    import Deck from "../../components/Deck.svelte";
    import Chat from "../../components/Chat.svelte";
    import Chat2 from "../../components/Chat2.svelte";

    import {blockActions} from "../../utils/blockActions.js";
    import {canPutCard} from "../../utils/canPutCard.js";

    import PlayerInfo from '../../components/PlayerInfo.svelte';
    import Discard from '../../components/Discard.svelte';
    import Note from "../../components/Note.svelte";
	import { CardType } from '../../utils/cardTypeEnum';


    const socket = io('http://localhost:9999');

    let nPlayer = undefined;

    let players = [];
    let me = undefined;
    let playersWithoutMe = [];
    let discard = [];
    let currentPlayer = 0;
    let noteInfo = {
        text: "",
        isActionNeeded: false
    }

    $: {
        if (players.length > 0) {
            me = players.find((player) => player.me)
            playersWithoutMe = players.filter((player) => !player.me)
        }
    }

    onMount(() => {
        socket.on('connect', () => {
            socket.emit('join_room', 'room1', nPlayer, (player) => {
                console.log("Player ", player);
                nPlayer = player;

                if (player !== 0) blockActions(true)
            });
        });

        socket.on('get_playerInfo', (newPlayers) => {
            players = [...newPlayers]
            noteInfo = nPlayer === 0 ? {
                text: "C'est votre tour. Piochez une carte.",
                isActionNeeded: true
            } : {
                text: `Tour de ${players[0].pseudo}`,
                isActionNeeded: false
            }
        });

        socket.on('get_pickCard', ({nPlayer}) => {
            console.log(`${nPlayer} picked one card`);
        });

        socket.on('get_newCard', (newCard) => {
            me.hand.push(newCard)
            me.hand = me.hand

            noteInfo = {
                text: `Jouez une carte`,
                isActionNeeded: true
            }
        });
        socket.on('get_nextPlayer', ({nextPlayer, noDistCard,noDistCardInDeck}) => {
            console.log('first', noDistCard,noDistCardInDeck)
            //game finish by 1000km reached
            if (isDistanceReached()!=false){
                blockActions(true)
                noteInfo = {
                    text:`Partie terminée. ${isDistanceReached()} a remporté la course !`,
                    isActionNeeded: false
                }
            }

             else if (noDistCard && noDistCardInDeck){
                blockActions(true)
                noteInfo = {
                    text:`Il n'ya plus de carte distance. ${players[nextPlayer].pseudo} a remporté la course !`,
                    isActionNeeded: false
                }
            }
            else {
                if (nPlayer === nextPlayer) {
                    blockActions(false)
                    noteInfo = {
                        text: "C'est votre tour. Piochez une carte.",
                        isActionNeeded: true
                    }
                }
                else {
                    blockActions(true)
                    noteInfo = {
                        text: `Tour de ${players[nextPlayer].pseudo}`,
                        isActionNeeded: false
                    }
                }
                currentPlayer = nextPlayer
                console.log(`${nPlayer} is next player`);
            }
            
        }
        );

        socket.on('get_playCard', ({nPlayer, card}) => {
            console.log(`${nPlayer} get ${card.name}`);

            if (card.type === CardType.SPEC) players[nPlayer].specialCards.push(card)
            else if (card.type === CardType.BON || card.type === CardType.MAL) {
                players[nPlayer].state = card
            } else if (card.type === CardType.DIST) {
                players[nPlayer].distanceCard = card
            }

            players = players
        });
        socket.on('get_discardCard', ({card}) => {
            discard.push(card)
            discard = discard
        });

        socket.on('get_distance', ({nPlayer, distance}) => {
            players[nPlayer].progress = distance
            players = players

            console.log(`Distance : ${distance} km`);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    });

    onDestroy(() => {
        socket.off('get_playerInfo');
        socket.off('get_pickCard');
        socket.off('get_newCard');
        socket.off('get_nextPlayer');
        socket.off('get_playCard');
        socket.off('disconnect');
    });

    const onDrawCard = () => {
        if (me.hand.length < 7) {
            socket.emit('send_pickCard', {nPlayer});

            let listMessage = document.getElementById('listMessage');
            let message = document.createElement('li');
            message.textContent = `${nPlayer} picked one card`;
            listMessage.appendChild(message);
        }
    };

    const playCard = (target, card) => {
        let nPlayer2 = players.findIndex((player) => player.pseudo === target.pseudo)
        const cardIndex = me.hand.findIndex((cardPlayer) => cardPlayer.id === card.id)
        me.hand.splice(cardIndex, 1)
        me = me

        socket.emit('send_playCard', {
            nPlayer: nPlayer,
            nPlayer2: nPlayer2,
            card: card
        });
    }
    const discardCard = (card) => {
        let nPlayerIndex = players.findIndex((player) => player.pseudo === me.pseudo)
        const cardIndex = me.hand.findIndex((cardPlayer) => cardPlayer.id === card.id)
        me.hand.splice(cardIndex, 1)
        me = me

        socket.emit('send_discardCard', {
            nPlayer: nPlayerIndex,
            card: card
        });
    }
    const isDistanceReached = () => {
        let result = false
    players.forEach(player => {
        //un joueur a parcouru 1000km
        if (player.progress >= 1000){
            result = player.pseudo
        }
    }
    );
    return result
}

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<div class="layout">
    <section></section>
    <section class="top-player">
        <Hand isPlayer={false} cards={playersWithoutMe[0]?.hand} position={"top"}/>
        <PlayerInfo player={playersWithoutMe[0]} position={"top"}/>
        <PlayerBoard position={"top"}
                     specialCard={playersWithoutMe[0]?.specialCards}
                     stateCard={playersWithoutMe[0]?.state}
                     milesCard={playersWithoutMe[0]?.distanceCard}/>
    </section>
    <section>
        <!-- <Chat/> May to implement on further improvement -->
        <Chat2/>
    </section>
    <section class="left-player">
        <PlayerBoard position={"left"}
                     specialCard={playersWithoutMe[1]?.specialCards}
                     stateCard={playersWithoutMe[1]?.state}
                     milesCard={playersWithoutMe[1]?.distanceCard}/>
        <Hand isPlayer={false} cards={playersWithoutMe[1]?.hand}/>
        <PlayerInfo player={playersWithoutMe[1]} position={"left"}/>
    </section>
    <section class="deck-area">
        <div>
            <Discard discard={discard}/>
            <Deck drawCard={onDrawCard}/>
        </div>
        <Note text={noteInfo.text} isActionNeeded={noteInfo.isActionNeeded}/>
    </section>
    <section class="right-player">
        <PlayerBoard position={"right"}
                     specialCard={playersWithoutMe[2]?.specialCards}
                     stateCard={playersWithoutMe[2]?.state}
                     milesCard={playersWithoutMe[2]?.distanceCard}/>
        <Hand isPlayer={false} cards={playersWithoutMe[2]?.hand}/>
        <PlayerInfo player={playersWithoutMe[2]} position={"right"}/>
    </section>
    <section></section>
    <section class="active-player">
        <PlayerBoard specialCard={me?.specialCards} stateCard={me?.state} milesCard={me?.distanceCard}/>
        <Hand isPlayer={true} cards={me?.hand} me={me} players={playersWithoutMe} playCard={playCard} discardCard={discardCard}/>
        <PlayerInfo player={me}/>
    </section>
</div>

<style>
    .active-player {
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(40px);
    }

    .top-player {
        gap: 10px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        transform: rotate(180deg);
    }

    .left-player {
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: rotate(90deg);
    }

    .right-player {
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: rotate(-90deg);
    }

    .layout {
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
        grid-template-rows: 1fr 1fr  1.5fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 100vh;
        background-image: url("../../lib/images/bg_board.jpg");
        background-size: cover;
    }

    .deck-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .deck-area div {
        display: flex;
    }
</style>
