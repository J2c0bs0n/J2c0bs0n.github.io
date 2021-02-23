//Repeating Triangle Recursion Demo

let triangleVertices = [
  {x: 400, y: 100},
  {x: 100, y: 600},
  {x: 700, y: 600}
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(getMidpoint(triangleVertices[0], triangleVertices[1]));
}

function draw() {
  background(220);
  sierpinski(triangleVertices);
}

function sierpinski(points){
  triangle(points[0].x, points[0].y, 
    points[1].x, points[1].y, 
    points[2].x, points[2].y);
}

function getMidpoint(point1, point2){
  let midX = (point1.x + point2.x)/2;
  let midY = (point1.y + point2.y)/2;
  return {x : midX, y: midY};
}