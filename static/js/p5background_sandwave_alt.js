// console.log('Custom JS loaded!');

var canvas

// function mouseMoved() {
// 	ellipse(mouseX, mouseY, 10, 10);
// }
// Always resize the canvas to fill the browser window.


var num = 1000;
var noiseScale=200;
var noiseStrength=0.5;
var particleScale = 1;
var particleSpeed = 1;
var particleTrailLength = 3;
var sineFreq = 25;
var sineAmp = 10;
var particles = [num];

var colorTheme = (29, 30, 32);
var colorEntry = (46, 46, 51);
var colorPrimary = (218, 218, 219);
var colorSecondary = (155, 156, 157);
var colorTertiary = (65, 66, 68);

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.class('backgroundsketch');
	noStroke();
	fill(colorTheme);
	
	for (let i=0; i<num; i++) {
		var loc = createVector(random(width), random(height), 1);
		var angle = 0; //any value to initialize
		var dir = createVector(cos(angle), sin(angle));
		// var speed = random(0,0.01);
		var speed = random(1,map(mouseX,0,width,5,20));	 // faster
		particles[i]= new Particle(loc, dir, speed);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function draw() {
	for (let i=0; i<particles.length; i++) {
		particles[i].run();
	}
	fill(colorTheme, 100 / particleTrailLength);
	rect(0, 0, width, height);
	// background(colorTheme, 10);
}

class Particle{
	constructor(_loc,_dir,_speed){
		this.loc = _loc;
		this.dir = _dir;
		this.speed = _speed;
		// var col;
	}
	run() {
		this.move();
		this.checkEdges();
		this.update();
	}
	move(){
		let angle=noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI
		this.dir.x = sin(angle) * particleSpeed;
		this.dir.y = tan(angle) * particleSpeed * sin(frameCount / sineFreq) / sineAmp;
		var vel = (this.dir).copy();
		this.loc.add(vel); //loc = loc + vel
	}
	checkEdges(){

		if (this.loc.x<0 || this.loc.x>width || this.loc.y<0 || this.loc.y>height) {		
			this.loc.x = random(0);
			this.loc.y = random(height);
		}
	}
	update(){
		fill(colorSecondary);
		ellipse(this.loc.x, this.loc.y, this.loc.z);
	}
}
