
$(document).on('ready', function() {

  // obj to hold instances of GameLibrary
  var libraries = {};
  var currentLib;

  // start by hiding add game form
  $('#game-form').hide();

  // handler for add library form
  $('#lib-add-form').on('submit', function(event){
    event.preventDefault();

    // grab name
    var libName = $('#lib-name').val();

    // create new GameLibrary
    var newLib = new GameLibrary(libName);

    libraries[newLib.title] = newLib;
    $('#lib-choice').append($('<option>').html(libName));

    $(this).toggle();
    $('#game-form').toggle();

    // clear libraries and render again
    $('.game-library').remove();
    for (var lib in libraries) {
      console.log(lib);
      $('.container').append(libraries[lib].render());
    }
  });


  // handler for game form submission
  $('#game-form').on('submit', function(event){
    event.preventDefault();

    // grab values
    var gameName = $('#game-name').val();
    var gameGenre = $('#game-genre').val();
    var libName = $('#lib-choice').val();

    // create new Game object
    var newGame = new Game(gameName, gameGenre);

    // if it isn't in the library, add it
    if (!libraries[libName].contains(newGame)) {
      libraries[libName].addGame(newGame);
      $('#' + libraries[libName].id).remove();
    }
    else
      alert('That game is already in the library!');

    // render games again
    $('.container').append(libraries[libName].render());
  });

  // handler for delete buttons on each game
  $('.container').on('click', 'button.game-delete', function(event){
    event.stopPropagation();

    // library title to delete from
    console.log($(this).parent().data());
    var libName = $(this).parent().parent().data('title');
    console.log(libName);

    libraries[libName].removeGame($(this).parent().data());
    console.log(libraries[libName]);
    $('#' + libraries[libName].id).remove();
    $('.container').append(libraries[libName].render());
  });

  // handler for add library button
  $('#lib-add-btn').on('click', function(event){

    // hide game form, show lib form
    $('#game-form').toggle();
    $('#lib-add-form').toggle();

  });
});
