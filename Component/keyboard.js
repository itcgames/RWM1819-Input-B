var keyMap = {}

onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    keyMap[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
    console.log(keyMap);
}

//var Akey = ;