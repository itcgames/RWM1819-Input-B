function main() 
{
    this.input = new Keyboard();

    this.canvas = {};
    this.initCanvas();

    this.input.addUpdateLoop(draw, 14);

    this.image = new Image();
    this.image.src = "../../Component/ASSETS/Block.png";

    this.pos = [200,200];
    this.hit = false;
    this.currentPos = this.pos;

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



function getMouse(e){
    if(Math.sqrt(((this.input.x - (this.currentPos[0] + (this.image.width / 2))) * (this.input.x - (this.currentPos[0] + (this.image.width / 2))))
	+ ((this.input.y - (this.currentPos[1] + (this.image.height / 2))) * (this.input.y - (this.currentPos[1] + (this.image.height / 2))))) < 100) {
		if(!this.hit) {
			this.hit = true;
		}	
	}
}


function draw() 
{
    this.ctx.clearRect(0,0,700,800);
    this.ctx.fillText("Demo for the mouse", 100,55);
    this.ctx.fillText("PLease click on the Block", 100,100);
  //  console.log("drawing");
    if(!this.hit){
        this.ctx.drawImage(this.image, this.currentPos[0], this.currentPos[1], 200,200);
    }

    if(this.hit === true){
        this.ctx.fillText("Demo Complete", 150,300);
        console.log("hit!!!!!!!");
    }
}