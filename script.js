let page = 0;

function preload() {
  workSans = loadFont("WorkSans-VariableFont_wght.ttf");
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  if(page == 0){
    background(200);
  title();
  purpose();
  HitBox(220, 400, 150, 50);
  start();
  }
  if(page ==1){
    
  }
}

function title() {
  textSize(50);
  fill(5);
  textFont(workSans);
  text('Type Across the US', 300, 60);
  textSize(25);
  text('A Us States and Capitals Typing Game', 300, 130);
  noFill();
}

function purpose() {
  stroke(5);
  rect(70, 200, 440, 110);
  noStroke();
  fill(5);
  textFont(workSans);
  textSize(20);
  text('How to play: Type the state capital of the prompted state on your keyboard, make sure punctuation and spelling is correct!', 80, 170, 420, 150);
  noFill();
}

function HitBox(x, y, w, h) {
  if (inside(220, 400, 150, 50)) {
    rect(220, 400, 150, 50);
  }
  if (touching(220, 400, 150, 50)) {
    fill(random(180, 100), random(150, 255), random(90, 300));
    // stroke(random(80, 200), random(20, 200), random(20, 200), random(20, 50));
    // strokeWeight(random(1, 15));
  }
}

function start(){
  stroke(5);
  rect(220, 400, 150, 50);
  noStroke();
  textSize(32);
  fill(5);
  textFont(workSans);
  text('Start', 220, 395, 150, 50);
  noFill();
}

function maxX(x, y, w, h) {
  return x + w;
}

function minX(x, y, w, h) {
  return x;
}

function minY(x, y, w, h) {

  return y;
}

function maxY(x, y, w, h) {

  return y + h;
}

function inside(x, y, w, h) {
  if (mouseX > minX(x, y, w, h) && mouseX < maxX(x, y, w, h) && mouseY > minY(x, y, w, h) && mouseY < maxY(x, y, w, h)) {
    return true;
  } else {
    return false;
  }
}

function touching(x, y, w, h) {
  if (inside(x, y, w, h) && mouseIsPressed) {
    return true;
  } else {
    return false;
  }
}