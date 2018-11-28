///Author: David O'Gorman
//First Feature Inputted
//Second feature inputted. Linked to Jira

class Game {

    constructor()
    {
        this.player = new Player(100, 500, 50, 60, 1);
        this.bullet = new Bullet(this.player.x, this.player.y, 50, 60, 1);
        
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
        
        this.gamePad= new GameController();
        this.keyPad= new Keyboard();
    }

    draw()
    {
        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
      
        var canvas = document.getElementById('mycanvas');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.player.render();
        this.bullet.render();
       
    }

    loop()
    {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.loop);
    }

    update()
    {
        var lis = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT",
                     "Back", "Start","LeftThumbClick", "RightThumbClick", "D-pad Up", 
                        "D-pad Down", "D-pad Left", "D-Pad Right" ];
        for (var btn = 0; btn < lis.length; btn++)
        {
          //  console.log(this.gamePad);
            if(this.gamePad.isButtonPressed(lis[btn]))
            {
                console.log(lis[btn], "Pressed");
            }
        }
       
        //gameNs.game.bullet.update(gameNs.game.player.x, gameNs.game.player.y);
        
        var list =["1", "2", "3", "4", "5", "6", "Q", "E", "Space", "Enter"];

        for(var btn2=- 0; btn2 < list.length; btn2++)
        {

            if(this.keyPad.isButtonPressed(list[btn2]))
            {
                console.log(list[btn2], "Pressed");
            }

        }



    }

   
    
}