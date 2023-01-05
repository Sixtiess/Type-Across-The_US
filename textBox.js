//text box
function textBox() {
  inpt = capitals[statePicker].toLowerCase();
  fill(255);
  rect(0, 450, 600, 50);
  stroke(5);
  strokeWeight(1);
  fill(5);
  textFont(pacifico);

  text('What is the capital of ' + states[statePicker] + '?', 300, 470);
 
  capStar.setX(capitalX[statePicker]);
  capStar.setY(capitalY[statePicker]);

  fill(255);
  textSize(25);
  rect(0, 500, 600, 100);
  textFont(dottedFont);


  fill(5);
  noStroke();
  textFont(dottedFont);
  showLetters();
  
   textAlign(LEFT);
   textFont(pacifico);
   fill(0);
   stroke(0);
  text('Score: ' + round(score,0),10,580);
   textAlign(CENTER);
}

function showLetters(){
  for (let i = 0; i <= capitals[statePicker].length; i++) {
    if (typed.charAt(i).toLowerCase() == inpt.charAt(i).toLowerCase()) {
      stroke(0, 255, 0);
      fill(0, 150, 0);
    } else {
      if (mode == 'hard') {
        stroke(255);
        fill(255);
      } else {
        stroke(0);
        fill(0);
      }
    }
    strokeWeight(.5);
    text(capitals[statePicker].charAt(i), (width/2 + i * 25) - capitals[statePicker].length * 10, 545);

  }
}