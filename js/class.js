exports.Game = function(title, genre){
  return new Game(title, genre);};

function Game(title, genre) {
  this.title = title;
  this.genre = genre;
}

Game.prototype.render = function() {
  //produce insertable HTML from Game data
  var container = $('<div>') ;
  var title = $('<h4>' + this.title + '</h4>');
  var genre = $('<p>' + this.genre + '</p>');

  container.append(title);
  container.append(genre);

  return container;
};

