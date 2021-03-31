const { GRID_SIZE } = require("./constants");

function createGameState() {
  return {
    player: {
      x: 3,
      y: 10,
      dir: "up",
      vel: 1
    },
    collectible: {
      x: 7,
      y: 7,
    },
    gridsize: GRID_SIZE,
  }
}

function gameLoop(state) {
  if (!state) {
    return;
  }

  const playerOne = state.player;

  switch (playerOne.dir) {
    case "up":
      playerOne.y += 1;
      break;
    case "down":
      playerOne.y -= 1;
      break;
    case "left":
      playerOne.x -= 1;
      break;
    case "right":
      playerOne.x += 1;
      break;
  }

  // TODO handle moving outside of gamepsace

  //if (state.collectible.x==playerOne.x & state.collectible.y==playerOne.y)

  //if (playerOne.x<0 || playerOne.x>GRID_SIZE || playerOne.y<y || playerOne.y>GRID_SIZE)

}





module.exports = { createGameState, gameLoop };