var gameNs = {};

function main()
{
    var game= new Game();
    gameNs.game = game;
    game.init();
   
    
        game.update();
    
}