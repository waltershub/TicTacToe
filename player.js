var rl = require('readline');

 class Player{
  constructor(symbol,name){
    this.symbol = symbol;
    this.name = name;
  }

     getMove( callback) {
     var r = rl.createInterface({
       input: process.stdin,
       output: process.stdout});
       r.question("where would you like to move" + '\n', (answer) => {
       r.close();
       callback( answer);
     });
   }

}

var player1 = new Player("x","walter");

console.log(player1.name);
console.log(player1.symbol);
player1.getMove((move)=>{
  console.log(move);
});

module.exports = Player;
