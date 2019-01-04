Space {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.id = space-${x}-${y};
    this.token = null;
    this.diameter = 76;
    this.radius = this.diameter/2;

  }
}
