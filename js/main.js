
$(document).on('ready', function() {

  // start by hiding add game form - or don't get ahead of yourself, idiot
  // $('#game-form').hide();

  var $firstLib = new GameLibrary('My Game Library');

  $('.container').append($firstLib.render());


  // handler for form submission
  $('#game-form').on('submit', function(event){
    event.preventDefault();

    // grab values
    var gameName = $('#game-name').val();
    var gameGenre = $('#game-genre').val();

    // create new Game object
    var newGame = new Game(gameName, gameGenre);

    // if it isn't in the library, add it
    if (!$firstLib.contains(newGame)) {
      $firstLib.addGame(newGame);
      $('.game-library').append(newGame.render());
    }
    else
      alert('That game is already in the library!');
  });

  // handler for delete buttons on each game
  $('.container').on('click', 'button.game-delete', function(event){
    event.stopPropagation();
    $(this).parent().remove();
  });
});
