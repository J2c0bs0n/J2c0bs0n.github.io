let grid, rows, cols, cellWidth, cellHeight;
// let bgMusic;
let clickSound;
let letterOrNumber;
function preload() {
    // bgMusic = loadSound("assets/background.mp3");
    clickSound = loadSound("assets/soundeffect/click3.wav");
  }
  function setup() {
    createCanvas(windowWidth, windowHeight);
    // bgMusic.loop();
    grid = createEmptyGrid(10, 10);
    rows = grid.length;
    cols = grid[0].length;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  function draw() {
    background(220);
    displayGrid();
    displayLetterOrName();
}
function displayGrid() {
    for (let y=0; y<rows; y++) {
      for (let x=0; x<cols; x++) {
        if (grid[y][x] === 0) {
          fill("white");
        }
        if (grid[y][x] === 1) {
          fill("black");
        }
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
function createEmptyGrid(cols, rows) {
    let empty = [];
    for (let y=0; y<rows; y++) {
      empty.push([]);
      for (let x=0; x<cols; x++) {
        empty[y].push(0);
      }
    }
    return empty;
  }
function keyPressed(){
    if (key === " "){
        letterOrNumber = prompt("Type one letter or number please!");
        return letterOrNumber;
    }
    else if (key === "`" ){
      letterOrNumber = prompt("Put in a number or letter again please!");
      return letterOrNumber;
    }
}
function displayLetterOrName(){
  if (letterOrNumber === "a"){
    grid[7+1][4+1] = 1;
    grid[7+1][3+1] = 1;
    grid[7+1][2+1] = 1;
    grid[6+1][1+1] = 1;
    grid[5+1][1+1] = 1;
    grid[4+1][1+1] = 1;
    grid[3+1][4+1] = 1;
    grid[3+1][3+1] = 1;
    grid[3+1][2+1] = 1;
    grid[6+1][1+1] = 1;
    grid[6+1][4+1] = 1;
    grid[5+1][4+1] = 1;
    grid[4+1][4+1] = 1;
    grid[2+1][4+1] = 1;
    grid[1+1][3+1] = 1;
    grid[1+1][2+1] = 1;
  }if (letterOrNumber === "b"){
    grid[8][2] = 1;
    grid[7][2] = 1;
    grid[6][2] = 1;
    grid[5][2] = 1;
    grid[4][2] = 1;
    grid[3][2] = 1;
    grid[2][2] = 1;
    grid[1][2] = 1;
    grid[8][3] = 1;
    grid[8][4] = 1;
    grid[4][3] = 1;
    grid[4][4] = 1;
    grid[5][5] = 1;
    grid[6][5] = 1;
    grid[7][5] = 1;
  }
  if (letterOrNumber === "c"){
    grid[7][4] = 1;
    grid[7][3] = 1;
    grid[6][2] = 1;
    grid[5][2] = 1;
    grid[4][2] = 1;
    grid[3][4] = 1;
    grid[3][3] = 1;
  
  }
  if (letterOrNumber === "d"){
    grid[8][5] = 1;
    grid[7][2] = 1;
    grid[6][2] = 1;
    grid[5][2] = 1;
    grid[4][5] = 1;
    grid[3][5] = 1;
    grid[2][5] = 1;
    grid[1][5] = 1;
    grid[8][3] = 1;
    grid[8][4] = 1;
    grid[4][3] = 1;
    grid[4][4] = 1;
    grid[5][5] = 1;
    grid[6][5] = 1;
    grid[7][5] = 1;
  }
  if (letterOrNumber === "e"){
    grid[5][2] = 1;
    grid[5][3] = 1;
    grid[5][4] = 1;
    grid[5][5] = 1;
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[8][3] = 1;
    grid[8][4] = 1;
    grid[7][5] = 1;
    grid[4][2] = 1;
    grid[3][3] = 1;
    grid[3][4] = 1;
    grid[4][5] = 1;
    
  }
  if (letterOrNumber === "f"){
    grid[1][5] = 1;
    grid[1][4] = 1;
    grid[2][3] = 1;
    grid[3][3] = 1;
    grid[4][3] = 1;
    grid[5][3] = 1;
    grid[6][3] = 1;
    grid[7][3] = 1;
    grid[8][3] = 1;
    grid[4][4] = 1;
    
  }
  if (letterOrNumber === "g"){
    grid[3][2] = 1;
    grid[4][2] = 1;
    grid[5][2] = 1;
    grid[2][3] = 1;
    grid[2][4] = 1;
    grid[2][5] = 1;
    grid[3][5] = 1;
    grid[4][5] = 1;
    grid[5][5] = 1;
    grid[6][4] = 1;
    grid[6][3] = 1;
    grid[6][5] = 1;
    grid[7][5] = 1;
    grid[8][4] = 1;
    grid[8][3] = 1;
  }
  if (letterOrNumber === "h"){
    grid[8][2] = 1;
    grid[7][2] = 1;
    grid[6][2] = 1;
    grid[5][2] = 1;
    grid[4][2] = 1;
    grid[3][2] = 1;
    grid[2][2] = 1;
    grid[1][2] = 1;
    grid[4][3] = 1;
    grid[4][4] = 1;
    grid[5][5] = 1;
    grid[6][5] = 1;
    grid[7][5] = 1;
    grid[8][5] = 1;
  }
  if (letterOrNumber === "i"){
    grid[5][4] = 1;
    grid[6][4] = 1;
    grid[7][4] = 1;
    grid[8][4] = 1;
    grid[3][4] = 1;
  }
  if (letterOrNumber === "j"){
    grid[4][4] = 1;
    grid[5][4] = 1;
    grid[6][4] = 1;
    grid[7][4] = 1;
    grid[8][3] = 1;
    grid[2][4] = 1;
    grid[4][3] = 1;
  }
  if (letterOrNumber === "k"){
    grid[2][2] = 1;
    grid[3][2] = 1;
    grid[4][2] = 1;
    grid[5][2] = 1;
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[8][2] = 1;
    grid[6][3] = 1;
    grid[5][4] = 1;
    grid[7][4] = 1;
    grid[8][5] = 1;
    grid[4][5] = 1;
  }
  if (letterOrNumber === "l"){
    grid[2][2] = 1;
    grid[3][2] = 1;
    grid[4][2] = 1;
    grid[5][2] = 1;
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[8][2] = 1;
  }
  if (letterOrNumber === "m"){
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[8][2] = 1;
    grid[6][4] = 1;
    grid[7][4] = 1;
    grid[8][4] = 1;
    grid[6][6] = 1;
    grid[7][6] = 1;
    grid[8][6] = 1;
    grid[5][3] = 1;
    grid[5][5] = 1;
  }
  if (letterOrNumber === "n"){
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[8][2] = 1;
    grid[5][2] = 1;
    grid[7][5] = 1;
    grid[8][5] = 1;
    grid[6][3] = 1;
    grid[6][4] = 1;
  }
  if (letterOrNumber === "o"){
    grid[4][2] = 1;
    grid[5][2] = 1;
    grid[4][5] = 1;
    grid[5][5] = 1;
    grid[3][3] = 1;
    grid[3][4] = 1;
    grid[6][3] = 1;
    grid[6][4] = 1;
  }
  if (letterOrNumber === "p"){
    grid[4][2] = 1;
    grid[5][2] = 1;
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[8][2] = 1;
    grid[3][3] = 1;
    grid[3][4] = 1;
    grid[6][3] = 1;
    grid[6][4] = 1;
    grid[4][5] = 1;
    grid[5][5] = 1;
  }
  if (letterOrNumber === "q"){
    grid[4][5] = 1;
    grid[5][5] = 1;
    grid[6][5] = 1;
    grid[7][5] = 1;
    grid[8][5] = 1;
    grid[3][4] = 1;
    grid[3][3] = 1;
    grid[6][4] = 1;
    grid[6][3] = 1;
    grid[4][2] = 1;
    grid[5][2] = 1;
  }
  if (letterOrNumber === "r"){
    grid[8][2] = 1;
    grid[7][2] = 1;
    grid[6][2] = 1;
    grid[5][2] = 1;
    grid[4][2] = 1;
    grid[5][3] = 1;
    grid[4][4] = 1;
    grid[4][5] = 1;
    grid[5][5] = 1;
  }
  if (letterOrNumber === "s"){
    grid[3][6] = 1;
    grid[3][5] = 1;
    grid[3][4] = 1;
    grid[4][3] = 1;
    grid[5][3] = 1;
    grid[6][4] = 1;
    grid[6][5] = 1;
    grid[7][6] = 1;
    grid[8][6] = 1;
    grid[9][5] = 1;
    grid[9][4] = 1;
    grid[9][3] = 1;
  }
  if (letterOrNumber === "t"){
    grid[2][4] = 1;
    grid[3][4] = 1;
    grid[4][4] = 1;
    grid[5][4] = 1;
    grid[6][4] = 1;
    grid[7][4] = 1;
    grid[8][4] = 1;
    grid[5][3] = 1;
    grid[5][5] = 1;
  }
  if (letterOrNumber === "u"){
    grid[5][2] = 1;
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[5][5] = 1;
    grid[6][5] = 1;
    grid[7][5] = 1;
    grid[8][3] = 1;
    grid[8][4] = 1;
  }
  if (letterOrNumber === "v"){
    grid[5][1] = 1;
    grid[6][2] = 1;
    grid[7][3] = 1;
    grid[6][4] = 1;
    grid[5][5] = 1;
  }
  if (letterOrNumber === "w"){
    grid[5][2] = 1;
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[5][4] = 1;
    grid[6][4] = 1;
    grid[7][4] = 1;
    grid[5][6] = 1;
    grid[6][6] = 1;
    grid[7][6] = 1;
    grid[8][3] = 1;
    grid[8][5] = 1;
  }
  if (letterOrNumber === "x"){
    grid[5][3] = 1;
    grid[6][4] = 1;
    grid[7][5] = 1;
    grid[5][5] = 1;
    grid[7][3] = 1;
  }
  if (letterOrNumber === "y"){
    grid[3][2] = 1;
    grid[4][3] = 1;
    grid[5][4] = 1;
    grid[4][5] = 1;
    grid[3][6] = 1;
    grid[6][3] = 1;
    grid[7][2] = 1;
  }
  if (letterOrNumber === "z"){
    grid[3][3] = 1;
    grid[3][4] = 1;
    grid[3][5] = 1;
    grid[3][6] = 1;
    grid[4][6] = 1;
    grid[5][5] = 1;
    grid[6][4] = 1;
    grid[7][3] = 1;
    grid[8][3] = 1;
    grid[8][4] = 1;
    grid[8][5] = 1;
    grid[8][6] = 1;
  }
  if (letterOrNumber === "1"){
    grid[3][3] = 1;
    grid[2][4] = 1;
    grid[3][4] = 1;
    grid[4][4] = 1;
    grid[5][4] = 1;
    grid[6][4] = 1;
    grid[7][4] = 1;
    grid[8][4] = 1;
  }
  if (letterOrNumber === "2"){
    grid[2][4] = 1;
    grid[2][5] = 1;
    grid[2][6] = 1;
    grid[3][3] = 1;
    grid[3][7] = 1;
    grid[4][7] = 1;
    grid[5][6] = 1;
    grid[6][5] = 1;
    grid[7][4] = 1;
    grid[8][3] = 1;
    grid[8][4] = 1;
    grid[8][5] = 1;
    grid[8][6] = 1;
    grid[8][7] = 1;
  }
  if (letterOrNumber === "3"){
    grid[1][3] = 1;
    grid[1][4] = 1;
    grid[1][5] = 1;
    grid[2][6] = 1;
    grid[3][6] = 1;
    grid[4][6] = 1;
    grid[5][3] = 1;
    grid[5][4] = 1;
    grid[5][5] = 1;
    grid[6][6] = 1;
    grid[7][6] = 1;
    grid[8][6] = 1;
    grid[9][3] = 1;
    grid[9][4] = 1;
    grid[9][5] = 1;
  }
  if (letterOrNumber === "4"){
    grid[1][2] = 1;
    grid[2][2] = 1;
    grid[3][2] = 1;
    grid[4][2] = 1;
    grid[5][2] = 1;
    grid[5][3] = 1;
    grid[5][4] = 1;
    grid[5][5] = 1;
    grid[5][6] = 1;
  }
  if (letterOrNumber === "5"){
    
  }
  if (letterOrNumber === "6"){
    
  }
  if (letterOrNumber === "7"){
    
  }
  if (letterOrNumber === "8"){
    grid[1][3] = 1;
    grid[1][4] = 1;
    grid[1][5] = 1;
    grid[2][6] = 1;
    grid[3][6] = 1;
    grid[4][6] = 1;
    grid[5][3] = 1;
    grid[5][4] = 1;
    grid[5][5] = 1;
    grid[6][6] = 1;
    grid[7][6] = 1;
    grid[8][6] = 1;
    grid[9][3] = 1;
    grid[9][4] = 1;
    grid[9][5] = 1;
    grid[2][2] = 1;
    grid[3][2] = 1;
    grid[4][2] = 1;
    grid[6][2] = 1;
    grid[7][2] = 1;
    grid[8][2] = 1;
  }
  if (letterOrNumber === "9"){
    
  }
  if (letterOrNumber === "0"){
    
  }
}
