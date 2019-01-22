/*var keyMap = {}

onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    keyMap[e.keyCode] = e.type == 'keydown';
    /* insert conditional here 
    console.log(keyMap);
}   */

//var Akey = ;


class Keyboard {

  constructor() {

  
      this.current = {"1":false, "2":false, "3":false, "4":false, "5":false,
                      "6":false,   "Q":false, "E":false, "Space":false, "Enter":false,
                      "UpArrow":false, "DownArrow":false, "LeftArrow":false, "RightArrow":false};

      this.previous = this.current;
      window.addEventListener("keydown", this.onKeyDown.bind(this));
      window.addEventListener("keyup", this.onKeyUp.bind(this));
      this.pressed = false;
      this.loops = [];
      this.holdValue = 2;
      this.holdTimer = 0;
      this.keys = [];
      this.keyHandler = [];
      this.history = [];
      this.binds = {};
      this.lastUpdate = Date.now();
  }
  
  addUpdateLoop(name, loop) {
      this.loops.push(name);
      setInterval(name, loop);
    }
  
    addKeyHandler(name) {
      this.keyHandlers.push(name);
    }
  
    setHoldValue(val) {
      this.holdValue = val;
  }


  getKeyPad(e)
  {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  e.keyMap.index, e.keyMap.id,
  e.keyMap.buttons.length, e.keyMap.axes.length);
  this.gpd = e.keyMap;
  }

  //Takes in a string
  isButtonPressed(button)
  {
  return this.current[button];
  }


  onKeyDown(e) {
  if (!this.pressed){
    this.lastUpdate = Date.now();
  }
  this.pressed = true;

  var now = Date.now();
  var dt = now - this.lastUpdate;
  this.lastUpdate = now;
  this.holdTimer += dt / 1000;
  console.log(e.key);
  console.log(this.holdTimer);
  this.current["Q"] = e.key.toUpperCase() == "Q" ? true : this.current["Q"];;
  this.current["E"] = e.key.toUpperCase() == "E" ? true : this.current["E"];
  this.current["Space"] = e.key.toUpperCase() == " " ? true : this.current["Space"];
  this.current["Enter"] = e.key.toUpperCase() == "ENTER" ? true : this.current["Enter"];;
  this.current["1"] = e.key.toUpperCase() == "1" ? true : this.current["1"];;
  this.current["2"] = e.key.toUpperCase() == "2" ? true : this.current["2"];
  this.current["3"] = e.key.toUpperCase() == "3" ? true : this.current["3"];
  this.current["4"] = e.key.toUpperCase() == "4" ? true : this.current["4"];
  this.current["5"] = e.key.toUpperCase() == "5" ? true : this.current["5"];
  this.current["6"] = e.key.toUpperCase() == "6" ? true : this.current["6"];
  this.current["ArrowUp"] = e.key.toUpperCase() == "ARROWUP" ? true : this.current["ArrowUp"];
  this.current["ArrowDown"] = e.key.toUpperCase() == "ARROWDOWN" ? true : this.current["ArrowDown"];
  this.current["ArrowLeft"] = e.key.toUpperCase() == "ARROWLEFT" ? true : this.current["ArrowLeft"];
  this.current["ArrowRight"] = e.key.toUpperCase() == "ARROWRIGHT" ? true : this.current["ArrowRight"];

 
  if(!this.keys.includes(e.key)) {
    this.keys.push(e.key);
  }
  for(var key in this.binds) {
    if(key === e.key) {
      var func = this.binds[key];
      func();
    }
  }

  // this.keyHandler.forEach(function(element) {
  //   if(this.holdTimer > this.holdValue) {
  //     this.holdTimer = 0;
  //     this.history.push(this.keys.slice());
  //     element(this.keys);
    
  //   }
   
  //     });


  }

  onKeyUp(e) {

      this.current["Q"] = e.key.toUpperCase() == "Q" ? false : this.current["Q"];;
      this.current["E"] = e.key.toUpperCase() == "E" ? false : this.current["E"];
      this.current["Space"] = e.key.toUpperCase() == " " ? false : this.current["Space"];
      this.current["Enter"] = e.key.toUpperCase() == "Enter" ? false : this.current["Enter"];;
      this.current["1"] = e.key.toUpperCase() == "1" ? false : this.current["1"];;
      this.current["2"] = e.key.toUpperCase() == "2" ? false : this.current["2"];
      this.current["3"] = e.key.toUpperCase() == "3" ? false : this.current["3"];
      this.current["4"] = e.key.toUpperCase() == "4" ? false : this.current["4"];
      this.current["5"] = e.key.toUpperCase() == "5" ? false : this.current["5"];
      this.current["6"] = e.key.toUpperCase() == "6" ? false : this.current["6"];
      this.current["ArrowUp"] = e.key.toUpperCase() == "ARROWUP" ? false : this.current["ArrowUp"];
      this.current["ArrowDown"] = e.key.toUpperCase() == "ARROWDOWN" ? false : this.current["ArrowDown"];
      this.current["ArrowLeft"] = e.key.toUpperCase() == "ARROWLEFT" ? false : this.current["ArrowLeft"];
      this.current["ArrowRight"] = e.key.toUpperCase() == "ARROWRIGHT" ? false : this.current["ArrowRight"];
      


      var index = this.keys.indexOf(e.key);
      if (index > -1) {
        this.keys.splice(index, 1);
        this.holdTimer =0;
       }

   }

}