

slots = [];
let slotmachine;
let display;

let t = "Pull the lever to start!"



function preload(){
  slots[0]= loadImage("images/1.png");
  slots[1]= loadImage("images/2.png");
  slots[2]= loadImage("images/3.png");
  slots[3]= loadImage("images/4.png");
  sm = loadImage("images/5.png");
  cg = loadImage("images/6.png");
  bg = loadImage("images/Pixel Casino.jpg")
  tb = loadImage("images/TextBox.png")
  myFont = loadFont("font/PressStart2P-Regular.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg, windowWidth, windowHeight);
  imageMode(CENTER);

}

function draw() {

  fill(0, 0, 0);

  image(sm, width*0.5, height*0.5, width*0.325, height);
  image(cg, width*0.8, windowHeight/2.3, width*0.3, height*0.6);
image(tb, windowWidth/1.4, windowHeight/1.2, windowWidth/2.1, windowHeight/1.9 );
textFont(myFont);
textSize(30);
text(t, windowWidth/1.9, windowHeight/1.3, windowWidth/2.1, windowHeight/1.9);
}
function mouseClicked() {


  fill(0, 0, 0);
rect(windowWidth*0.4,windowHeight*0.35, windowWidth*0.2, windowHeight*0.17);
  slotResult1 = int(random(slots.length));
  slotResult2 = int(random(slots.length));
  slotResult3 = int(random(slots.length));


  image(slots[slotResult1], width*0.435, height*0.43, width*0.06, height*0.08);
  image(slots[slotResult2], width*0.5, height*0.43, width*0.06, height*0.08);
  image(slots[slotResult3], width*0.565, height*0.43, width*0.06, height*0.08);

  console.log(slotResult1);
  console.log(slotResult2);
  console.log(slotResult2);



}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);

}
