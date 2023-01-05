//key released
function keyReleased() {
  if ((inpt.charAt(index).toLowerCase() == key.toLowerCase())) { //CORRECT TYPED
    index++;
    typed += key;
    f = frameCount;
    textFont('Arial');

  }
  if (inpt.charAt(index) != char(keyCode) && frameCount - f > 10) { //INCORRECT TYPED

  } if (index == inpt.length) { //TYPING IS FINISHED CORRECTLY
    winner = true;
    lastPicker = statePicker;
    stepsRemaining = animationSteps;

    statePicker = round(random(0, 49), 0);
    stepX = (capitalX[statePicker] - capitalX[lastPicker]) / animationSteps;
    stepY = (capitalY[statePicker] - capitalY[lastPicker]) / animationSteps;
    index = 0;
    typed = "";
  }
  return false;
}