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
                        "6":false,   "Q":false, "E":false, "Space":false, "Enter":false};

        this.previous = this.current;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
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
   
    this.current["Q"] = e.key.toUpperCase() == "Q" ? true : this.current["Q"];;
    this.current["E"] = e.key.toUpperCase() == "E" ? true : this.current["E"];
    this.current["Space"] = e.key.toUpperCase() == " " ? true : this.current["Space"];
    this.current["Enter"] = e.key.toUpperCase() == "Enter" ? true : this.current["Enter"];;
    this.current["1"] = e.key.toUpperCase() == "1" ? true : this.current["1"];;
    this.current["2"] = e.key.toUpperCase() == "2" ? true : this.current["2"];
    this.current["3"] = e.key.toUpperCase() == "3" ? true : this.current["3"];
    this.current["4"] = e.key.toUpperCase() == "4" ? true : this.current["4"];
    this.current["5"] = e.key.toUpperCase() == "5" ? true : this.current["5"];
    this.current["6"] = e.key.toUpperCase() == "6" ? true : this.current["6"];

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
        }

}