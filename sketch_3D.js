// trying async setup instead of preload function -> jk doesn't care because old version
// IN WEBGL MODE ORIGIN STARTS AT CENTER OF CANVAS (0,0,0)


let card_model;

let cards = [];
let current_card;

// function preload(){
//     card_model = loadModel('./assets/3D/pokemon_card.obj', true);

// }

async function setup(){
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    
    card_model = await loadModel('./assets/3D/pokemon_card.obj', true);
    
    for (let i = 0; i < 63; i++) {
        cards[i] = await loadImage("./assets/card_art/ninetales_" + i + ".webp");
    }

}

function draw(){
    background(255);
    orbitControl(); 
    cards[1].resize()

    texture(cards[1]);
    model(card_model);
    // card_model.rotateY(90);

    // box();
}