class Board{
  constructor(){
    this.grid= [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    this.winner = 'tie';
  }

  display(){
    console.log('_______' );
    console.log('        ' );
    console.log(`|${this.grid[0][0]}|${this.grid[0][1]}|${this.grid[0][2]}|`);
    console.log('_______' );
    console.log(`|${this.grid[1][0]}|${this.grid[1][1]}|${this.grid[1][0]}|`);
    console.log('_______' );
    console.log(`|${this.grid[2][0]}|${this.grid[2][1]}|${this.grid[2][2]}|`);
    console.log('_______' );
  }
  isValidMove(postion){
    if(this.grid.postion === ' ')  return true;
    return false;
  }
  placeMove(symbol,col , row){
      this.grid[col][row] = symbol;
  }

  isWinner(){
    if(this.grid[0] === this.grid[1] && this.grid[0] === this.grid[2]){
      this.winner = this.grid[0];
      return true;
    }else if(this.grid[3] === this.grid[4] && this.grid[3] === this.grid[5]){
      this.winner = this.grid[0];
      return true;
    }

    return false;
  }


}

var b = new Board();
b.placeMove('x' , 0,0);
b.display();

module.exports = Board;
