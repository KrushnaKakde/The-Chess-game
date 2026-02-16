# The Chess Game

A real-time, browser-based multiplayer chess game built with Node.js, Express, Socket.IO, and chess.js. Players can join as White or Black, with spectators allowed. The board supports drag-and-drop moves and enforces turn-based gameplay.

## Features

- **Real-time multiplayer** via WebSocket (Socket.IO)
- **Drag-and-drop chess board** with piece Unicode symbols
- **Turn validation** (only White/Black can move on their turn)
- **Spectator mode** for additional viewers
- **Responsive UI** with Tailwind CSS
- **FEN-based board state sync** after every move

## Tech Stack

- **Backend**: Node.js, Express, Socket.IO
- **Frontend**: Vanilla JS, HTML, Tailwind CSS
- **Chess logic**: chess.js
- **Real-time**: WebSocket (Socket.IO)

## Prerequisites

- Node.js (v14+)
- npm

## Installation

```bash
git clone https://github.com/KrushnaKakde/The-Chess-game.git
cd The-Chess-game
npm install
```

## Running the App

```bash
npm start
# or for development with auto-reload:
npm run dev
```

Open `http://localhost:3000` in your browser.

## How It Works

1. Two players can join as White and Black.
2. Additional users join as spectators.
3. Players drag pieces to make moves.
4. Server validates moves and broadcasts new board state.
5. Board updates in real-time for all connected clients.

## Project Structure

```
.
├── app.js              # Express server and Socket.IO logic
├── public/
│   └── js/
│       └── chessgame.js # Frontend chess board and interaction
├── views/
│   └── index.ejs       # Main HTML template with board styles
└── package.json
```

## Scripts

- `npm start` — start the server
- `npm run dev` — start with nodemon (if added)

## License

ISC
