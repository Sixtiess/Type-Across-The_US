//draws and makes mode switch
function drawSwitch() {
  if (mode == 'easy') {
    stroke(5);
    strokeWeight(1);
    fill(24, 201, 24);
    rect(20, 520, 80, 40);
    fill(200);
    rect(20, 520, 40, 40);
    textSize(18);
    stroke(0);
    text('Easy', 80, 535);
  }
  if (mode == 'hard') {
    stroke(5);
    strokeWeight(1);
    fill(217, 55, 26);
    rect(20, 520, 80, 40);
    fill(200);
    rect(60, 520, 40, 40);
    textSize(18);
    stroke(0);
    text('Hard', 40, 535);
  }
  stroke(5);
  strokeWeight(2);
  textSize(24);
  text('Mode', 60, 500);
}

function toggleCheck() {
  if (inside(toggleX, toggleY, toggleW, toggleH)) {
    if (mode == 'easy') {
      mode = 'hard';
    } else {
      mode = 'easy';
    }
  }
}