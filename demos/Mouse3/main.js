function main() 
{
    this.input = new Keyboard();

    this.canvas = {};
    this.initCanvas();
   
    this.input.addUpdateLoop(draw, 14);

    this.image = new Image();
    this.image.src = "../../Component/ASSETS/Block.png";
    this.image.width = 480;
    this.image.height = 480;
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



function checkHover(currentPos, image){
    ///if(Math.sqrt(((this.input.x - (this.pos.x + (this.image.width / 2))) * (this.input.x - (this.pos.x + (this.image.width / 2))))
//	+ ((this.input.y - (this.pos.y + (this.image.height / 2))) * (this.input.y - (this.pox.y + (this.image.height / 2))))) < 100) {
    if(currentPos.x < image.x + image.width && 
        currentPos.x + 10 > image.x &&
        currentPos.y < image.y + image.height && 
        currentPos.y + 10 > image.y)
    {
		if(!this.hit) {
            this.hit = true;
            this.ctx.fillText("Demo Complete", 250,300);
		}	
	}
}


function draw() 
{
    this.ctx.clearRect(0,0,700,800);
    this.ctx.fillText("Demo for the mouse", 100,55);
    this.ctx.fillText("Please move mouse over Square", 100,100);
  //  console.log("drawing");
    if(!this.hit){
        this.ctx.drawImage(this.image, this.currentPos[0], this.currentPos[1], 200,200);
    }

    if(this.hit === true){
        this.ctx.fillText("Demo Complete", 150,300);
        console.log("hit!!!!!!!");
    }
}