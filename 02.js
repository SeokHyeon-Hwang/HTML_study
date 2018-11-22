function setup() {
  createCanvas(1000, 880);
}

function draw() {
  if (mouseIsPressed) {
    fill(255,100,00);
  } else {
    fill(250,66,00);
  }
  ellipse(mouseX, mouseY, 80, 80);
}