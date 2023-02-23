<script>
    import { io } from 'socket.io-client';
    import { onDestroy, onMount } from 'svelte';
    import Board from "../../components/Board.svelte";
    import Hand from "../../components/Hand.svelte";
    import PlayerBoard from "../../components/PlayerBoard.svelte";
    import Deck from "../../components/Deck.svelte";
    import Chat from "../../components/Chat.svelte";

    import {blockActions} from "../../utils/blockActions.js";

	import PlayerInfo from '../../components/PlayerInfo.svelte';


    const socket = io('http://localhost:9999');

    let nPlayer = undefined;

    let players = [];
    let me = undefined;
    let playersWithoutMe = [];
    $: {
        if (players.length > 0) {
            me = players.find((player)=>player.me)
            playersWithoutMe = players.filter((player)=>!player.me)
        }
    }

    onMount(() => {
        socket.on('connect', () => {
            socket.emit('join_room', 'room1', nPlayer, (player) => {
                console.log("Player ",player);
                nPlayer = player;
            });
        });

        socket.on('get_playerInfo', (newPlayers) => {
            players = [...newPlayers]
        });

        socket.on('get_pickCard', ({nPlayer}) => {
            console.log(`${nPlayer} picked one card`);
        });

        socket.on('get_newCard', (newCard) => {
            me.hand = [...me.hand, newCard]
        });

        socket.on('get_nextPlayer', (nextPlayer) => {
            if(nPlayer === nextPlayer) {
                blockActions(false)
            } else {
                blockActions(true)
            }
            console.log(`${nPlayer} is next player`);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
        socket.on('get_playCard', ({nPlayer, card}) => {
            console.log(`${nPlayer} get ${card.name}`);
            if(card.type == "Spéciale") nPlayer.specialCards.push(card)
             else if (card.type == "Bonus" || card.type == "Malus"){
                 nPlayer.state = card
            }
            else if(card.type == "Distance"){
                nPlayer.distanceCard = card
            }
        });
    });

    onDestroy(() => {
        socket.disconnect();
    });

    const onDrawCard = () => {
        if(me.hand.length < 7){
            socket.emit('send_pickCard', {nPlayer});

            let listMessage = document.getElementById('listMessage');
            let message = document.createElement('li');
            message.textContent = `${nPlayer} picked one card`;
            listMessage.appendChild(message);
        }
    };
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="layout">
    <section class="board">
        <Board />
    </section>
    <section class="top-player">
        <Hand isPlayer={false} cards={playersWithoutMe[0]?.hand} />
        <PlayerInfo player={playersWithoutMe[0]} position={"top"}/>
        <PlayerBoard />
    </section>
    <section>
        <Chat />
    </section>
    <section class="left-player">
        <PlayerBoard specialCard={playersWithoutMe[1]?.specialCards} stateCard={playersWithoutMe[1]?.state} milesCard={playersWithoutMe[1]?.distanceCard}/>
        <Hand isPlayer={false} cards={playersWithoutMe[1]?.hand}/>
        <PlayerInfo player={playersWithoutMe[1]} position={"left"}/>
    </section>
    <section class="deck-area">
        <Deck drawCard={onDrawCard} />
    </section>
    <section class="right-player">
        <PlayerBoard specialCard={playersWithoutMe[2]?.specialCards}  stateCard={playersWithoutMe[2]?.state} milesCard={playersWithoutMe[2]?.distanceCard}/>
        <Hand isPlayer={false} cards={playersWithoutMe[2]?.hand}/>
        <PlayerInfo player={playersWithoutMe[2]} position={"right"}/>
    </section>
    <section></section>
    <section class="active-player">
        <PlayerBoard specialCard={me?.specialCards} stateCard={me?.state} milesCard={me?.distanceCard}/>
        <div class="playerInfo">
        <Hand isPlayer={true} cards={me?.hand}/>
        <PlayerInfo player={me}/>
        </div>
    </section>
</div>

<style>
    .board {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }
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
        grid-template-rows: 1fr 300px 1.2fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 100vh;
    }

    .deck-area {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .playerInfo{
      display: flex;


    }
    #pItop{

    }

    .playerInfoRight{
        display: flex;
        flex-direction: row;
    }
</style>
