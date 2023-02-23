export class Game{
    room = '';
    players = [];
    deck = [];
    defausse = [];
    currentPlayerIndex = 1;
    constructor(room = 'room1', players) {
        this.room = room;
        this.players = players;
        this.deck =  [];
        this.defausse = [];
        this.currentPlayerIndex = 1;
    }
}