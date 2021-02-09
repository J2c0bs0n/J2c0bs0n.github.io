//Major Project
let choice;

let name;

let theGameBegin = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  displayText();
  keyPressed();
  chapter1();
}

function displayText(){
  textSize(20);
  stroke("black");
  fill("white");
  text("Welcome to Norcay! Press the spacebar to start the game!", 559, 384);
}

function keyPressed(){
  if (key === " "){
    createCanvas(windowWidth, windowHeight);
    background("black");
    textSize(20);
    name = prompt("What is your name?");
    return name;
  }
  if (key === "a" && theGameBegin === 1){
    textSize(20);
    stroke("black");
    fill("white");
    text("You wake up in a thick forest. You know not of who you are, where you are, or why you're there.", mouseX, mouseY);
    choice = prompt("What do you do?");
  }
}

function chapter1(){
  textSize(20);
  stroke("black");
  fill("white");
  text("Hello " +name+ "!To begin the game, press the a button.", mouseX, mouseY);
  theGameBegin === 1;
}