// OOP Ball Bounce Demo

let ballArray = [];
@@ -9,6 +10,15 @@ function setup() {
function draw() {
  background("white");
  for (let i=0; i<ballArray.length; i++) {

    //collision check
    for (let j=0; j<ballArray.length; j++) {
      //don't check self for collision
      if (i !== j) {
        ballArray[i].checkIfCollidingWith(ballArray[j]);
      }
    }

    ballArray[i].move();
    ballArray[i].display();
  }
@@ -47,4 +57,23 @@ class Ball {
      this.dy *= -1;
    }
  }

  checkIfCollidingWith(otherBall) {
    let sumOfRadii = this.radius + otherBall.radius;
    let distanceBetweenCenters = dist(this.x, this.y, 
                                      otherBall.x, otherBall.y);
    if (sumOfRadii > distanceBetweenCenters) {
      //temporary thing
      // this.someColor = "red";
      // otherBall.someColor = "red";

      //react to collision
      let tempDx = this.dx;
      let tempDy = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempDx;
      otherBall.dy = tempDy;
    }
  }
}