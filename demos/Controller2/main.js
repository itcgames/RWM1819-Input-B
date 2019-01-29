function main() {
	
    this.input = new GameController();
    this.player = new Player(100, 250, 50, 60, 1);
    this.Ginput = new Keyboard();
	
    this.canvas = {};

    this.input.addUpdateLoop(draw, 23);
    this.Ginput.addKeyHandler(this.keys);
    this.input.isButtonPressed();

    this.buttons = [];
	this.first = 0;
    this.firstPressed = false;
    this.second = 2;
    this.secondPressed = false;
    this.third = 3;
    this.thirdPressed = false;
    this.update();
   
 //   this.input.addButtonHandler();
	this.initCanvas();
	this.image = new Image();
    this.image.src = "../../Component/ASSETS/star.png";

    this.moveU = this.moveU.bind(this);
	this.moveD = this.moveD.bind(this);
	this.moveL = this.moveL.bind(this);
    
  //  this.input.gpd.buttons[1] = "B";
  //  this.input.gpd.buttons[2] = "X";
  //  this.input.gpd.buttons[3] = "Y";
//	this.Ginput.bind(this.moveU, "A");
//	this.Ginput.bind(this.moveD, "B");
//	this.Ginput.bind(this.moveL, "X");
    
  
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

function update() {

    var lis = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT",
    "Back", "Start","LeftThumbClick", "RightThumbClick", "D-pad Up", 
       "D-pad Down", "D-pad Left", "D-Pad Right" ];
    for (var btn = 0; btn < lis.length; btn++)
    {
        console.log(this.gamePad);
        if(this.input.isButtonPressed(lis[btn]))
        {
        console.log(lis[btn], "Pressed");
        }
    }
}

function draw() {

//console.log("draw called");

    //this.buttons
    this.buttons.forEach(function(gpd) {
		if( this.input.gpd.buttons[0] = this.input.gpd.buttons[0].pressed) {
            this.ctx.drawImage(this.img, 310, 80, 40, 40);
            console.log("pressed");
		}
	
        if(this.input.gpd.buttons[2] === this.secondKey)
        {
            this.secondPressed = true;
        }
        
        if(this.input.gpd.buttons[3] === this.thirdKey) 
        {
            this.thirdPressed = true;
        }
        

     });

   this.ctx.clearRect(0,0,1000,1000);
   this.ctx.fillText("GamePad Demo", 10, 50);
   this.ctx.fillText("Please press the A Button", 10, 100);
   this.ctx.fillText("Please press the B Button", 10, 150);
   this.ctx.fillText("Please press the X Button", 10, 200);
//	if(this.input.connected) {
//		this.ctx.drawImage(this.image, 100, 80, 40, 40);
//	}
	if(this.firstPressed) {
		this.ctx.drawImage(this.image, 250, 70, 40, 40);
	}
	if(this.secondPressed) {
		this.ctx.drawImage(this.image, 250, 115, 40, 40);
    }
    if(this.thirdPressed) {
		this.ctx.drawImage(this.image, 250, 170, 40, 40);
	}

    this.player.render();
}


function myGetKeys(keys) {
	if(keys.length > 0) {
     keys.forEach(function(element)
    {
        if(element === this.first) 
        {
		    this.firstPressed = true;
		}
        if(element === this.second)
        {
		    this.secondPressed = true;
        }
        if(element === this.third)
        {
		    this.thirdPressed = true;
		}
	});
	console.log(keys);
  }
}

function moveU() {
    this.y -= 3;
    this.firstPressed = true;
  ///  console.log("called");
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