

slots = [];

function preload(){
  slots[0]= loadImage("images/1.png");
  slots[1]= loadImage("images/2.png");
  slots[2]= loadImage("images/3.png");
  slots[3]= loadImage("images/4.png");
  sm = loadImage("images/5.png");
}

function setup() {
  createCanvas(1100, windowHeight);
  background(200, 255, 255);

}

function draw() {

  fill(0);
  image(sm, 150, -60);


}
function mouseClicked() {

  background(0, 5, 5)

  slotResult1 = int(random(slots.length));
  slotResult2 = int(random(slots.length));
  slotResult3 = int(random(slots.length));


  image(slots[slotResult1], 310,430);
  image(slots[slotResult2], 470,430);
  image(slots[slotResult3], 630,430);


  console.log(slotResult1);
  console.log(slotResult2);
  console.log(slotResult2);
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
