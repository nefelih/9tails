
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
  current_img = random(images);
  textFont(font);
  textSize(50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  // background(129, 228, 218);
  translate(width/2, height/2)
  if (current_img){
    imageMode(CENTER);
    image(current_img, 0, 0, 500, 700);
  }
}

let counter = 0;
function mousePressed() {
  current_img = random(images);
}