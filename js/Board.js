class Board {
  constructor () {
    this.rows = 6;
    this.coloumns = 7;
    this.spaces = this.createSpaces();
  }
  createSpaces () {
    let spaces = [];
    for (let i = 0; i < this.coloumns; i++) {
      const coloumn = [];
      for (let j = 0; j < this.rows; j++) {
        const space = new Space(i, j);
        coloumn.push(space);
      }
      spaces.push(coloumn);

    }
    return spaces;

  }

  drawHTMLBoard() {
    for (let i= 0; i< this.spaces.length; i++) {
      let spaceArray = this.spaces[i];
      for (let j= 0; j<spaceArray.length; j++){
        let space = spaceArray[j];
        space.drawSVGSpace();
      }
    }
  }
}
