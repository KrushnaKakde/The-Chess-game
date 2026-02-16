const express = require('express');
const http = require("http");
const socket = require('socket.io');
const { Chess } = require('chess.js');
const path = require('path');
const { title } = require('process');
const { disconnect } = require('cluster');
const { on } = require('events');

const app = express();

const server = http.createServer(app);// Create an HTTP server using the Express app
const io = socket(server);// Initialize Socket.IO with the HTTP server

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // Set EJS as the templating engine

const chess = new Chess(); // Crea te a new chess game instance
let players = {}; // Object to keep track of connected players
let currentplayer = 'w'; // Start with white player

app.get('/', (req, res) => {
    res.render("index", {title: "Chess Game", chess: chess}); // Render the index.ejs template and pass the chess game instance
});

io.on('connection', (uniqueSocket) => {
    console.log('A user connected: ');

    if(!players.white) {
        players.white = uniqueSocket.id;
        uniqueSocket.emit("player assigned", "white");
    } else if(!players.black) {
        players.black = uniqueSocket.id;
        uniqueSocket.emit("player assigned", "black");
    } else {
        uniqueSocket.emit("spectatorRole");
    }
    uniqueSocket.on("disconnect", () => {
        if(uniqueSocket.id == players.white) {
            delete players.white;
        } else if(uniqueSocket.id == players.black) {
            delete players.black;
        }
    });

    uniqueSocket.on("move", (move) => {
        try{
            if(chess.turn() == "w"&& uniqueSocket.id !== players.white) return;
            if(chess.turn() == "b"&& uniqueSocket.id !== players.black) return;

            let result = chess.move(move);
            if(result) {
                currentplayer = chess.turn();
                io.emit("move", move);
                io.emit("boardState", chess.fen());
            }
            else{
                console.log("Invalid move : move", move);
                uniqueSocket.emit("invalid move", move);
            }
            
        }
        catch(err) {
            console.log(err);
            uniqueSocket.emit("invalid move", move);
        }
    });

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});