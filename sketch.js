
let images = [];
let current_img;
let font;


function preload(){
  for (let i = 0; i < 63; i++) {
    images[i] = loadImage("./assets/ninetales_" + i + ".webp")
  }
  font = loadFont('./fonts/gill_sans/Gill_Sans_Medium.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  current_img = random(images);
  textFont(font);
  textSize(50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  // background(129, 228, 218);
  text("hi this is for ian", 20, 10);
  text("i guess if u are not ian u can hang", 20, 18);
  if (current_img){
    image(current_img, width/4, height/4, 500, 700);
  }
}

let counter = 0;
function mousePressed() {
  current_img = random(images);
}