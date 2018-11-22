function setup() {
	createCanvas(710, 400, WEBGL);
	noStroke();
}

function draw() {
	background(0);

	// Orange point light on the right
	pointLight(150, 100, 0, 500, 0, 200);

	// Blue directional light from the left
	directionalLight(0, 130, 255, -1, 0, 0);

	// Yellow spotlight from the front
	pointLight(255, 130, 0, 0, 0, 200);

	rotateY(map(mouseX, 0, width, 0, PI));
	rotateX(map(mouseY, 0, height, 0, PI));
	box(150);
}

