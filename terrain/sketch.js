//Perlin Noise

let rectHeights;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeights = generateheights();
  console.log(rectHeights);
}

function draw() {
  background(220);

  let howMany = width;
  for (let i=0; i<100; i++){
    let rectWidth = width / howMany;
    rect(0, height-rectHeights[i], rectWidth, rectHeights[i]);
  }
  if (keyIsPressed){
if (key === "a"){
    
}

  }
}

function generateheights(){
  let theheights = [];
  for(let i = 0; i < 5000; i++){
    let rectHeight = noise(i*0.001) * height;
    theheights.push(rectHeight);
  }
  return theheights;
}