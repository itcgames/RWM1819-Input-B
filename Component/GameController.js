

/*var AButton = 195;
var BButton = 196;
var XButton = 197;
var YButton = 198;
var View = 208;
var Start = 207;
var LBumper  =200;
var RBumber = 199;
var LTrigger = 201;
var RTrigger = 202;
var LThumbUp = 211;
var LThumbDown = 212;
var LThumbLeft = 214;
var LThumbRight = 213;


document.addEventListener("keypress", function(e){
    switch (e.keyCode) {
    
        case 211:  // GamepadLeftThumbstickUp
        case 203:  // GamepadDPadUp
            break;

        case 212:  // GamepadLeftThumbstickDown
        case 204:  // GamepadDPadDown
            break;

        case 214:  // GamepadLeftThumbstickLeft
        case 205:  // GamepadDPadLeft
            break;

        case 213:  // GamepadLeftThumbstickRight
        case 206:  // GamepadDPadRight
            break;

        case 195:  // A Button
            break;

        case 196: // B button
            break;

        case 197: // X Button
            break;

        case 198: // Y Button
            break;


        case 208: // View button
            break;

        case 207: // Menu button
            break;


        case 200: // Left Bumper
            break;

        case 199: // Right Bumper
            break;

        case 201: // Left Trigger
            break;

        case 202: // Right Trigger
            break;
    }
});

*/
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

  interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
  console.log(gpd);
  if(gpd.buttons[1].pressed)
  {
    console.log("button 1");
  }
  if(gpd.buttons[10].pressed)
  {
    console.log("button 10");
  }
  if(gpd.buttons[2].pressed)
  {
    console.log("button 2");
  }
  if(gpd.buttons[3].pressed)
  {
    console.log("button 3");
  }
  if(gpd.buttons[4].pressed)
  {
    console.log("button 4");
  }
  if(gpd.buttons[5].pressed)
  {
    console.log("button 5");
  }
  if(gpd.buttons[6].pressed)
  {
    console.log("button 6");
  }
  if(gpd.buttons[7].pressed)
  {
    console.log("button 7");
  }
  if(gpd.buttons[8].pressed)
  {
    console.log("button 8");
  }
  if(gpd.buttons[10].pressed)
  {
    console.log("button 10");
  }
  if(gpd.buttons[9].pressed)
  {
    console.log("button 9");
  }
  if(gpd.buttons[10].pressed)
  {
    console.log("button 10");
  } 

}