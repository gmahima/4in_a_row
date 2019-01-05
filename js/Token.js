class Token {
  constructor (index, owner) {
    this.owner = owner
    this.id = `token-${index}-${owner.id}`
    this.dropped = false;
    this.columnLocation = 0;
  }

  drawHTMLToken() {
    const token = document.createElement("div");
    token.setAttribute("id", this.id);
    token.setAttribute("class", "token");
    document.getElementById("game-board-underlay").appendChild(token);
    token.style.backgroundColor = this.owner.color;
  }
  get htmlToken() {
    return document.getElementById(this.id);
  }
  get offsetLeft() {
      /**
   * Gets left offset of html element.
   * @return  {number}   Left offset of token object's htmlToken.
   */
    return this.htmlToken.offsetLeft;
  }
  moveLeft () {
      /**
   * Moves html token one column to left.
   */
    if (this.offsetLeft != 0) {
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.coloumnLocation -= 1;
    }
  }
  moveRight (coloumns) {
      /**
   * Moves html token one column to right.
   * @param   {number}    columns - number of columns in the game board
   */

    if (this.offsetLeft != (coloumns-1)*76) {
      this.htmlToken.style.left = this.offsetLeft + 76;
      this.coloumnLocation += 1;
    }
  }


}
