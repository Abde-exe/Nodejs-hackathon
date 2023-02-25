import {shuffleArray} from '../utils/shuffleArray.js';
import {createCards} from './Card.js';
import {Player} from './Player.js';

export class Game {
    constructor(room = 'room1', players) {
        this.room = room;
        this.players = players;
        this.deck = createCards();
        this.discard = [];
        this.currentPlayerIndex = 0;
        //this.currentPlayer = this.players[this.currentPlayerIndex];
    }

    //distribuer les cartes initiales a chaque joueur
    distributeInitialCards = () => {
        this.players.forEach((player) => {
            //ajouter 6 cartes à la main de chaque joueur depuis le deck (pioche)
            for (let i = 1; i <= 6; i++) {
                player.hand.push(this.deck.shift());
            }
        });
        return 'Les cartes ont été distribuées !';
    };

    //piocher une carte
    drawOneCard = (playerIndex) => {
        var player = this.players[playerIndex];
        if (player.hand > 6) {
            return 'Peut pas piocher une nouvelle carte';
        } else {
            const drawedCard = this.deck.shift();
            player.hand.push(drawedCard);
            return drawedCard;
        }
    };

    // remplir la pioche avec les cartes defaussées
    discardToDeck = () => {
        if (this.deck.length === 0) {
            this.deck = shuffleArray(this.discard);
        }
    };

    //passer d'un joueur a l'autre
    passPlayer = () => {
        let newIndex = (this.currentPlayerIndex + 1) % 4;
        this.currentPlayerIndex = newIndex;
        return newIndex;
    };
}

//const game = new Game();
//console.log('this.game.deck', game.deck.length);
//game.drawOneCard(game.players[0]);
//console.log('this.game.deck', game.deck.length);
//console.log('this.game.deck', game.players[0].hand);
//game.distributeinitialCards();
//console.log('players', game.players[0]);
