//credits page
function creditsPage(){
  background(200);
    textAlign(CENTER);
    strokeWeight(2);
    stroke(5);
    fill(5);
    textSize(60);
    text('Credits', 300, 80);
    textSize(35);
    text('Developers: Liam Hickey, Clara Watson,', 300, 180);
    text('Makena Taylor, Nico Seguel', 300, 230);
    strokeWeight(1);
    textSize(28);
    text('American Flag Map', 300, 300);
    text('Image Credit: Makena Taylor', 300, 350);
    text('US Capitals Map', 300, 420);
    text('Image Credit: Makena Taylor', 300, 470);
    noFill();
  stroke(5);
  strokeWeight(1);
  textSize(20);
  fill(129, 151, 227);
  rect(20, 550, 80, 35, 5);
  fill(5);
  text('Back', 60, 565);
  noStroke();
  noFill();
  hitBox(20, 550, 80, 35, 1);
  push();
  creditStar.display();
  pop();
  hitBox()
  //fill(0);
  //text(mouseX+','+mouseY,70,10);
}