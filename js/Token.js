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
    if (this.offsetLeft > 0) {
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.columnLocation -= 1;
    }
  }
  moveRight(columns) {
      /**
   * Moves html token one column to right.
   * @param   {number}    columns - number of columns in the game board
   */
console.log(`columnLocation:${this.columnLocation}`);
    if (this.columnLocation < (columns-1)) {
      console.log(`offsetLeftBefore:${this.offsetLeft}`);
      this.htmlToken.style.left = this.offsetLeft + 76;
      console.log(`offsetLeftAfter:${this.offsetLeft}`);
      this.columnLocation += 1;
      console.log(`columnLocation:${this.columnLocation}`);
    }
  }
  drop(target, reset) {
      /**
   * Drops html token into targeted board space.
   * @param   {Object}   target - Targeted space for dropped token.
   * @param   {function} reset  - The reset function to call after the drop animation has completed.
   */
   this.dropped = true;
   $(this.htmlToken).animate({
    top: (target.y * target.diameter)
   }, 750, 'easeOutBounce', reset);

  }


}
