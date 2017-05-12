$(document).ready(function() {

  // Adapted from http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  $(".character button img").on("click", function() {
    var person = $(this).attr("id");

    var randomCard = "#card" + getRandomInt(1, 9);

    var $randomCard = $(randomCard);

    $randomCard
    .find(".box")
    .html(`<img id="here" src="faces/${person}.png" />`);
  });

  var player1misses = 0;
  var player2misses = 0;


function clearBoard() {
      setInterval(function(){
        $(".back")
        .show()
        .siblings()
        .hide();
      }, 4000);
      setInterval(function(){
        $("#here").remove()
      }, 4000);
    };

  $(".back").on("click", function() {
    $(this)
    .hide()
    .siblings()
    .show();

    if ($(this).parent($(".box")).html().includes("img")) {
      alert("You found your friend!");
      clearBoard();
    } else {
      player1misses += 1;
      $("#player1_score").text(player1misses);
    }
  });

  // $("#card8").html().includes("<img")
});


var player1 = true;
var player2 = false;

if (player1) {
    $(".back").on("click", function() {
      $(this)
      .hide()
      .siblings()
      .show();

      if ($(this).parent($(".box")).html().includes("img")) {
        alert("You found your friend!");
        clearBoard();
        player 1 = false;
        player 2 = true;
      } else {
        player1misses += 1;
        $("#player1_score").text(player1misses);
      }
    });
} else if (player2) {
  $(".back").on("click", function() {
    $(this)
    .hide()
    .siblings()
    .show();

    if ($(this).parent($(".box")).html().includes("img")) {
      alert("You found your friend!");
      clearBoard();
    } else {
      player2misses += 1;
      $("#player2_score").text(player2misses);
    }
}
