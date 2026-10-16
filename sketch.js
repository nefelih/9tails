
let images = [];
let current_img;
let font;

let w;
let h;

let pulsed_w = 1.0;
let pusled_h = 1.0;

let target_scale = 1.0;
let image_scale = 1.0;
let speed = 0.65;

let prev_angle = 0.0;
let rotation_angle = 0.0;

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
  angleMode(DEGREES);
  // textFont(font);
  // textSize(50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  push();

  translate(width/2, height/2);

  let border = 70;
  let scaleRatio = min((width-border)/current_img.width, (height-border)/current_img.height);
  let w = current_img.width * scaleRatio;
  let h = current_img.height * scaleRatio;
  // background(129, 228, 218);

  image_scale = lerp(image_scale, target_scale, speed);

  if (image_scale > 1.045) {
    target_scale = 1.0;
  }
  scale(image_scale);

  rotate(prev_angle - rotation_angle);

  beginClip();

  if (current_img == images[32]){
    rect(0-((w-4)/2), 0-(h/2), w-4, h, border/2);
  }
  else{
    rect(0-(w/2), 0-(h/2), w, h, border/2.6);
  }
  
  endClip();

  if (current_img){
    imageMode(CENTER);
    image(current_img, 0, 0, w, h);
  }
  pop();

}



function mousePressed() {
  current_img = random(images);
  target_scale = 1.05;
  prev_angle = rotation_angle;
  rotation_angle += random(-6,6);
  return false;
}

function touchStarted() {
  current_img = random(images);
  target_scale = 1.05;
  prev_angle = rotation_angle;
  rotation_angle += random(-6,6);
  return false;
}