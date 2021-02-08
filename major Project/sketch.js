//Major Project

let name;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  displayText();
  keyPressed();
  beginName();
}

function displayText(){
  textSize(20);
  stroke("black");
  fill("white");
  text("Welcome to Norcay! Put in begin to start the game!", 559, 384);
}

function keyPressed(){
  if (key === " "){
    createCanvas(windowWidth, windowHeight);
    background("black");
    textSize(20);
    name= prompt("What is your name?", 659, 384);
    return name;
  }
}

function beginName(){
  if (name[0] === "a" || name[0] === 1){
    textSize(20);
    stroke("black");
    fill("white");
    text("Let your journey begin!", 559, 384);
  }
}