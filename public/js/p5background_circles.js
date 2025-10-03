// console.log('Custom JS loaded!');

var canvas

// function mouseMoved() {
// 	ellipse(mouseX, mouseY, 10, 10);
// }
// Always resize the canvas to fill the browser window.


var colorBackground = (29, 30, 32);
var colorArcs = (38, 40, 42);

let colors = [
	(250, 30, 32),
	(29, 250, 32),
	(29, 30, 250)
]

let settings = {
	arcs: 60,
	radius: { min: 1, max: 360 },
	gap: { min: 45, max: 45 },
	weight: { min: 40, max: 40 },
	arcsColor: colorArcs,	
	background: colorBackground,
	speed: { min: 0.05, max: 0.3 },
	directions: "both",
};


function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.class('backgroundsketch');
	createRadialStrokes();
}


function draw() {
	background(settings.background);
	noFill();

	for (i = 0; i < settings.arcs; i++) {
		// console.log(sinValue)
		// var sinValue = sin(frameCount / 100) + 1;
		curves[i].angleStart += curves[i].movementSpeed;
		curves[i].angleFinish += curves[i].movementSpeed;
		curves[i].draw();
	}
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	for (i = 0; i < settings.arcs; i++) {
		curves[i].x = width / 2,
		curves[i].y = height / 2 - (height * 0.146)
	}
}

let curves = [];


function createRadialStrokes() {
	gap = random(settings.gap.min, settings.gap.max);

	for (let i = 0; i < settings.arcs; i++) {
		let angleStart = int(random(settings.radius.min, settings.radius.max));
		let angleFinish = int(random(settings.radius.min, settings.radius.max));
		let movementDirection;
		
		switch (settings.directions) {
			case "both":
				movementDirection = int(random(0, 2));
				break;
			case "left":
				movementDirection = 1;
				break;
			case "right":
				movementDirection = 0;
				break;
		}

		let movementSpeed = random(settings.speed.min, settings.speed.max);
		let curveWeight = random(settings.weight.min, settings.weight.max);

		curves[i] = new RadialStroke(
			width / 2,
			height / 2 - (height * 0.146),
			i * gap,
			angleStart,
			angleFinish,
			colorArcs,
			curveWeight,
			movementSpeed
		);
	}
}


class RadialStroke {
	constructor(x, y, distance, angleStart, angleFinish, color, weight, movementSpeed) {
		this.x = x;
		this.y = y;
		this.distance = distance;
		this.angleStart = angleStart;
		this.angleFinish = angleFinish;
		this.color = color;
		this.weight = weight;
		this.movementSpeed = movementSpeed;
	}

	draw() {
		stroke(this.color);
		strokeWeight(this.weight);
		if (this.angleStart > this.angleFinish) {
			let newStart = this.angleFinish;
			this.angleFinish = this.angleStart;
			this.angleStart = newStart;
		}
		beginShape();
		// define vertices
		for (let i = this.angleStart; i <= this.angleFinish; i++) {
			let a = map(i, 0, 360, 0, TWO_PI);
			
			let newX = this.x + cos(a) * this.distance;
			let newY = this.y + sin(a) * this.distance;

			vertex(newX, newY);
		}
		endShape();
	}
}