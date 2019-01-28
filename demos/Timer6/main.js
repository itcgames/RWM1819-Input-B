function main() {
	
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
    
	this.input.bind(this.moveU, "ArrowUp");
	this.input.bind(this.moveD, "ArrowDown");
	this.input.bind(this.moveL, "ArrowLeft");
    

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
    this.firstPressed = true;
    console.log("called");
}

function moveD() {
    this.secondPressed = true;
    console.log("called");
}

function moveL() {
    this.thirdPressed = true;
    console.log("called");
}

function moveR() {

}

function getKeys(keys) {
    
    this.ctx.fillText("Time", this.holdTimer);

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

function draw() {
	
    this.ctx.clearRect(0,0,800,700);
    this.ctx.fillText("Time", this.holdTimer, 50, 50);
    this.ctx.fillText("Key Holding ", 10, 50);
    this.ctx.fillText("Press and hold a Key to track timer ", 10, 90);
    if(this.firstPressed) {
      //  this.ctx.drawImage(this.img, 310, 80, 40, 40);
        this.ctx.fillText("Key Holding " + this.input.holdTimer, 10, 50);
      //  this.ctx.drawImage(this.img, 310, 80, 40, 40);

        this.ctx.font()
        console.log("DRAWING");
	}
	if(this.secondPressed) {
        //this.ctx.drawImage(this.img, 310, 120, 40, 40);
        this.ctx.fillText("Key Holding ", 10, 50);
     //   this.ctx.drawImage(this.img, 310, 120, 40, 40);
	}
	if(this.thirdPressed) {
        //this.ctx.drawImage(this.img, 310, 180, 40, 40);
        this.ctx.fillText("Key Holding ", 10, 50);
      //  this.ctx.drawImage(this.img, 310, 180, 40, 40);
	}
}