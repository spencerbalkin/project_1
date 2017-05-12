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
    .html(`<img src="faces/${person}.png" />`);
  });

  $(".back").on("click", function() {
    $(this)
    .hide()
    .siblings()
    .show();
  });

});
