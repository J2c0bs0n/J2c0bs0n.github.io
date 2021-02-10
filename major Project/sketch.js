//Major Project
let name;

let choice;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  chapter1();
}

function keyPressed(){
  while (key !== "a" && key !== " "){
    textSize(20);
    stroke("black");
    fill("white");
    text("Welcome to Norcay! Press the spacebar to start the game!", 559, 384);
  }
  if (key === " "){
    createCanvas(windowWidth, windowHeight);
    background("black");
    textSize(20);
    name = prompt("What is your name?");
  }
  if (name !== undefined){
    if (key === "a"){
      textSize(15);
      stroke("black");
      fill("white");
      choice = prompt("What do you do?");
    }
    
  }
}

function chapter1(){
  if (key !== "a"){
      textSize(20);
      stroke("black");
      fill("white");
      text("Hello " +name+ "! To begin the game, press the a button.", mouseX, mouseY);

  }
}