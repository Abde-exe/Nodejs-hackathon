import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    socket.on("join_room", (room, cb) => {
        console.log("Connected");
        socket.join(room);
        socket.data.room = room;
        cb({
            value: `Connected`,
        });
    });

    /**
     * Sending to all clients in room except sender
     * @param {string} name
     * @param {*} data
     */
    const sender = (name, data) => {
        socket.broadcast.to(socket.data.room).emit(name, data);
    };

    socket.on("send_message", (data) => sender("get_message", data));

    socket.on("send_arrivalPoint", (data) => sender("get_arrivalPoint", data));

    socket.on("send_arrivalTime", (data) => sender("get_arrivalTime", data));

    socket.on("send_myData", (data) => sender("get_data", data));
});

httpServer.listen(9999, () => {
    console.log(`Socket IO is running on port 9999.`);
});