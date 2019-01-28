/* global rwm1819InputB, describe, it, expect, should */

describe('moveU()', function () {
  'use strict';

  it('exists', function () {
  if(typeof moveU === "function")
  {
    moveU();
    expect(true);
  }
  else{
    expect(false);
  }
  });

});


describe('moveD()', function () {
  'use strict';

   it('exists', function () {
  if(typeof moveD === "function")
  {
    moveD();
    expect(true);
  }
  else{
    expect(false);
  }
  });

});


describe('moveL()', function () {

  it('exists', function () {
    if(typeof moveL === "function")
    {
      moveL();
      expect(true);
    }
    else{
      expect(false);
    }
  });

});


describe('moveR()', function () {
  it('exists', function () {
    if(typeof moveR === "function")
    {
      moveR();
      expect(true);
    }
    else{
      expect(false);
    }
  });

});

describe('myGetKeys()', function () {
  it('exists', function () {
    if(typeof myGetKeys === "function")
    {
      myGetKeys();
      expect(true);
    }
    else{
      expect(false);
    }
  });

});

describe('onKeyDown()', function () {
  it('exists', function () {
    if(typeof onKeyDown === "function")
    {
      onKeyDown();
      expect(true);
    }
    else{
      expect(false);
    }
  });

});




describe('onKeyUp()', function () {
  it('exists', function () {
    if(typeof onKeyUp === "function")
    {
      onKeyUp();
      expect(true);
    }
    else{
      expect(false);
    }
  });

});


describe('mousePos', function () {
  it('exists', function () {
    if(typeof mousePos === "function")
    {
      mousePos();
      expect(true);
    }
    else{
      expect(false);
    }
  });

});


describe('getMousePos', function () {
  it('exists', function () {
    if(typeof getMousePos === "function")
    {
      getMousePos();
      expect(true);
    }
    else{
      expect(false);
    }
  });

});