//OOPS Bubbles Demo


function setup() {
  createCanvas(windowWidth, windowHeight);
  someBubble = new Bubble();
}

function draw() {
  background(220);
  someBubble.move();
  someBubble.display();
}

class Bubble {
  constructor(){
    this.x = random(windowWidth);
    this.y = height + 100;
    this.dx = 0;
    this.dy = -3;
    this.radius = random(20, 40);
    this.theta = 0;
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;

    this.dx = noise((this.theta),0, 1, -5, 5);
    this.theta += 0.1;
  }
  
display(){
  noStroke();
  fill("black");
  ellipse(this.x, this.y, this.radius *2, this.radius * 2);
}

}