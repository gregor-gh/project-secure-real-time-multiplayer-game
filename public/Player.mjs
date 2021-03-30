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
    switch (dir) {
      case "up":
        this.y += speed;
        break;
      case "down":
        this.y -= speed;
        break;
      case "left":
        this.x -= speed;
        break;
      case "right":
        this.x += speed;
        break;
    }
  }

  collision(item) {
    if (item.x == this.x && this.y == item.y)
      return true;
    else
      return false;
  }

  calculateRank(arr) {
    const sorted = arr.sort((a, b) => b.score - a.score);
    let rank;
    sorted.forEach((el, i) => {
      if (el.id == this.id)
        rank = `Rank: ${i + 1}/${sorted.length}`;
    })

    return rank;
  }
}

export default Player;
