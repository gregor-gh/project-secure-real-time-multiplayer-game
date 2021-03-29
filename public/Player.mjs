const RADIUS = 15;
const PLAYER_COLOUR = "red";

class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, RADIUS, 0, Math.PI * 2, false);
    context.fill();
  }

  movePlayer(dir, speed) {

  }

  collision(item) {

  }

  calculateRank(arr) {

  }
}

export default Player;
