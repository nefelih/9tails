
let cards = [];
let current_card;

let banners = [];
let saved_banners = [];
let current_banner;

let font;

let w;
let h;

let target_scale = 1.0;
let card_scale = 1.0;
let speed = 0.65;


let prev_angle = 0.0;
let rotation_angle = 0.0;

let banner_angle = 0.0;
let banner_rot_angle = 0.0;



function preload(){
  for (let i = 0; i < 63; i++) {
    cards[i] = loadImage("./assets/ninetales_" + i + ".webp");
  }

  for (let i = 0; i < 9; i++){
    banners[i] = loadImage("./extras/banner_" + i + ".png");
  }

  // font = loadFont('./fonts/pokemon/Pokemon_Solid.ttf');

}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight-100);
  canvas.parent('canvas-container');
  current_card = random(cards);
  current_banner = random(banners);
  angleMode(DEGREES);
  imageMode(CENTER);
  // textFont(font);
  // textSize(50);

  // // banner.resize(350,0);
  // canvas_layer = createGraphics(windowWidth, windowHeight-100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  push();

  translate(width/2, height/2);

  let y_border = 200;
  let scale_ratio = min((width)/current_card.width, (height-y_border)/current_card.height);
  w = current_card.width * scale_ratio;
  h = current_card.height * scale_ratio;

  // background(129, 228, 218);

  card_scale = lerp(card_scale, target_scale, speed);

  if (card_scale > 1.045) {
    target_scale = 1.0;
  }
  scale(card_scale);

  //need additional push/pop so that the clipping mask does not affect banners
  push();
  rotate(prev_angle - rotation_angle);  

  //clipping mask
  beginClip();
  if (current_card == cards[32]){
    rect(0-((w-4)/2), 0-(h/2), w-4, h, 40);
  }
  else{
    rect(0-((w-1)/2), 0-((h-1)/2), w, h, 32);
  }
  endClip();

  if (current_card){
    image(current_card, 0, 0, w, h);
  }

  pop();

  //banners
  push();
  // addBanner();
  translate(-(width/2), -(height/1.75));
  translate(width/2.5, height/3.75);
  rotate(-20);
  rotate(banner_angle - banner_rot_angle);

  scale(0.75);

  let banner_border = 500;
  let banner_scale_ratio = min((windowWidth - banner_border)/current_banner.width, (height - banner_border)/current_banner.height);
  let banner_w = current_banner.width * scale_ratio;
  let banner_h = current_banner.height * scale_ratio;

  if(current_banner){
    if (current_card == cards[32]){
      image(current_banner, -120, 0, banner_w, banner_h);
    }
    else{
      image(current_banner, 0, 0, banner_w, banner_h);
    }
  }
  // image(banners[1], 0, 0);

  pop();


  pop();



  // push();

  // translate(canvas_layer.width/4, canvas_layer.height/3);
  // rotate(-30);
  // canvas_layer.image(banner, 0, 0, banner_w, banner_h);
  // image(canvas_layer, 0, 0);
  // canvas_layer.background(255);
  
  // pop();
}


function addBanner() {

}

function mousePressed() {
  current_card = random(cards);
  current_banner = random(banners);
  target_scale = 1.05;
  prev_angle = rotation_angle;
  rotation_angle += random(-6,6);

  banner_angle = banner_rot_angle;
  banner_rot_angle += random(-5,20);

  return false;
}

function touchStarted() {
  current_card = random(cards);
  current_banner = random(banners);
  target_scale = 1.05;
  prev_angle = rotation_angle;
  rotation_angle += random(-6,6);
  
  banner_angle = banner_rot_angle;
  banner_rot_angle += random(-5,20);

  return false;
}