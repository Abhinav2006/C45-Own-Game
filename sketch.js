var player1;
var fighter1;
var playerCount = 0;
var database;
var gameState = 0;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  fighter1 = createSprite(600, 350, 20, 20);
  fighter1.shapeColor = "blue"
  fighter1.visible = false

  if(gameState === 0){
    Player.getCount();
    form = new Form();
  }
}

function draw() {
  background(128);
  form.display();
  if(playerCount === 4){
    background(37)
    game = new Game();
    game.update(1);
    gameState = 1
  }
  if (gameState === 1){
    game.start();
    fighter1.visible = true
  }
}
