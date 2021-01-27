// Grid Neighbours

let grid = createEmptyGrid(3, 3);
let cellWidth, cellHeight, rows, cols;
let bgmusic;
let bgSound;

function preload(){
  bgmusic = loadSound("assets/song18.mp3");
  //from https://opengameart.org/content/crystal-cave-song18
  bgSound = loadSound("assets/soundeffect/click3.wav");
  //from https://opengameart.org/content/51-ui-sound-effects-buttons-switches-and-clicks
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgmusic.loop();
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed(){
  let x = Math.floor(mouseX / cellWidth); 
  let y = Math.floor(mouseY / cellHeight);

  bgSound.play();;

  toggleCell(x, y); //self
  toggleCell(x, y-1); //north
  toggleCell(x+1, y);//east
  toggleCell(x-1, y);//west
  toggleCell(x,y+1);//south
}

function toggleCell(x, y){
  //check that coord's are in array
  if (x >= 0 && x < cols && y >= 0 && y < rows){
    if(grid[y][x] === 1){
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
  }
}

function displayGrid(){
  for(let y=0; y<rows; y++){
    for (let x=0; x<cols; x++){
      if (grid[y][x] === 0){
        fill ("red");
      }
      if(grid[y][x] === 1){
        fill("green");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}


function createEmptyGrid(cols, rows){
  let empty = [];
  for (let y=0; y<rows; y++){
    empty.push([]);
    for (let x=0;x<cols;x++){
      empty[y].push(0);

    }
  }
  return empty;
}