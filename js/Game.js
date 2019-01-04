class Game {
  constructor () {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  createPlayers() {
    players = [];
    players.push(new Player('Player1', 1,  '#e15258', true ));
    players.push(new Player('Player2', 2,  "#e59a13" ));
    return players;
  }
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;


  }
  get activePlayer () {
    this.players.find(player => player.active);
  }

}
