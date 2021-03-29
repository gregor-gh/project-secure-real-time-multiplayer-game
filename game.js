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

module.exports = { createGameState };