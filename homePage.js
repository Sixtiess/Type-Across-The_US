//home page
function title() {

  textSize(60);
  fill(5);
  textFont(rajdhani);
  strokeWeight(3);
  text('Type Across the US', 300, 60);
  //line(30, 80, 530, 80);
  textSize(30);
  strokeWeight(1);
  text('A US States and Capitals Typing Game', 300, 130);
  noFill();
}

function purpose() {
  stroke(5);
  strokeWeight(4);
  rect(70, 188, 440, 110, 5);
  noStroke();
  fill(5);
  textFont(workSans);
  textSize(20);
  text('How to play: Type the state capital of the prompted state on your keyboard, make sure spaces are in the correct spot!', 80, 162, 420, 150);
  noFill();
}

function startPage() {
  stroke(5);
  strokeWeight(2);
  fill(50, 168, 82);
  rect(230, 415, 130, 50, 10);
  noStroke();
  textSize(33);
  fill(5);
  textFont(rajdhani);
  text('Start', 220, 410, 150, 50);
  noFill();
}

function drawCreditsButton(){
  stroke(5);
  strokeWeight(1);
  textSize(20);
  fill(164, 171, 237);
  rect(500, 550, 80, 35, 5);
  fill(5);
  text('Credits', 540, 565);
  noStroke();
  noFill();
}
