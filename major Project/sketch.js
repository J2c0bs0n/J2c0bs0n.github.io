//Norcay
//Austin Connell
//2/11/2021
let dialogueText = ["What do you do?","What is your name?", "You wake up in a dense forest, of which you don't recognize. You don't know who you are, or where you came from. All you know, is that you need to get out.", "You see a wall of trees.","You see an empty tree stump, but nothing else of notice.","You see a path ahead of you.","You appear to be in an open patch of grass. You don't really see much else.","You see a key inside. It looks normal. Do you want pick it up?","You now have a key. You go back to where you were before.","Got it, you go back to where you were standing before.","The stump is empty, because you took the key.","You see the key you picked up. It looks like an average key, but something seems off for some reason",];

let name;

let choice;

let counter = 0;

let theKey= 0;

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
    if (choice !== undefined){
      choice = prompt(dialogueText[0]);
    }
    
  }
}

function chapter1() {
  if (key !== "a" && key === " "){
    textSize(20);
    stroke("black");
    fill("white");
    text("Hello " + name + "! To begin the game, press the a button. To remove this message, cancel the prompt, then press a.", mouseX, mouseY);
  }
  if (choice === "look west"){
    choice = prompt (dialogueText[3]);
  }
  else if (choice === "look south"){
    choice = prompt(dialogueText[4])
  }
  else if (choice === "look north"){
    choice = prompt(dialogueText[5]);
  }
  else if (choice === "look east"){
    choice = prompt(dialogueText[3]);
  }
  else if (choice === "look around"){
    choice = prompt (dialogueText[6])
  }
  else if (choice === "go to tree stump"){
    choice = prompt(dialogueText[7])
    counter += 1;
  }
  else if (choice === "yes" && counter === 1){
    choice = prompt(dialogueText[8])
    counter -=1;
    theKey += 1;
  }
  else if(choice === "no" && counter === 1){
    choice = prompt(dialogueText[9]);
    counter -= 1;
  }
  else if (choice === "go to the tree stump" && theKey === 1){
    choice = prompt(dialogueText[10]);
  }
  else if (choice === "check key"){
    choice = prompt(dialogueText[11])
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