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

	this.thirdKey = "ArrowLeft";
	this.thirdPressed = false;

	this.initCanvas();
	this.img = new Image();
    this.img.src = "../../Component/ASSETS/star.png";
    
    this.moveU = this.moveU.bind(this);
	this.moveD = this.moveD.bind(this);
	this.moveL = this.moveL.bind(this);
    this.moveR = this.moveR.bind(this);
   // this.shoot = this.shoot.bind(this);

	this.input.bind(this.moveU, "ArrowUp");
	this.input.bind(this.moveD, "ArrowDown");
	this.input.bind(this.moveL, "ArrowLeft");
  
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
	this.ctx.fillText("Please press the LEFT ARROW", 10, 200);
	if(this.firstPressed) {
        this.ctx.drawImage(this.img, 310, 80, 40, 40);
        console.log("DRAWING");
	}
	if(this.secondPressed) {
		this.ctx.drawImage(this.img, 310, 120, 40, 40);
	}
	if(this.thirdPressed) {
		this.ctx.drawImage(this.img, 310, 180, 40, 40);
	}
	if(this.thirdPressed) {
		this.ctx.fillText("Complete", 10, 300);
    }
    
    this.player.render();
}

function moveU() {
    this.y -= 3;
    this.firstPressed = true;
    console.log("called");
}

function moveD() {
    this.y += 3;
    this.secondPressed = true;
}

function moveL() {
    this.x -= 3;
    this.thirdPressed = true;
}

function moveR() {
	this.x += 3;
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