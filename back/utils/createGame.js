import {Player} from "../classes/Player.js";
import {Game} from "../classes/Game.js";

export function createGame() {
    const player1 = new Player("Player 1", null, "#FF0000")
    const player2 = new Player("Player 2", null, "#0000FF")
    const player3 = new Player("Player 3", null, "#00FF00")
    const player4 = new Player("Player 4", null, "#888888")

    const game = new Game("room", [player1, player2, player3, player4])
    game.distributeinitialCards()

    return game
}