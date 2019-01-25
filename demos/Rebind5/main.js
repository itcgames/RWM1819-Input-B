function main() {
	
	this.input = new Keyboard();
	
	this.canvas = {};
    this.initCanvas();
    
    this.input.addUpdateLoop(draw, 33);
	this.image = new Image();
	this.image.src = "../../Component/ASSETS/Block.png";
	this.x = 500;
	this.y = 200;

	this.moveU = this.moveU.bind(this);
	this.moveD = this.moveD.bind(this);
	this.moveL = this.moveL.bind(this);
	this.moveR = this.moveR.bind(this);

	this.input.bind(this.moveU, "ArrowUp");
	this.input.bind(this.moveD, "ArrowDown");
	this.input.bind(this.moveL, "ArrowLeft");
	this.input.bind(this.moveR, "ArrowRight");
}

function initCanvas() {

    this.canvas = document.createElement("canvas");
    this.canvas.id = "mycanvas";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
	this.ctx.font = "20px Arial";
    document.body.appendChild(this.canvas);
}

function moveU() {
	this.y -= 3;
}

function moveD() {
	this.y += 3;
}

function moveL() {
	this.x -= 3;
}

function moveR() {
	this.x += 3;
}

function draw() {
	this.ctx.clearRect(0,0,800,700);
	this.ctx.fillText("Binding controls to block", 10, 50);
	this.ctx.fillText("Use the arrow keys to map controls to block", 10, 80);
	this.ctx.drawImage(this.image, this.x, this.y, 150, 180);
}