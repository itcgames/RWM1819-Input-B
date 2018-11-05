class Game {

    constructor()
    {
        this.player = new Player(100, 500, 50, 60, 1);
    }

    init()
    {
      
        document.addEventListener("keydown", gameNs.game.keyDownHandler);
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        var c = canvas.getContext("2d");
        window.addEventListener("keydown", function(e){
            console.log("HIT");
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
       
    }

    update()
    {
        gameNs.game.draw();

        window.requestAnimationFrame(gameNs.game.update);
    }

   
    

    keyDownHandler(e)
    {
        console.log(e.keyCode);
        switch(e.keyCode){
            case 38: // Space
            gameNs.game.player.moveUp();
            break;
            case 37:
            gameNs.game.player.moveLeft();
            break;
            case 39:
            gameNs.game.player.moveRight();
            break;
            case 40:
            gameNs.game.player.moveDown();
            break;
            case 32:
            gameNs.game.player.Jump();
            break;
            
        }

    }
}