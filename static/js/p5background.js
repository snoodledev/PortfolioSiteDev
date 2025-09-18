// console.log('Custom JS loaded!');

var canvas

// function mouseMoved() {
// 	ellipse(mouseX, mouseY, 10, 10);
// }
// Always resize the canvas to fill the browser window.
function windowResized() {
	canvas.resizeCanvas(windowWidth, windowHeight);
}


var num = 1000;
var noiseScale=200, noiseStrength=0.5;
var particleScale = 1;
var particles = [num];

var color_theme = (29, 30, 32);
var color_entry = (46, 46, 51);
var color_primary = (218, 218, 219);
var color_secondary = (155, 156, 157);
var color_tertiary = (65, 66, 68);

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.class('backgroundsketch');
	noStroke();
	for (let i=0; i<num; i++) {
		var loc = createVector(random(width*1.2), random(height), 1);
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
	// background(0);
	fill(0, 10);
	rect(0, 0, width, height);
	for (let i=0; i<particles.length; i++) {
		particles[i].run();
	}
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
		this.dir.x = sin(angle);
		this.dir.y = tan(angle);
		var vel = this.dir.copy();
		var d = 22;	//direction change 
		// vel.mult(this.speed*d); //vel = vel * (speed*d)
		this.loc.add(vel); //loc = loc + vel
	}
	checkEdges(){

		if (this.loc.x<0 || this.loc.x>width || this.loc.y<0 || this.loc.y>height) {		
			this.loc.x = random(width*10);
			this.loc.y = random(height);
		}
	}
	update(){
		fill(color_secondary);
		ellipse(this.loc.x, this.loc.y, this.loc.z);
	}
}
