//Norcay
//Austin Connell
//2/11/2021
let dialogueText = ["What do you do?","What is your name?", `You wake up in a dense forest, of which you don't recognize. 
You don't know who you are, or where you came from. All you know, is that you need to get out.`, "You see a wall of trees.",
"You see an empty tree stump, but nothing else of notice.","You see a path ahead of you.",
"You appear to be in an open patch of grass. You don't really see much else.",
"You see a key inside. It looks normal. Do you want pick it up?","You now have a key. You go back to where you were before.",
"Got it, you go back to where you were standing before.","The stump is empty, because you took the key.",
"You see the key you picked up. It looks like an average key, but something seems off for some reason",
"You see a wooden door in front of you. Moss, vines, and other plant life have grown on, in, and around it.",
"You're at the door now. You see a keyhole. Do you wish to use the key?",`You open the door. You see a path, going in two directions.
They both appear to have been used for who knows how long. Do you wish to go down the path?`,`You go to where the fork in the path starts. 
As you reach the spot, you realize to late that the door behind you is gone. All you can do, is go down one of the two paths. Which do you go down?
Left, or Right?`,`You go down your chosen path. To be continued... Hope you enjoyed the game!
To play again, you will have to run the code again, for this game shall now self-destruct.`,];

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
  chapter2();
  chapter3();
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

function chapter2(){
  if (choice === "go down path"){
    choice = prompt(dialogueText[12]);
    counter += 2;
  }
  else if (choice === "go to door"){
    choice = prompt(dialogueText[13]);
    counter += 2;
  }
  else if (choice === "yes" && counter === 4){
    choice = prompt(dialogueText[14]);
    counter += 1;
    theKey -= 1;
  }
}

function chapter3(){
  if (choice === "yes" && counter === 5){
    choice = prompt(dialogueText[15]);
  }
  else if (choice === "left"){
    textSize(20);
    stroke("black");
    fill("white");
    text(dialogueText[16], 559, 384);
  }
}
