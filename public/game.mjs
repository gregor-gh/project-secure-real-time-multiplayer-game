import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const BG_COLOUR = "#F1FFD7";

const socket = io();

socket.on("init", handleInit);
socket.on("gamestate", handleGameState);

const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

// set background colour
context.fillStyle = BG_COLOUR;
context.fillRect(0, 0, canvas.width, canvas.height);

document.addEventListener("keydown", keydown);

function keydown(e) {
  console.log(e.keyCode);
}

function paintGame(state) {
  context.fillStyle = BG_COLOUR;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const player = state.player;
  const collectible = state.collectible;
  const gridsize = state.gridsize;
  const size = canvas.width / gridsize;

  // paint collectible
  context.fillStyle = "red";
  context.fillRect(collectible.x * size, collectible.y * size, size, size);

  // paint player
  context.fillStyle = "blue";
  context.fillRect(player.x * size, player.y * size, size, size);
}

function handleInit(msg) {
  console.log(msg)
}

function handleGameState(gameState) {
  gameState = JSON.parse(gameState);
  requestAnimationFrame(() => paintGame(gameState));
}

paintGame()

// const player = new Player(100, 100, 0, 1);



// context.beginPath();
// context.arc(player.x, player.y, 15, 0, Math.PI * 2, false);
// context.fill();
// player.draw(context);