var database, gameState = 0, playerCount, form, game, player, canvas

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  
}
