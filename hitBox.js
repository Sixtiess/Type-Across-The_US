//hitBox Code
function hitBox(x, y, w, h, location) {
  if (inside(x, y, w, h)) {

    if (touching(x, y, w, h)) {
      page = location;
    }
  }
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