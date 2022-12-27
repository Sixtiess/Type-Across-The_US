//preload and setuo
function preload() {
  workSans = loadFont("WorkSans-VariableFont_wght.ttf");
  dottedFont = loadFont("Jardotty-R946.ttf");
  pacifico = loadFont("Pacifico-Regular.ttf");
  rajdhani = loadFont("Rajdhani-Medium.ttf");

  map = loadImage("50-us-state-capitals-map-quiz.png");
  //Photo Credit: © Free Study Maps


  flag = loadImage("usa-flag.png");
  //Photo Credit: nazlisart

  carLeft = loadImage("coolbus(left).png");
  carRight = loadImage("coolbus.png");

}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.mouseClicked(toggleCheck);

  textAlign(CENTER, CENTER);
  textSize(30);
  statePicker = round(random(0, 49), 0); 
  carX = capitalX[statePicker];
  carY = capitalY[statePicker];
  f = frameCount;
  index = 0;
  capStar = new Star(capitalX[statePicker], capitalY[statePicker], .08);
  console.log(carRight.width, carRight.height);
}