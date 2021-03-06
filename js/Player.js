class Player {
  constructor (name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }
  createTokens(n) {
    for (let i = 0; i<n; i++) {
      const tokens = [];
      let token = new Token(i, this);
      tokens.push(token);
      return tokens;

    }

  }
  get unusedTokens () {
    return this.tokens.filter(token => token.dropped === false);
  }
  get activeToken () {
    return this.unusedTokens[0];

  }
  checkTokens() {
    if (this.unusedTokens > 0) {
      return true;
    }
    else {
      return false;
    }
  }
}
