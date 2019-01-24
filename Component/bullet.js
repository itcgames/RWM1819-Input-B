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
   
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(playerx, playery)
    {
      //  if(this.moving == false)
       // {
        //    this.x = playerx;
        //    this.y = playery;
       //     if(keyMap[32] === true )
       //     {
                //this.moving = true;
                this.x += 5
        //    }
           // if(gpd.buttons[7].ispressed)
           // {
           //     this.moving = true;
          //  }
       // }
       // else
       // {
       //     this.x += 10;
       //     console.log("moving");
      //      this.timer++;
      //      if(this.timer >= 50)
      //      {
      //          this.moving = false;
      //          this.timer = 0;
      //          this.x = playerx;
      //          this.y = playery;
      //      }
      //  }
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