
 class GameController {
   
   constructor(){
     
     
    this.gpd = undefined;
    this.loops = [];
    this.gamepadInfo = document.getElementById("gamepad-info");
    
  
    this.current = {"A":false, "B":false, "X":false, "Y":false, "RB":false, "LB":false, 
                      "LT":false, "RT":false, "Back":false, "Start":false, 
                      "LeftThumbClick":false, "RightThumbClick":false, "D-pad Up":false, 
                      "D-pad Down":false, "D-pad Left":false, "D-Pad Right":false};

    this.previous = this.current;
    window.addEventListener("gamepadconnected", this.getGamePad.bind(this));
    //window.addEventListener("gamepadconnected", function(e) {
        //console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
          //e.gamepad.index, e.gamepad.id,
          //e.gamepad.buttons.length, e.gamepad.axes.length);
          //this.gpd = e.gamepad;
      //})

    
      var interval;

    if (!('ongamepadconnected' in window)) {

      interval = setInterval(() => this.pollGamepads(), 50);
    }

  }

  addUpdateLoop(name, loop) {
    this.loops.push(name);
    setInterval(name, loop);
  }

  addbuttonHandler() {
    this.keyHandlers.push(this.keys);

   // this.binds[key];
  }

  getGamePad(e)
  {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
          e.gamepad.index, e.gamepad.id,
          e.gamepad.buttons.length, e.gamepad.axes.length);
          this.gpd = e.gamepad;
  }

    //Takes in a string
    isButtonPressed(button)
    {
      return this.current[button];
    }


   pollGamepads() {
    //  if(gpd.buttons[0].pressed)
     // {
      // console.log("button 0 A Button");
      // gameNs.game.player.y -= 50;

    if(this.gpd !== undefined)
    {
      //}
      this.current["A"] = this.gpd.buttons[0].pressed;
      this.current["B"] = this.gpd.buttons[1].pressed;
      this.current["X"] = this.gpd.buttons[2].pressed;
      this.current["Y"] = this.gpd.buttons[3].pressed;
      this.current["LB"] =this.gpd.buttons[4].pressed;
      this.current["RB"] = this.gpd.buttons[5].pressed;
      this.current["LT"] = this.gpd.buttons[6].pressed;
      this.current["RT"] = this.gpd.buttons[7].pressed;
      this.current["Back"] = this.gpd.buttons[8].pressed;
      this.current["Start"] = this.gpd.buttons[9].pressed;
      this.current["LeftThumbClick"] = this.gpd.buttons[10].pressed;
      this.current["RightThumbClick"] = this.gpd.buttons[11].pressed;
      this.current["D-Pad Up"] = this.gpd.buttons[12].pressed;
      this.current["D-Pad Down"] = this.gpd.buttons[13].pressed;
      this.current["D-Pad Left"] = this.gpd.buttons[14].pressed;
      this.current["D-Pad Right"] = this.gpd.buttons[15].pressed;
      this.current["Button 16"] = this.gpd.buttons[16].pressed;

      let xL = this.gpd.axes[0];
      let yL = this.gpd.axes[1];
      let xR = this.gpd.axes[2];
      let yR = this.gpd.axes[3];

      xL= this.setDeadZone(xL);
      yL= this.setDeadZone(yL);
      xR= this.setDeadZone(xR);
      yR= this.setDeadZone(yR);

     /* if(xL > 0)
      {
        gameNs.game.player.x +=15;
      }
      if(xL < 0)
      {
        gameNs.game.player.x -=15;
      }
      if(yL > 0)
      {
        gameNs.game.player.y +=15;
      }
      if(yL < 0)
      {
        gameNs.game.player.y -=15;
      }
      */

    }
     /// console.log("Left stick X(DZ included)" +xL);
     // console.log("Left stick Y( DZ included)" +yL);
     // console.log("Right stick X( DZ included): " +xR);
     // console.log("Right stick Y( DZ included) " + yR);

    }

     setDeadZone(v)
    {
      const dz = 0.2;

      if(Math.abs(v) < dz)
      {
        v=0;
      }
      else
      {
        v= v - Math.sign(v) * dz;
      }
        v /= (1.0 - dz);

        return v; 
    






    }

 }