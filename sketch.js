
let images = [];
let current_img;
let font;

let w;
let h;

let pulsed_w = 1.0;
let pusled_h = 1.0;

let target_scale = 1.0;
let img_scale = 1.0;

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
  push();
  let scaleRatio = min(width/current_img.width, height/current_img.height);
  w = current_img.width * scaleRatio - 50;
  h = current_img.height * scaleRatio - 50;
  // background(129, 228, 218);
  translate(width/2, height/2);

  push();
  beginClip();

  img_scale = lerp(img_scale, target_scale, 0.3);

  if (img_scale > 1.1) { 
    target_scale = 1.0; 
  }
  print("IMAGE SCALE: " + img_scale);
  print("TARGET SCALE: " + target_scale);

  scale(img_scale);
  if (current_img == images[32]){
    rect(0-((w-4)/2), 0-(h/2), w-4, h, 35);
  }
  else{
    rect(0-(w/2), 0-(h/2), w, h, 28.5);
  }
  
  endClip();
  pop();
  
  scale(img_scale);

  if (current_img){
    imageMode(CENTER);
    image(current_img, 0, 0, w, h);
  }

 
  pop();
}

let counter = 0;
function mouseClicked(fxn) {
  current_img = random(images);
  target_scale = 1.15;
}

function touchStarted(fxn){
  current_img = random(images);
  target_scale = 1.15;
}