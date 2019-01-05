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
    const game = this;
    const spaces = game.board.spaces;
    const activeToken = game.activePlayer.activeToken;
    const targetColumn = spaces[activeToken.columnLocation];
    console.log(targetColumn);
    let targetSpace = null;
    for (let space of targetColumn) {
      if (space.token == null) {
        targetSpace = space;
      }

    }
    if (targetSpace !== null) {
      console.log("hi");
      game.ready = false;
      activeToken.drop(targetSpace, function(){
     //callback function code here
     game.updateGameState(activeToken, targetSpace);

     });
    }



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

     this.playToken();

      }
    }

  }
  checkForWin(target){
      const owner = target.token.owner;
      let win = false;

      // vertical
      for (let x = 0; x < this.board.columns; x++ ){
          for (let y = 0; y < this.board.rows - 3; y++){
              if (this.board.spaces[x][y].owner === owner &&
                  this.board.spaces[x][y+1].owner === owner &&
                  this.board.spaces[x][y+2].owner === owner &&
                  this.board.spaces[x][y+3].owner === owner) {
                      win = true;
              }
          }
      }

      // horizontal
      for (let x = 0; x < this.board.columns - 3; x++ ){
          for (let y = 0; y < this.board.rows; y++){
              if (this.board.spaces[x][y].owner === owner &&
                  this.board.spaces[x+1][y].owner === owner &&
                  this.board.spaces[x+2][y].owner === owner &&
                  this.board.spaces[x+3][y].owner === owner) {
                      win = true;
              }
          }
      }

      // diagonal
      for (let x = 3; x < this.board.columns; x++ ){
          for (let y = 0; y < this.board.rows - 3; y++){
              if (this.board.spaces[x][y].owner === owner &&
                  this.board.spaces[x-1][y+1].owner === owner &&
                  this.board.spaces[x-2][y+2].owner === owner &&
                  this.board.spaces[x-3][y+3].owner === owner) {
                      win = true;
              }
          }
      }

      // diagonal
      for (let x = 3; x < this.board.columns; x++ ){
          for (let y = 3; y < this.board.rows; y++){
              if (this.board.spaces[x][y].owner === owner &&
                  this.board.spaces[x-1][y-1].owner === owner &&
                  this.board.spaces[x-2][y-2].owner === owner &&
                  this.board.spaces[x-3][y-3].owner === owner) {
                      win = true;
              }
          }
      }

      return win;
  }
  switchPlayer () {
    for (let player in this.players) {
      player.active === true ? false : true;
    }
  }
  gameOver(message) {
    const gameOver = document.getElementById("game-over");
    gameOver.textContent = message;
    gameOver.style.display = 'block';

  }
  updateGameState(token, target) {
        /**
    * Updates game state after token is dropped.
    * @param   {Object}  token  -  The token that's being dropped.
    * @param   {Object}  target -  Targeted space for dropped token.
    */
    target.mark(token);
    // if(this.checkForWin) {
    //   this.gameOver(`${target.owner.name} wins`);
    // }
    // else {
      this.switchPlayer();
      if (this.activePlayer.checkTokens) {
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;

      }
      else {
        this.gameOver(`no more tokens`);
      }
    // }
  }

}
