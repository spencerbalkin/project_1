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

    // add overlay text and button reset
    var overlay = $("#right").append(`<div id="overlay"></div>`);
    $("#overlay").append($(`<div id="textInOverlay"></div>`));
    $("#overlay").append($("#reset"));
      $("#reset").on("click", function(){
        location.reload();
      });
    $("#textInOverlay").html("Now go and find your friend!")

    // css for overlay
    $("#right").css("position", "relative");

    $("#overlay").css ({
      "padding-top": "100px",
      "box-sizing": "border-box",
      "background-color": "rgba(0, 0, 0, .9)",
      "width": "100%",
      "height": "100%",
      "z-index": "10%",
      "top": "0",
      "left": "0",
      "position": "absolute",
    });

    //css for text in overlay
    $("#textInOverlay").css ({
      "font-size": "20px",
      "color": "white",
      "text-align": "center",
      "text-align": "center",
      "margin-bottom": "50px"
      });
  });


//misses count for each player
  var player1misses = 0;
  var player2misses = 0;

//Counts the number of times each player won
  var player1Score = 0;
  var player2Score = 0;

//Resets the board (X's and img)
  function clearBoard() {
      setTimeout(function(){
        $(".back")
        .show()
        .siblings()
        .hide();

        $("#here").replaceWith("<div>X</div");
      }, 1500);

  }; // End clearBoard

  // variable to hold the state of the game - true = playing; false = game over
  var play = true;

  var player = "player1";


  // Click handler for game functionality
  $(".back").on("click", function() {

    // if we are still playing, enter code block
    if (play) {
      // flips cards to either ? or friend
      $(this)
      .hide()
      .siblings()
      .show();

    // if player finds div that includes image (turn over)
      if ($(this).parent($(".box")).html().includes("img")) {

        alert("You found your friend!");
        //flips back over card and removes image from grid
        clearBoard();
        $("#right").append($("#reset"))
        $("#overlay").remove()
        // switches player 1 to player 2, or show game winner because
        // both players have finished
        if(player === "player1") {

          player = "player2";

        } else {


          if (player1misses < player2misses) {
            var winner = "Player 1 is the winner!";
            player1Score += 1
          } else if (player2misses < player1misses){
            var winner = "Player 2 is the winner";
            player2Score += 1
          } else {
            var winner= "Tie Game!"
          }

          // reset scores to 0 and clearBoard

          clearBoard();

          player = "player1"

          player1misses = 0;
          player2misses = 0;
          $("#player1_attempts").text(player1misses);
          $("#player2_attempts").text(player2misses);


          $(`#player1_score`).text(player1Score);
          $(`#player2_score`).text(player2Score);

          var playAgain = '';
          setTimeout(function(){
            playAgain = prompt(`${winner}! Would you like to play again? (Y/N)`)

          if (playAgain.toLowerCase() === "n") {
            play = false;
            alert("Well then go screw yourself!")
          }
        }, 500);
        }
      } else {
        if (player === "player1") {
          player1misses += 1;
          $("#player1_attempts").text(player1misses);
        } else {
          player2misses += 1;
          $("#player2_attempts").text(player2misses);
        }
      }
    }

    $("#reset").on("click", function(){
      location.reload();
    });
  });




  //
  // if (player1 === true) {
  //
  //   } else if (player2 === true) {
  //     $(".back").on("click", function() {
  //       $(this)
  //       .hide()
  //       .siblings()
  //       .show();
  //
  //       if ($(this).parent($(".box")).html().includes("img")) {
  //         alert("You found your friend!");
  //         clearBoard();
  //       } else {
  //         player2misses += 1;
  //         $("#player2_score").text(player2misses);
  //       }
  //     });
  //   };

  // $("#card8").html().includes("<img")
});
