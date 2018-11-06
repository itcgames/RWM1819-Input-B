/* global rwm1819InputB, describe, it, expect, should */

describe('keyDownHandler()', function () {
  'use strict';
  let game;
  beforeEach(() => {
    game = new Game();
    //DO setup here
  })

  it('exists', function () {
    expect(game.keyDownHandler).to.be.a('function');
  });


});



describe('moveUp()', function () {
  'use strict';
  let game;
  beforeEach(() => {
    game = new Game();
    //DO setup here
  })

  it('exists', function () {
    expect(game.player.moveUp).to.be.a('function');
  });

});


describe('moveDown()', function () {
  'use strict';
  let game;
  beforeEach(() => {
    game = new Game();
    //DO setup here
  })

  it('exists', function () {
    expect(game.player.moveDown).to.be.a('function');
  });

});


describe('moveLeft()', function () {
  'use strict';
  let game;
  beforeEach(() => {
    game = new Game();
    //DO setup here
  })

  it('exists', function () {
    expect(game.player.moveLeft).to.be.a('function');
  });

});


describe('moveRight()', function () {
  'use strict';
  let game;
  beforeEach(() => {
    game = new Game();
    //DO setup here
  })

  it('exists', function () {
    expect(game.player.moveRight).to.be.a('function');
  });

});