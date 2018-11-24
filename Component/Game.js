///Author: David O'Gorman
//First Feature Inputted
//Second feature inputted

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

    update()
    {
        
        gameNs.game.draw();
        gameNs.game.player.update();
        gameNs.game.bullet.update(gameNs.game.player.x, gameNs.game.player.y);
        window.requestAnimationFrame(gameNs.game.update);


    }

   
    
}