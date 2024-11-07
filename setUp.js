//preload and setuo
function preload() {
  workSans = loadFont("images-fonts/WorkSans-VariableFont_wght.ttf");
  dottedFont = loadFont("images-fonts/Jardotty-R946.ttf");
  pacifico = loadFont("images-fonts/Pacifico-Regular.ttf");
  rajdhani = loadFont("images-fonts/Rajdhani-Medium.ttf");

   mp = loadImage("images-fonts/usa-map.jpg");
  //Photo Credit: Makena Taylor


  flag = loadImage("images-fonts/usaflag.png");
  //Photo Credit: Makena Taylor

  carLeft = loadImage("images-fonts/coolbus(left).png");
  carRight = loadImage("images-fonts/coolbus.png");

}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.position(windowWidth/2-width/2,windowHeight/2-height/2)
  cnv.mouseClicked(toggleCheck);

  textAlign(CENTER, CENTER);
  textSize(30);
  statePicker = round(random(0, 49), 0); 
  carX = capitalX[statePicker];
  carY = capitalY[statePicker];
  f = frameCount;
  index = 0;
  capStar = new Star(capitalX[statePicker], capitalY[statePicker], .08);
  creditStar = new Star(296.5,174,.05);
  console.log(carRight.width, carRight.height);
}
