const GRIDSIZE = 10;
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
    grid = createEmptyGrid(GRIDSIZE, GRIDSIZE);
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
}

function displayLetterOrName(){
  if (letterOrNumber === "a"){
    grid[5+1][3+1] = 1;
  }
}