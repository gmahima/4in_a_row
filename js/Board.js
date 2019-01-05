class Board {
  constructor () {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }
  createSpaces () {
    let spaces = [];
    for (let i = 0; i < this.columns; i++) {
      const column = [];
      for (let j = 0; j < this.rows; j++) {
        const space = new Space(i, j);
        column.push(space);
      }
      spaces.push(column);

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
