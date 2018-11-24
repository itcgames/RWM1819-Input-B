class Bullet {


  

    constructor(x, y, width, height, colour) 
    {
        this.moving = false;
        this.timer =0;
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 5;
        this.colour = 125;
        this.speed = 5;
      
      
    }

    render()
    {
        
        var canvas = document.getElementById('mycanvas');
       // console.log(canvas);
        var ctx = canvas.getContext("2d");
   
        // fill the square with this (rgb value) colour
      //  ctx.fillStyle = this.rgb(this.colour[0],this.colour[1],this.colour[2]);
        // args are x,y,width,height
        ctx.fillRect(this.x, this.y, this.width, this.height);
   
  
    }

    update(playerx, playery)
    {
        if(this.moving == false)
        {
            this.x = playerx;
            this.y = playery;
            if(keyMap[32] === true )
            {
                this.moving = true;
            }
           // if(gpd.buttons[7].ispressed)
           // {
           //     this.moving = true;
          //  }
        }
        else
        {
            this.x += 10;
            console.log("moving");
            this.timer++;
            if(this.timer >= 50)
            {
                this.moving = false;
                this.timer = 0;
                this.x = playerx;
                this.y = playery;
            }
        }


        
    /*
        timer++;
        
        if(this.moving == true)
        {

        }
        else 
        {
            this.x = playerx;
            this.y = playery;
        }*/
    }
}