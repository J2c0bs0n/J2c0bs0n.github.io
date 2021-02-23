//Norcay
//Austin Connell
//2/11/2021


//If you're having trouble getting around in the game, refer to the code for help


//this array is for easier reading of dialogue, and it is spaced out to better keep track of which line is which part of the array
let dialogueText = ["What do you do?", //0
"What is your name?", //1
`You wake up in a dense forest, of which you don't recognize. You don't know who you are, or where you came from. 
All you know, is that you need to get out.`, //2
"You see a wall of trees.", //3
"You see an empty tree stump, but nothing else of notice.", //4
"You see a path ahead of you.", //5 
"You appear to be in an open patch of grass. You don't really see much else.", //6
"You see a key inside. It looks normal. Do you want pick it up?", //7
"You now have a key. You go back to where you were before.", //8
"Got it, you go back to where you were standing before.", //9
"The stump is empty, because you took the key.", //10
"You see the key you picked up. It looks like an average key, but something seems off for some reason", //11
"You see a wooden door in front of you. Moss, vines, and other plant life have grown on, in, and around it.", //12
"You're at the door now. You see a keyhole. Do you wish to use the key?", //13                                           //These are just to find out which part of the array is which
`You open the door. You see a path, going in two directions.They both appear to have been used for who knows how long
Do you wish to go down the path?`, //14
`You go to where the fork in the path starts. As you reach the spot, you realize to late that the door behind you is gone.
All you can do, is go down one of the two paths. Which do you go down? Left, or Right?`, //15
`You go down your chosen path. To be continued... Hope you enjoyed the game!
To play again, you will have to run the code again, for this game shall now self-destruct.`, //16
"Got it. You go back to where you were standing before.", //17
"You go down the path, and you're back at where you started."]; //18

let name; //this is so that you're name is called

let choice; //this is what helps run the game, because without it, this game wouldn't be able to start

let counter = 0; //this helps keep track of certain points of the game

let theKey= 0; //this adds a bit of exploration

let mil = 5000; //this helps time when the program closes

let music;

function preload(){
  music = loadSound("assets/Woodland_Fantasy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  music.play();
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
    background("black");                      //this starts the game, and permanently sets your name to a value
    textSize(20);
    name = prompt(dialogueText[1]);
  }
  if (name !== undefined && key === "a") {
    textSize(15);
    stroke("black");
    fill("white");
    choice = prompt(dialogueText[2]);
    if (choice !== undefined){        //this is for easy transition to the next question
      choice = prompt(dialogueText[0]);
    }
    
  }
}

function chapter1() {
  if (key !== "a" && key === " "){
    textSize(20);
    stroke("black");                //this helps you bring the prompt to life
    fill("white");
    text("Hello " + name + "! To begin the game, press the a button. To remove this message, cancel the prompt, then press a.", mouseX, mouseY);
  }
  if (choice === "look west"){
    choice = prompt (dialogueText[3]);
  }
  else if (choice === "look south"){
    choice = prompt(dialogueText[4]);
  }
  else if (choice === "look north"){
    choice = prompt(dialogueText[5]);               //these allow you to explore a bit
  }
  else if (choice === "look east"){
    choice = prompt(dialogueText[3]);
  }
  else if (choice === "look around"){
    choice = prompt (dialogueText[6])
  }
  else if (choice === "go to tree stump"){
    choice = prompt(dialogueText[7])    //this gets the player closer to the end of the game
    counter += 1;
  }
  else if (choice === "yes" && counter === 1){
    choice = prompt(dialogueText[8])   //this gives the player the key
    counter -=1;
    theKey += 1;
  }
  else if(choice === "no" && counter === 1){
    choice = prompt(dialogueText[9]);    //this resets the player to their last location, in case if they choose no
    counter -= 1;
  }
  else if (choice === "go to the tree stump" && theKey === 1){
    choice = prompt(dialogueText[10]);  //just flavour text
  }
  else if (choice === "check key"){
    choice = prompt(dialogueText[11])    //this gives the player the ability to look at the key
  }
}

function showMessage() {
  if (key !== " " && key !== "a") {
    textSize(20);
    stroke("black");
    fill("white");                  //this just helps start the game
    text("Welcome to Norcay! Press the spacebar to start the game!", 559, 384);
  }
}

function chapter2(){
  if (choice === "go down path"){
    choice = prompt(dialogueText[12]);  //this progresses the game
    counter += 2;
  }
  else if (choice === "go to door"){
    choice = prompt(dialogueText[13]);  //this brings the player closer to the end
    counter += 2;
  }
  else if (choice === "yes" && counter === 4){
    choice = prompt(dialogueText[14]);  //almost to the end!
    counter += 1;
    theKey -= 1;
  }
  else if (choice === "no" && counter === 4){
    choice = prompt(dialogueText[17])   //very close to the end
    counter -= 2;
  }
  else if (choice === "look behind" && counter === 2){
    choice = prompt ("You see the path you came from. Do you go back?");
  }
  else if (choice === "yes" && counter === 2){
    choice = prompt(dialogueText[18]);
    choice = prompt(dialogueText[6]);
    counter -= 2;
  }
  else if (choice === "look north" && counter === 2){
    choice = prompt (dialogueText[12]);
  }                                                           //these are similar to chapter1, with north and south being slightly different
  else if (choice === "look east" && counter === 2){
    choice = prompt(dialogueText[3])
  }
  else if (choice === "look west" && counter === 2){
    choice = prompt(dialogueText[3]);
  }
}

function chapter3(){
  if (choice === "yes" && counter === 5){       //this brings the player almost to the end
    choice = prompt(dialogueText[15]);
  }
  else if (choice === "left"){
    textSize(20);
    stroke("black");
    fill("white");
    text(dialogueText[16], 559, 384);
    setTimeout(function (){close();}, mil);
  }                                             //these two end the game after showing the same message as each other
  else if ( choice === "right"){
    textSize(20);
    stroke("black");
    fill("white");
    text(dialogueText[16], 559, 384);
    setTimeout(function (){close();}, mil);
  }
}


//resources used:
//https://commons.wikimedia.org/wiki/File:Forest_path_and_trees.jpg