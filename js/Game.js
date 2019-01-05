class Game {
  constructor () {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  createPlayers() {
    const players = [];
    players.push(new Player('Player1', 1,  '#e15258', true ));
    players.push(new Player('Player2', 2,  "#e59a13" ));
    return players;
  }
  get activePlayer() {
    return this.players.find(player => player.active);
  }
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;


  }
  playToken() {
    const spaces = this.board.spaces;
      const tc = spaces[this.activePlayer.activeToken.columnLocation];
      console.log(tc);


  }
  handleKeydown(e) {
    if (this.ready == true) {
      if (e.key == "ArrowLeft") {
        console.log('i');
        this.activePlayer.activeToken.moveLeft();

      }
      if (e.key == "ArrowRight") {
        console.log('ii');
        this.activePlayer.activeToken.moveRight(this.board.columns);
      }
      if (e.key == "ArrowDown") {
        console.log(`${this.playToken()} hi`);
        if (this.playToken() != undefined) {
          console.log("hi");
          this.ready = false;
          space.token = this.activePlayer.activeToken;
          this.activePlayer.activeToken.drop(this.playToken(), this.ready = true);
        }

      }
    }

  }


}
