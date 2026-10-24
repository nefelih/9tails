let cards = [];
let current_card;
let visible_cards = [];
let vis_cards_max = 3.0;

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
let current_angle = 0.0;

let banner_angle = 0.0;
let banner_rot_angle = 0.0;



async function setup() {

  for (let i = 0; i < 63; i++) {
    cards[i] = await loadImage("./assets/card_art/ninetales_" + i + ".webp");
  }

  for (let i = 0; i < 9; i++){
    banners[i] = await loadImage("./extras/banners/banner_" + i + ".png");
  }

  print("window height: " + windowHeight);
  createCanvas(windowWidth, windowHeight-(windowHeight/8));
  // canvas.parent('canvas-container');
  current_card = random(cards);
  current_banner = random(banners);
  angleMode(DEGREES);
  imageMode(CENTER);

  // font = loadFont('./fonts/pokemon/Pokemon_Solid.ttf');
  // textFont(font);
  // textSize(50);

  // banner.resize(350,0);
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
  current_angle = prev_angle - rotation_angle;
  rotate(current_angle);  
  // clipping mask
  beginClip();
  if (current_card == cards[32]){
    rect(0-((w-4)/2), 0-(h/2), w-4, h, h/35);
  }
  else{
    rect(0-((w-1)/2), 0-((h-1)/2), w, h, h/20);
    // rect(0-((w-1)/2), 0-((h-1)/2), w, h, 15);
  }
  endClip();

  if (current_card){
    image(current_card, 0, 0, w, h);
    
    // for (let i = 0; i < vis_cards_max; i++){
    //   current_card = new Card(visible_cards[i], 0, 0, w, h, prev_angle - rotation_angle);
    //   current_card.image();
    // }
    // for (let i = 0; i < vis_cards_max; i++){
    //   image(visible_cards[i]);
    // }
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
//TO DO at some point lol
}

function mousePressed() {
  // visible_cards.unshift([current_card);
  // // print(visible_cards);

  // if (visible_cards.length > vis_cards_max){
  //   visible_cards.pop();
  // }
  
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

// TO DO
// add in webgl and map the images to a face of a card,
// take what exists after the clipping mask, make that a new image/wrap
//show the last three two cards underneath -> needs a different clipping mask function -> make it a separate function 
    // make sure it doesnt look like things are apping out of existance behind it
//if you double click on the card it does an animation <- way later down the line
 //LOOKUP DRAWING CONTEXT.SAVE AND DRAWING CONTEXT . RESTORE
// construct some more functions based on rotations and things

//10.19 -> remove drop shadow work for right now
// more important is the triple card layout

  // push();
  // fill(0,0,0,0);
  // drawingContext.shadowOffsetX = 5;
  // drawingContext.shadowOffsetY = -5;
  // drawingContext.shadowBlur = 20;
  // drawingContext.shadowColor = 'grey';
  // rect(0-((w-1)/2), 0-((h-1)/2), w, h, h/20);
  // pop(); 

  //^fix this


  //visible cards = an array
  //when the sketch start ups populate the array with the current card, then push to the front
  // USE UNSHIFT IN ARRAY CLASS TO MOVE IT FORWARD
  // index at 0 will be the top most card