class Player {


   

    constructor(x, y, width, height, colour) 
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colour = colour;
        this.speed = 5;
      
      
    }

    render()
    {
        
        var canvas = document.getElementById('mycanvas');
        console.log(canvas);
        var ctx = canvas.getContext("2d");
   
        // fill the square with this (rgb value) colour
        ctx.fillStyle = this.rgb(this.colour[0],this.colour[1],this.colour[2]);
        // args are x,y,width,height
        ctx.fillRect(this.x, this.y, this.width, this.height);
   
  
    }

    rgb(r, g, b)
  {
    return 'rgb('+this.clamp(Math.round(r),0,255)+', '+this.clamp(Math.round(g),0,255)+', '+this.clamp(Math.round(b),0,255)+')';
  }

  clamp(value, min, max)
  {
    if(max<min) {
      var temp = min;
      min = max;
      max = temp;
    }
    return Math.max(min, Math.min(value, max));
  }

    update()
    {
      
    }

    moveUp() 
    {
        console.log("UP");
        this.y -=10;
    }

    moveLeft() 
    {
       
        console.log("LEFT");
        this.x -=10;
    }

    moveRight()
    {
       
        console.log("RIGHT");
        this.x += 10;
    }

    moveDown() 
    {
        console.log("DOWN");
        this.y +=10;
    }

    Jump()
    {
        console.log("Jump");
        this.y -= 50;
    }

}