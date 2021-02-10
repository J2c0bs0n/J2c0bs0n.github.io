//Major Project
let dialogueText = ["What do you do?","What is your name?", "You wake up in a dense forest, of which you don't recognize. You don't know who you are, or where you came from. All you know, is that you need to get out."];

let name;

let choice;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  chapter1();
  showMessage();
}

function keyPressed() {
  if (key === " ") {
    createCanvas(windowWidth, windowHeight);
    background("black");
    textSize(20);
    name = prompt(dialogueText[1]);
  }
  if (name !== undefined && key === "a") {
    textSize(15);
    stroke("black");
    fill("white");
    choice = prompt(dialogueText[2]);
    if (choice === "okay"){
      choice = prompt(dialogueText[0])
    }
    else if(choice === "" || choice === " "){
      choice = prompt("Please put in an awnser " +name+ ".");
    }
  }
}

function chapter1() {
  if (key !== "a" && key === " ") {
    textSize(20);
    stroke("black");
    fill("white");
    text("Hello " + name + "! To begin the game, press the a button.", mouseX, mouseY);
  }
}

function showMessage() {
  if (key !== " " && key !== "a") {
    textSize(20);
    stroke("black");
    fill("white");
    text("Welcome to Norcay! Press the spacebar to start the game!", 559, 384);
  }

}