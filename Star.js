//red star on map
class Star{
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  display() {
    //star
   push();
 translate(this.x,this.y);
  scale(this.s);
  fill(250, 0, 0);
  stroke(5);
  strokeWeight(10);

  beginShape();
  vertex(114.5, -36)
  vertex(34.5, -36)
  vertex(4.5, -121)
  vertex(-35.5, -36)
  vertex(-115.5, -36)
  vertex(-50.5, 19)
  vertex(-75.5, 89)
  vertex(0.5, 49)
  vertex(74.5, 89)
  vertex(49.5, 19) 
  endShape(CLOSE);
 pop();
  }

setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  setS(s) {
    this.s = s;
  }
  getX() {
    return this.x;
  }
}