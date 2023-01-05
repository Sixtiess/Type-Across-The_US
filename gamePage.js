//game page
function gamePage() {
  background(200);
  image(mp, 0, 0);
  mp.resize(600, 450);
  carRight.resize(100, 100);
  carLeft.resize(100, 100);
  if (stepX >= 0) {
    image(carRight, carX - 43, carY - 50);
  } else {
    image(carLeft, carX - 56, carY - 50);
  }
  push();
  capStar.display();
  pop();
  textBox();
  exitButton();
  text(round(mouseX,0)+','+round(mouseY,0),70,10);
  if (winner) { //TYPING IS COMPLETE
    carX += stepX;
    carY += stepY;
    strokeWeight(3);
    stroke(255, 0, 0);
    line(capitalX[lastPicker], capitalY[lastPicker], carX, carY);
    stroke(0);
    strokeWeight(1);
    stepsRemaining--;
    score += dist(0, 0, stepX, stepY);
    if (stepsRemaining == 0) {
      let line = [capitalX[lastPicker], capitalY[lastPicker], carX, carY];
      lineList.push(line);
      winner = false;
    }
  }
  for (let i = 0; i < lineList.length; i++) {//LINE HISTORY DRAWER
    stroke(255, 0, 0);
    strokeWeight(3);
    line(lineList[i][0], lineList[i][1], lineList[i][2], lineList[i][3]);
    stroke(0);
    strokeWeight(1);
  }
}