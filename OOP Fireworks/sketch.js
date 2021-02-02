// OOP Fireworks

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("black");
  for (let i=0; i< fireworks.length; i++){
    if (fireworks [i].isAlive()){
    fireworks[i].move();
    fireworks[i].display();
    }
    else{
      fireworks.splice();
    }
  }
}

function mousePressed(){
  for (let i=0; i<100; i++){
    let someParticle = new Particle(mouseX, mouseY,random(-5,5), random(-5,5), 255, 0, 0, 50);
  fireworks.push(someParticle);
  }
}

class Particle {
  constructor(x, y, dx, dy, r, g, b, a){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.diameter = 10;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;
    this.a = -1;
  }
  display(){
    noStroke();
    fill(this.r,this.g,this.b,this.a);
    ellipse(this.x,this.y,this.diameter, this.diameter);
  }

  isAlive(){
    return this.a > 0;
    }
  }