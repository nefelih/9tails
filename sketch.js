
let images = [];
let current_img;
let font;


function preload(){
  for (let i = 0; i < 63; i++) {
    images[i] = loadImage("./assets/ninetales_" + i + ".webp")
  }
  // font = loadFont('./fonts/gill_sans/Gill_Sans_Medium.otf');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight-250);
  canvas.parent('canvas-container');
  current_img = random(images);
  // textFont(font);
  // textSize(50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let scaleRatio = min(width/current_img.width, height/current_img.height);
  let w = current_img.width * scaleRatio;
  let h = current_img.height * scaleRatio;
  // background(129, 228, 218);
  translate(width/2, height/2)
  if (current_img){
    imageMode(CENTER);
    image(current_img, 0, 0, w, h);
  }
}

let counter = 0;
function mousePressed() {
  current_img = random(images);
}