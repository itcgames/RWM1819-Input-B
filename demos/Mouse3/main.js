function main() 
{
    this.input = new Keyboard();

    this.canvas = {};
    this.initCanvas();
   
    this.input.addUpdateLoop(draw, 14);

    this.image = new Image();
    this.image.src = "../../Component/ASSETS/Block.png";
    this.image.width = 300;
    this.image.height = 300;
    this.image.x = 500;
    this.image.y = 500;
    this.pos = [500,500];
    this.hit = false;
    this.input.pos;
    this.checkHover(this.image);

}

function initCanvas() {

    this.canvas = document.createElement("canvas");
    this.canvas.id = "mycanvas";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "50px   Arial";
    document.body.appendChild(this.canvas);
}



function checkHover(currentPos){
    
    console.log(this.input.getMousePos());
   
    if(this.input.pos.x < currentPos.x + currentPos.width && 
        this.input.pos.x + 10 > currentPos.x &&
        this.input.pos.y < currentPos.y + currentPos.height && 
        this.input.pos.y + 10 > currentPos.y)
    {
		if(!this.hit) {
            this.hit = true;
       //     this.ctx.fillText("Demo Complete", 250,300);
        }
        if(this.hit)
        {
            console.log("hit");

        }
	}
}


function draw() 
{ this.checkHover(this.image);
    this.ctx.clearRect(0,0,700,800);
    this.ctx.fillText("Demo for the mouse", 300,55);
    this.ctx.fillText("Please move mouse over Square", 300,100);
  //  console.log("drawing");
    if(!this.hit){
        this.ctx.drawImage(this.image, this.image.x, this.image.y, this.image.width, this.image.height);
    }

    if(this.hit === true){
        this.ctx.fillText("Demo Complete", 550,300);
        console.log("hit!!!!!!!");
    }
}