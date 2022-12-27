//displays the home page
function displayHomePage(){
clr2 = color(103, 134, 181);
    clr1 = color(237, 116, 100);
    background(220);
    for (let i = 0; i < height; i += 5) {
      noStroke();
      fill(lerpColor(clr1, clr2, i / height));
      rect(0, i, width, 5);
    }
    drawCreditsButton();
    image(flag, 120, 325, 400, 250);
    title();
    purpose();
    hitBox(230, 415, 130, 50, 2);
    startPage();
    drawSwitch();
    hitBox(500, 550, 80, 35, 3)
  
}