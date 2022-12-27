//credits page
function creditsPage(){
  background(200);
    textAlign(CENTER);
    strokeWeight(2);
    stroke(5);
    fill(5);
    textSize(60);
    text('Credits', 300, 100);
    textSize(33);
    text('Developers: William, Clara, Makena, Nico', 300, 200);
    strokeWeight(1);
    textSize(30);
    text('American Flag Map', 300, 300);
    text('Image Credit: nazlisart', 300, 350);
    text('US Capitals Map', 300, 450);
    text('Image Credit: © Free Study Maps', 300, 500);
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
}