var code = require('../js/class.js');


describe('Game', function() {
  var test = code.Game('Tomb Raider', 'Adventure/Puzzle');

  it('should set title and genre correctly', function() {
    expect(test.title).toEqual('Tomb Raider');
    expect(test.genre).toEqual('Adventure/Puzzle');
  });
});
