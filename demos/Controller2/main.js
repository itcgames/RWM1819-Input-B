function main() {
	
    this.input = new GameController();
    
	this.buttons = [];
    
	this.firstKey = 0;
	this.firstPressed = false;
    this.secondKey = 2;
    this.secondPressed = false;
    this.thirdKey = 3;
    this.thirdPressed = false;
    
    this.input.addUpdateLoop(draw, 33);
    this.canvas = {};
	this.initCanvas();
	this.image = new Image();
	this.image.src = "../../Component/ASSETS/star.png";
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

function draw() {
//	this.buttons = this.input.update();
	this.buttons.forEach(function(element) {
		if(element[1] === this.firstKey) {
			this.firstPressed = true;
		}
	
        if(this.buttons.length > 1) {
            if(element[2] === this.secondKey) {
                this.secondPressed = true;
            }
        }

        if(this.buttons.length > 1) {
            if(element[3] === this.thirdKey) {
                this.thirdPressed = true;
            }
        }

        });

	this.ctx.clearRect(0,0,1000,1000);
	this.ctx.fillText("Plug in Controller", 10, 100);
	this.ctx.fillText("Press A", 10, 350);
    this.ctx.fillText("Press X", 10, 450);
    this.ctx.fillText("Press Y", 10, 550);
	if(this.input.connected) {
		this.ctx.drawImage(this.img, 100, 60, 150, 180);
	}
	if(this.firstPressed) {
		this.ctx.drawImage(this.img, 200, 60, 150, 180);
	}
	if(this.secondPressed) {
		this.ctx.drawImage(this.img, 300, 60, 150, 180);
    }
    if(this.thirdPressed) {
		this.ctx.drawImage(this.img, 400, 60, 150, 180);
	}

}