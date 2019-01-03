Player {
  constructor (name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }
  createTokens(n) {
    for (let i = 0; i<number; i++) {
      const tokens = [];
      let token = new Token(i, this)
      tokens.push(token);
      return tokens

    }

  }
}
