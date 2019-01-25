function main() {
	
	this.input = new Keyboard();
	this.canvas = {};

	this.input.addUpdateLoop(draw, 33);
	this.input.addKeyHandler(getKeys);

	this.initCanvas();

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

function getKeys(keys) {
    
    this.ctx.fillText("Time", this.holdTimer);
}

function draw() {
	
    this.ctx.clearRect(0,0,800,700);
    this.ctx.fillText("Time", this.holdTimer, 50, 50);
    this.ctx.fillText("Key Holding ", 10, 50);
    this.ctx.fillText("Press and hold a Key to track timer ", 10, 90);


}