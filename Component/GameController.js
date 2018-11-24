
var gamepadInfo = document.getElementById("gamepad-info");
var ball = document.getElementById("ball");
var start;
var a = 0;
var b = 0;
var gpd;


window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      e.gamepad.index, e.gamepad.id,
      e.gamepad.buttons.length, e.gamepad.axes.length);
      gpd = e.gamepad;
  })


  var interval;

if (!('ongamepadconnected' in window)) {

  interval = setInterval(pollGamepads, 50);
}

function pollGamepads() {
    console.log(gpd);
  if(gpd.buttons[0].pressed)
  {
    console.log("button 0 A Button");
    gameNs.game.player.y -= 50;
  }
  if(gpd.buttons[1].pressed)
  {
    console.log("button 1 B Button");
  }
  if(gpd.buttons[2].pressed)
  {
    console.log("button 2 X Button");
  }
  if(gpd.buttons[3].pressed)
  {
    console.log("button 3 Y Button");
  }
  if(gpd.buttons[4].pressed)
  {
    console.log("button 4 Left Bumper");
  }
  if(gpd.buttons[5].pressed)
  {
    console.log("button 5 Right Bumper");
  }
  if(gpd.buttons[6].pressed)
  {
    console.log("button 6 Left Trigger");
  }
  if(gpd.buttons[7].pressed)
  {
    console.log("button 7 Right Trigger");
    gameNs.game.bullet.moving = true;
  }
  if(gpd.buttons[8].pressed)
  {
    console.log("button 8 Back Button");
  }
  if(gpd.buttons[9].pressed)
  {
    console.log("button 9 Start Button");
  }
  if(gpd.buttons[10].pressed)
  {
    console.log("button 10 Left Thumbstick Click");
  }
  if(gpd.buttons[11].pressed)
  {
    console.log("button 11 Right ThumbStick Click");
  } 
  if(gpd.buttons[12].pressed)
  {
    console.log("button 12 D-Pad Up");
    gameNs.game.player.y -=15;
  } 
  if(gpd.buttons[13].pressed)
  {
    console.log("button 13 D-Pad Down");
    gameNs.game.player.y +=15;
  } 
  if(gpd.buttons[14].pressed)
  {
    console.log("button 14 D-Pad Left");
    gameNs.game.player.x -=15;
  } 
  if(gpd.buttons[15].pressed)
  {
    console.log("button 15 D-Pad Right");
    gameNs.game.player.x +=15;
  } 
  if(gpd.buttons[16].pressed)
  {
    console.log("button 16");
  } 
  

}