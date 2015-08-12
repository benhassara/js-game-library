var code = require('../js/class.js');


describe('Game', function() {
  var tombRaider = null;
  var rocketLeague = null;

  beforeEach(function(){
    tombRaider = new code.Game('Tomb Raider', 'Adventure/Puzzle');
    rocketLeague = new code.Game('Rocket League', 'Flipping Awesome');
  });

  describe('#constructor', function(){
    it('should set the title', function(){
      expect(tombRaider.title).toEqual('Tomb Raider');
      expect(rocketLeague.title).toEqual('Rocket League');
    });

    it('should set the genre', function(){
      expect(tombRaider.genre).toEqual('Adventure/Puzzle');
      expect(rocketLeague.genre).toEqual('Flipping Awesome');
    });
  });
});

describe('GameLibrary', function(){
  var tombRaider = null;
  var rocketLeague = null;
  var lib = null;
  var libAlt = null;
  var libWrong = null;

  beforeEach(function(){
    tombRaider = new code.Game('Tomb Raider', 'Adventure/Puzzle');
    rocketLeague = new code.Game('Rocket League', 'Flipping Awesome');
    lib = new code.GameLibrary('My Game Library');
    libAlt = new code.GameLibrary('My Other Game Library', [tombRaider, rocketLeague]);
    libWrong = new code.GameLibrary('My Broken Game Library', 'string');
  });

  describe('#constructor', function(){
    it('should set the title', function(){
      expect(lib.title).toEqual('My Game Library');
      expect(libAlt.title).toEqual('My Other Game Library');
    });

    it('should set games to empty array if not given', function(){
      expect(lib.games).toEqual([]);
    });

    it('should set games if given an array of Games', function(){
      expect(libAlt.games).toEqual([tombRaider, rocketLeague]);
    });

    it('should not let you use a primitive as 2nd arg', function(){
      expect(libWrong.games).toEqual([]);
    });
  });
});
