
// Game class
function Game(title, genre) {
  this.title = title;
  this.genre = genre;
  // will hold index in GameLibrary
  this.libIndex = null;
}

Game.prototype.equalTo = function(otherGame) {
  // determine whether this is equal to another instance of Game

  return (this.title === otherGame.title) && (this.genre === otherGame.genre);
};

Game.prototype.render = function() {
  // Package data of a Game object into a jQuery object
  // and return it

  var container = $('<div class="col-xs-6 text-center game">') ;
  var title = $('<h4>' + this.title + '</h4>');
  var genre = $('<p>' + this.genre + '</p>');
  var btnDel = $('<button class="btn btn-xs btn-danger game-delete">Delete</button>');

  container.data(this);

  container.append(title);
  container.append(genre);
  container.append(btnDel);

  return container;
};

// GameLibrary class
function GameLibrary(title, gamesArr) {
  // expects gamesArr to be an array of Game objs, if given

  this.title = title;
  // hyphen spaced id for DOM accessibility
  this.id = title.replace(/\s/g, '-').toLowerCase();

  // in case games isn't given, set to empty array
  if (Object.prototype.toString.call(gamesArr) === '[object Array]')
    this.games = gamesArr;
  else
    this.games = [];
}

GameLibrary.prototype.addGame = function(newGame) {
  // add a newGame to the GameLibrary if it isn't already in there

  if (!this.contains(newGame)) {
    //set libIndex
    newGame.libIndex = this.games.length;
    this.games.push(newGame);
    return newGame.render();
  }
};

GameLibrary.prototype.removeGame = function(game) {
  // remove a game from the collection

  this.games.splice(game.libIndex, 1);
};

GameLibrary.prototype.contains = function(game) {
  // determine whether or not the library holds game

  var matches = [];
  if (this.games.length > 0)
    matches = this.games.filter(function(g){
    return g.equalTo(game);
  });

  if (matches.length > 0)
    return true;
  else
    return false;
};

GameLibrary.prototype.render = function(name) {
  // Render DOM element for GameLibrary that can hold Games
  // name is a string to name the library

  var container = $('<div class="row game-library">');
  var titleWrap = $('<div class="text-center">');
  var title = $('<h4>' + this.title + '</h4>');

  container.attr('id', this.id);

  container.append(titleWrap.append(title));

  if (this.games.length > 0)
    this.games.forEach(function(g){
      container.append(g.render());
    });

  return container;
};

module.exports = {
  Game: Game,
  GameLibrary: GameLibrary
};
