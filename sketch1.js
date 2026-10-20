// trying async setup instead of preload function
// IN WEBGL MODE ORIGIN STARTS AT CENTER OF CANVAS (0,0,0)


let card_model;

async function setup(){
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);


    card_model = await loadImage ()
}

function draw(){

}