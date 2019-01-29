///Author: David O'Gorman
//First Feature Inputted
//Second feature inputted. Linked to Jira

class Game {

    constructor()
    {
        this.player = new Player(100, 500, 50, 60, 1);
       // this.bullet = new Bullet(this.player.x, this.player.y, 50, 60, 1);  
       
        this.keyPad= new Keyboard();

        this.gamePad= new GameController();
        this.moveU = this.moveU.bind(this);
	    this.moveD = this.moveD.bind(this);
	    this.moveL = this.moveL.bind(this);
        this.moveR = this.moveR.bind(this);
        this.shoot = this.shoot.bind(this);
        
    
        this.firstPressed = false;
  
        this.secondPressed = false;
        
        this.thirdPressed = false;

        this.fourthPressed = false;
            
        this.init();
        this.image = new Image();
        this.image.src = "ASSETS/star.png";
       // ctx.font = "20px Arial";

	   
    }




    init()
    {
        //document.addEventListener("keydown", gameNs.game.keyDownHandler);
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
      

        var c = canvas.getContext("2d");
        window.addEventListener("keydown", function(e){
            if([32,37,38,39,40].indexOf(e.keyCode) > -1)
            {
                e.preventDefault();
            }
        }, false); 
        
      

        this.keyPad.bind(this.moveU, "ArrowUp");
	    this.keyPad.bind(this.moveD, "ArrowDown");
	    this.keyPad.bind(this.moveL, "ArrowLeft");
        
        this.keyPad.bind(this.moveR, "ArrowRight");
        this.keyPad.bind(this.shoot, " ");
    }

    draw()
    {
        
        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      //  var canvas = document.getElementById('mycanvas');
     // ctx.fillText("GamePad Demo", 10, 50);
   //   ctx.fillText("A", 110, 100);
    //  ctx.fillText("B", 210, 100);
   //   ctx.fillText("X", 310, 100);
   //   ctx.fillText("Y", 410, 100);
      if(this.firstPressed) {
        ctx.drawImage(this.image, 110, 115, 40, 40);
        }

      if(this.secondPressed) {
        ctx.drawImage(this.image, 210, 115, 40, 40);
         }

        if(this.thirdPressed) {
            ctx.drawImage(this.image, 310, 115, 40, 40);
        }

        if(this.fourthPressed) {
            ctx.drawImage(this.image, 410, 115, 40, 40);
        }
       // this.player.render();
    //    this.bullet.render();   
    }

    loop()
    {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.loop);
    }

    update()
    {
        console.log("calling update");
       
        this.handler();

        //gameNs.game.bullet.update(gameNs.game.player.x, gameNs.game.player.y);
        
        var list =["1", "2", "3", "4", "5", "6", "Q", "E", "Space", "Enter", "ArrowUp",
                    "ArrowDown", "ArrowLeft", "ArrowRight"];

        for(var btn2=- 0; btn2 < list.length; btn2++)
        {
            if(this.keyPad.isButtonPressed(list[btn2]))
            {
                console.log(list[btn2], "Pressed");
            }
        }
    }

     moveU() 
     {
        this.player.y -= 5;
     }
    
     moveD() 
     {
        this.player.y += 5;
     }
    
     moveL() 
     {
        this.player.x -= 5;
     }
    
     moveR() 
     {
        this.player.x += 5;
     }

     shoot()
     {
         this.bullet.update();
     }
    


     handler() {

        var lis = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT",
        "Back", "Start","LeftThumbClick", "RightThumbClick", "D-pad Up", 
           "D-pad Down", "D-pad Left", "D-Pad Right" ];
        for (var btn = 0; btn < lis.length; btn++)
        {
        //  console.log(this.gamePad);
        // if(this.gamePad.isButtonPressed(lis[btn]))
        // {
        //     console.log(lis[btn], "Pressed");
        // }

        if(this.gamePad.isButtonPressed("A") ==true)
        {
        console.log("A pressed");  
        this.firstPressed = true;          
        }
        if(this.gamePad.isButtonPressed("B") ==true)
        {
        console.log("B pressed");     
        this.secondPressed = true;       
        }
        if(this.gamePad.isButtonPressed("X") ==true)
        {
        console.log("X pressed");     
        this.thirdPressed = true;       
        }
        if(this.gamePad.isButtonPressed("Y") ==true)
        {
        console.log("Y pressed");    
        this.fourthPressed = true;        
        }
        }



     }
}