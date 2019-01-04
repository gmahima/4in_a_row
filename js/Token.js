class Token {
  constructor (index, owner) {
    this.owner = owner
    this.id = `token-${index}-${owner.id}`
    this.dropped = false
  }

  drawHTMLToken() {
    const token = document.createElement("div");
    token.setAttribute("id", this.id);
    token.setAttribute("class", "token");
    document.getElementById("game-board-underlay").appendChild(token);
    token.style.backgroundColor = this.owner.color;
  }
  get htmlToken() {
    document.getElementById(this.id);
  }

}
