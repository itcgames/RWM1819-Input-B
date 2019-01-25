function main() {
    
    this.player = new Player(100, 250, 50, 60, 1);
	this.input = new Keyboard();
	this.canvas = {};

	this.input.addKeyHandler(this.keys);
	this.input.addUpdateLoop(draw, 33);

	this.firstKey = "ArrowUp";
	this.firstPressed = false;

	this.secondKey = "ArrowDown";
	this.secondPressed = false;

	this.thirdKey = " ";
	this.thirdPressed = false;

	this.initCanvas();
	this.img = new Image();
    this.img.src = "../../Component/ASSETS/star.png";
    
    this.moveU = this.moveU.bind(this);
	this.moveD = this.moveD.bind(this);
	this.moveL = this.moveL.bind(this);
    this.moveR = this.moveR.bind(this);
    this.shoot = this.shoot.bind(this);

	this.keyPad.bind(this.moveU, "ArrowUp");
	this.keyPad.bind(this.moveD, "ArrowDown");
	this.keyPad.bind(this.moveL, "ArrowLeft");
    this.keyPad.bind(this.moveR, "ArrowRight");
    this.keyPad.bind(this.shoot, " ");
}

function initCanvas() {
	//this.canvas = document.getElementById("mycanvas");
    this.canvas = document.createElement("canvas");
    this.canvas.id = "mycanvas";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "20px Arial";
    
    document.body.appendChild(this.canvas);
}

function draw() {
	this.ctx.clearRect(0,0,1000,1000);
	this.ctx.fillText("Keyboard Demo", 10, 50);
	this.ctx.fillText("Please press the UP ARROW", 10, 100);
	this.ctx.fillText("Please press the DOWN ARROW", 10, 150);
	this.ctx.fillText("Please press the SPACE BAR", 10, 200);
	if(this.firstPressed) {
        this.ctx.drawImage(this.img, 100, 100, 150, 180);
        console.log("DRAWING");
	}
	if(this.secondPressed) {
		this.ctx.drawImage(this.img, 600, 200, 150, 180);
	}
	if(this.thirdPressed) {
		this.ctx.drawImage(this.img, 800, 340, 150, 180);
	}
	if(this.thirdPressed) {
		this.ctx.fillText("Complete", 10, 650);
    }
    
    this.player.render();
}

function myGetKeys(keys) {
	if(keys.length > 0) {
     keys.forEach(function(element)
    {
        if(element === this.firstKey) 
        {
		    this.firstPressed = true;
		}
        if(element === this.secondKey)
        {
		    this.secondPressed = true;
        }
        if(element === this.thirdKey)
        {
		    this.thirdPressed = true;
		}
	});
	console.log(keys);
  }
}