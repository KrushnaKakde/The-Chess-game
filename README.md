
# ♟️ Chess Game

![GitHub repo size](https://img.shields.io/github/repo-size/KrushnaKakde/chess)
![GitHub license](https://img.shields.io/github/license/KrushnaKakde/chess)
![Node.js CI](https://img.shields.io/github/workflow/status/KrushnaKakde/chess/Node.js%20CI?label=build)

![alt text](image.png)

## Overview

**Chess** is a real-time, browser-based multiplayer chess game built with Node.js, Express, Socket.IO, and chess.js. Play as White or Black, or spectate live games. The board supports drag-and-drop moves and enforces turn-based gameplay.

---

## 🚀 Features

- Real-time multiplayer (Socket.IO)
- Drag-and-drop chess board
- Turn validation (enforces chess rules)
- Spectator mode
- Responsive UI (Tailwind CSS)
- FEN-based board state sync

---

## 🛠️ Tech Stack

| Layer     | Technology                |
|-----------|---------------------------|
| Backend   | Node.js, Express, Socket.IO |
| Frontend  | Vanilla JS, HTML, Tailwind CSS |
| Chess Logic | chess.js                |

---

## 📦 Prerequisites

- Node.js (v14+)
- npm

---

## ⚡ Installation

```bash
git clone https://github.com/KrushnaKakde/chess.git
cd chess
npm install
```

---

## ▶️ Running the App

```bash
npm start
# or for development with auto-reload:

```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [chess.js](https://github.com/jhlywa/chess.js)
- [Socket.IO](https://socket.io/)
- [Tailwind CSS](https://tailwindcss.com/)

---


## 📷 Screenshots

![Chess Game Screenshot](public/chess-screenshot.png)

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
