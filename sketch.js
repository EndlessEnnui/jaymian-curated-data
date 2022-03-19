slots = [];
let slotmachine;
let display;

let t = "Push the button to start!"
let ts;
let mySound;

function preload() {
  slots[0] = loadImage("images/1.png");
  slots[1] = loadImage("images/2.png");
  slots[2] = loadImage("images/3.png");
  slots[3] = loadImage("images/4.png");
  slots[4] = loadImage("images/7.png");
  sm = loadImage("images/5.png");
  cg = loadImage("images/6.png");
  bg = loadImage("images/Pixel Casino.png")
  tb = loadImage("images/TextBox.png")
  myFont = loadFont("font/PressStart2P-Regular.ttf")
  mySound = loadSound('sounds/1.mp3')
  mySound2 = loadSound('sounds/2.mp3')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('myCanvas');

  mySound.loop();
  background(bg, windowWidth, windowHeight,windowWidth/2, windowHeight/2);
  imageMode(CENTER);
  textResize();
  frameRate(60);

  button = createButton('START');
  button.parent('button');
  button.mousePressed(roll);
}

function draw() {

  fill(0, 0, 0);

  image(sm, width * 0.5, height * 0.5, width * 0.325, height);
  image(cg, width * 0.8, windowHeight / 2.3, width * 0.3, height * 0.6);
  image(tb, windowWidth / 1.4, windowHeight / 1.2, windowWidth / 2.1, windowHeight / 1.9);
  textFont(myFont);
  textSize(ts);
  text(t, windowWidth / 1.9, windowHeight / 1.3, windowWidth / 2.7, windowHeight / 1.9);
}

function roll() {

  t = "No luck, try again!";

  fill(0, 0, 0);
  rect(windowWidth * 0.4, windowHeight * 0.35, windowWidth * 0.2, windowHeight * 0.17);
  slotResult1 = int(random(slots.length));
  slotResult2 = int(random(slots.length));
  slotResult3 = int(random(slots.length));

  if (slotResult1 == 0 && slotResult2 == 0 && slotResult3 == 0) {
    t = "BewmBoom, originally a hero I conceptualized that has explosive capabilities depending on what he ate, he loves spicy food!";
      mySound2.play();
  } else if (slotResult1 == 1 && slotResult2 == 1 && slotResult3 == 1) {
    t = "Burgers?! I love burgers! Not much else to say about them!";
      mySound2.play();
  } else if (slotResult1 == 2 && slotResult2 == 2 && slotResult3 == 2) {
    t = "Father Duck! Calm and collected family man of his wife and daughter. But little do they know he is secretely the leader of a criminal syndicate! (Orignal concept done by my girlfriend)";
      mySound.play();
  } else if (slotResult1 == 3 && slotResult2 == 3 && slotResult3 == 3) {
    t = "WOAH LUCKY STRAIGHT! CONGRATULATIONS!!! No info this time, but enjoy your coins!";
      mySound2.play();
  }else if (slotResult1 == 4  && slotResult2 == 4 && slotResult3 == 4) {
    t = "WOAH JACKPOT! THATS ME!!! Im a original character designed specifically for this project! Im said to give people the best luck when playing! Although I can't say the same for myself-";
      mySound2.play();
  }
  image(slots[slotResult1], width * 0.435, height * 0.43, width * 0.06, height * 0.08);
  image(slots[slotResult2], width * 0.5, height * 0.43, width * 0.06, height * 0.08);
  image(slots[slotResult3], width * 0.565, height * 0.43, width * 0.06, height * 0.08);

  console.log(slotResult1);
  console.log(slotResult2);
  console.log(slotResult2);



}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  image(bg, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
}

function textResize() {
  if (windowWidth > 1500) {
    ts = 40;
  } else if (windowWidth > 1200) {
    ts = 20;
  } else if (windowWidth > 900) {
    ts = 10;
  } else if (windowWidth > 500)
    ts = 5;
}
