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
    this.isAlive = 0;
    this.whenIDied = 0;
    this.timeTillDeath = 1000;
  }

  move(){
    if (this.y - this.radius >= 0){
      this.x += this.dx;
    this.y += this.dy;

    this.dx = noise(this.theta,0, 1, -5, 5);
    this.theta += 0.02;
    }
    else {
      this.isAlive = false;
    }
  }
  
  display(){
    if (this.isAlive = true){
    noStroke();
    fill("black");
    ellipse(this.x, this.y, this.radius *2, this.radius * 2);
    }
    else{

    }
  }
}