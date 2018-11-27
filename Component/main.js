var gameNs = {};

function main()
{
    var game= new Game();
    gameNs.game = game;
    game.init();
   
    loop();
        //game.loop();
      //  game.player.update();
    
}
function loop()
{
    gameNs.game.update();
    gameNs.game.draw();
    window.requestAnimationFrame(loop);
}