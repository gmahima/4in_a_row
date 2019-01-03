Board {
  constructor () {
    this.rows = 6;
    this.coloumns = 7;
    this.spaces = createSpaces();
  }
  createSpaces () {
    for (let i = 0; i < this.rows; i++) {
      let spaces = new Array(this.rows);
      spaces[i] = new Array(this.coloumns);
      for (let j = 0; j < this.coloumns; j++) {
      spaces[i][j] = new Space(i, j);

      }
    }
  }
}
