//Norcay
//Austin Connell
//2/11/2021


//If you're having trouble getting around in the game, refer to the code for help


//this array is for easier reading of dialogue, and it is spaced out to better keep 
//track of which line is which part of the array, with comments for added help
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
"The stump is empty, because you took the key.",]; //10

                                                                  //these are to help breakup this area for evenly, so it's easier on the eyes 

let continuedDialogue = ["You see the key you picked up. It looks like an average key, but something seems off for some reason", //0
"You see a wooden door in front of you. Moss, vines, and other plant life have grown on, in, and around it.", //1
"You're at the door now. You see a keyhole. Do you wish to use the key?", //2
`You open the door. You see a path, going in two directions.They both appear to have been used for who knows how long
Do you wish to go down the path?`, //3
`You go to where the fork in the path starts. As you reach the spot, you realize to late that the door behind you is gone.
All you can do, is go down one of the two paths. Which do you go down? Left, or Right?`, //4
`You go down your chosen path. Once you reach the other end, you realize that both paths connect to the same spot, so it didn't matter in the end.
You wonder who made this path, and why they made it this way.`, //5
"Got it. You go back to where you were standing before.", //6
"You go down the path, and you're back at where you started.",//7
`You decide to go back down both paths, only to see nothing has changed. So, you go back down where you were heading.
At the end, you see another fork in the road, with a sign in the middle.`,//8
`You go up to the sign. It points in two directions. One arrow says 'Norcay
The Town of Magic'. 
The other appears to be vandalized, with the only readable parts being 'T     e   n

D  
   t
 o 
pa'. You go back to where you were standing.`,//9
`You see that the path has been blocked by trees. The trees near it seem to thick to try and go around, and who knows how long it'll take to get around.
You decide not to go down.`]; //10

let inTown = [`You don't see the path you came from, instead all you see are trees. This is getting old now.`,//0
"You see a path that leads to a town.You decide to go down, since it's currently the best option.",//1
`Congrats on reaching this point of the game! There currently isn't anything else for you to do.To close this window, type CLOSE.
Hope you have a great day!`,//2
];

let name; //this is so that you're name is called

let choice; //this is what helps run the game, because without it, this game wouldn't be able to start

let counter = 0; //this helps keep track of certain points of the first three "chapters" of the game

let townCounter = 0; //this is for the town interaction

let theKey= 0; //this adds a bit of exploration

let music;  //this plays the sound you hear

function preload(){
  music = loadSound("assets/Woodland_Fantasy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  music.play();
}

function draw() {
  background("black");
  awaken();
  keyFinder();
  freedom();
  norcaytown();
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
    choice = prompt(dialogueText[0]);
    }   
}

function awaken() {
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
    choice = prompt(continuedDialogue[0])    //this gives the player the ability to look at the key
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

function keyFinder(){
  if (choice === "go down path"){
    choice = prompt(continuedDialogue[1]);  //this progresses the game
    counter += 2;
  }
  else if (choice === "go to door"){
    choice = prompt(continuedDialogue[2]);  //this brings the player closer to the end
    counter += 2;
  }
  else if (choice === "yes" && counter === 4){
    choice = prompt(continuedDialogue[3]);  //almost to the end!
    counter += 1;
    theKey -= 1;
  }
  else if (choice === "no" && counter === 4){
    choice = prompt(continuedDialogue[6])   //very close to the end
    counter -= 2;
  }
  else if (choice === "look behind" && counter === 2){
    choice = prompt ("You see the path you came from. Do you go back?");
  }
  else if (choice === "yes" && counter === 2){
    choice = prompt(continuedDialogue[7]);
    choice = prompt(dialogueText[6]);
    counter -= 2;
  }
  else if (choice === "look north" && counter === 2){
    choice = prompt (dialogueText[12]);
  }                                                           //these are similar to awaken, with north being slightly different
  else if (choice === "look east" && counter === 2){
    choice = prompt(dialogueText[3])
  }
  else if (choice === "look west" && counter === 2){
    choice = prompt(dialogueText[3]);
  }
}

function freedom(){
  if (choice === "yes" && counter === 5){       //this brings the player almost to the end
    choice = prompt(continuedDialogue[4]);
  }
  else if (choice === "left"){
    choice = prompt(continuedDialogue[5]);
    choice = prompt(continuedDialogue[8]);
    townCounter += 1;
  }                                             //these two end the game after showing the same message as each other
  else if ( choice === "right"){
    choice = prompt(continuedDialogue[5]);
    choice = prompt(continuedDialogue[8]);
    townCounter += 1;
  }
}

function norcaytown(){
  if (choice === "look at sign"){
    choice = prompt(continuedDialogue[9]);
  }
  else if (choice === "look left" && townCounter === 1){
    choice = prompt(continuedDialogue[10]);
  }
  else if (choice === "look back" || choice === "look behind" || choice === "look south" && townCounter === 1){
    choice = prompt(inTown[0]);
  }
  else if (choice === "look right" && townCounter === 1){
    choice = prompt(inTown[1]);
    choice = prompt(inTown[2]);
  }
  else if (choice === "CLOSE" || choice === "Close" || choice === "close" && townCounter === 1){
    close();
  }
}


//site(s) used:
//https://opengameart.org/