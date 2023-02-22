import { createServer } from "http";
import { Server } from "socket.io";
import {createGame} from "./utils/createGame.js";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

let jsonGame = {};

io.on("connection", (socket) => {
    socket.on("join_room", (room, nPlayer, callback) => {
        console.log("Connected");
        socket.join(room);
        socket.data.room = room;

        callback(nPlayer ?? io.sockets.adapter.rooms.get(room).size);

        if(io.sockets.adapter.rooms.get(room).size === 1 && !nPlayer) {
            jsonGame = createGame();
            console.log(jsonGame)
        }

        const socketsInRoom = io.sockets.adapter.rooms.get(room);
        if(socketsInRoom.size === 4) {
            Array.from(socketsInRoom).forEach((socketId) => {
                const socketIndex = Array.from(socketsInRoom).indexOf(socketId);
                //Send player info to each player
                io.to(socketId).emit("get_playerInfo", jsonGame.players[socketIndex]);
            });
        }
    });

    /**
     * Sending to all clients in room
     * @param {string} name
     * @param {*} data
     */
    const sendAll = (name, data) => {
        socket.to(socket.data.room).emit(name, data);
    };

    /**
     * Sending to all client in room except sender
     * @param {string} name
     * @param {*} data
     */
    const sendAllExceptSender = (name, data) => {
        socket.broadcast.to(socket.data.room).emit(name, data);
    }

    /**
     * Sending to on client in room
     * @param {string} name
     * @param {*} nPlayer
     * @param {*} data
     */
    const sendTo = (name, nPlayer, data) => {
        const socketId = io.sockets.adapter.rooms.get(socket.data.room)[nPlayer - 1];
        socket.to(socketId).emit(name, data);
    }

    socket.on("send_pickCard", ({nPlayer,name}) => {
        //TODO: traitement de la carte piochée et modification du JSON

        //S'il n'y a plus de carte dans la pioche, la défausse devient la pioche et le signale à tous les joueurs

        sendAllExceptSender("get_pickCard", null); //TODO: doit signaler qu'un joueur a pioché une carte
        sendTo("get_pickCard", nPlayer, null); //TODO: doit renvoyer la carte piochée
    });

    socket.on("send_playCard", ({nPlayer,nPlayer2,card}) => {
        //TODO: traitement de la carte jouée et modification du JSON

        if (card.type === "distance") {
            sendAll("get_distance", card.distance) //TODO: doit mettre à jour la distance
        }

        if(nPlayer2 === nPlayer){
            sendAllExceptSender("get_playCard", null); //TODO: doit signaler que le joueur a joué une carte
        } else{
            sendAll("get_playCard", null); //TODO: doit signaler que le joueur a posé une carte chez l'adversaire
        }
    });

    socket.on("send_discardCard", ({nPlayer,card}) => {
        //TODO: traitement de la carte défaussée et modification du JSON

        sendAll("get_discardCard", null); //TODO: doit signaler que le joueur a défaussé une carte
    });
});

httpServer.listen(9999, () => {
    console.log(`Socket IO is running on port 9999.`);
});