Board {
  constructor () {
    this.rows = 6;
    this.coloumns = 7;
    this.spaces = this.createSpaces();
  }
  createSpaces () {
    let spaces = [];
    for (let i = 0; i < this.coloumns; i++) {
      const coloumm = [];
      for (let j = 0; j < this.rows; j++) {
        const space = new Space(i, j)
        coloumn.push(space);
      }
      spaces.push(coloumn)

    }
    return spaces;

  }
}
