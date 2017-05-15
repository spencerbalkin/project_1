$(document).ready(function() {

  // Adapted from http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // variable to hold the state of the game - true = playing; false = game over
  var play = true;

  var player = "player1";

  //prompts player 1 that it is their turn in the sidebar
  function player1Overlay() {
      $("#right").append(`<div id="p1TurnOverlay"></div>`);
      $("#p1TurnOverlay").append($(`<div id="p1textInOverlay"></div>`));
      $("#p1TurnOverlay").append($(`<div id="p1ok"></div>`))
          $("#p1ok").text("OK")
          $("#p1ok").on("click", function(){
          $("#p1TurnOverlay").css("display", "none")
        });
          $("#p1textInOverlay").html("Player 1, you're up! Pick a friend and go find them!");

      //css for ok button
      $("#p1ok").css({
        "text-align": "center",
        "padding-top": "25px",
        "margin-left": "50px",
        "width": "150px",
        "height": "50px",
        "border": "#FFF 1px solid",
        "background-color": "black",
        "color": "white",
      });

      //css for text prompting player 1 it is their turn
      $("#p1textInOverlay").css({
        "font-size": "20px",
        "color": "#FFF",
        "text-align": "center",
        "text-align": "center",
        "margin-bottom": "50px"
        });

      // css for p1overlay
      $("#right").css("position", "relative");

      play = false;

      $("#p1TurnOverlay").css({
        "padding-top": "100px",
        "box-sizing": "border-box",
        "background-color": "rgba(0, 0, 0, .9)",
        "width": "100%",
        "height": "100%",
        "z-index": "10%",
        "top": "0",
        "left": "0",
        "position": "absolute",
    }); //End function
}

player1Overlay()

  //Prompts player 2 that it is their turn in the sidebar
  function player2Overlay() {
      $("#right").append(`<div id="p2TurnOverlay"></div>`);
      $("#p2TurnOverlay").append($(`<div id="p2textInOverlay"></div>`));
      $("#p2TurnOverlay").append($(`<div id="ok"></div>`))
          $("#ok").text("OK")
          $("#ok").on("click", function(){
          $("#p2TurnOverlay").css("display", "none")
        });
      $("#p2textInOverlay").html("Player 2, you're up! Pick a friend and go find them!")

      //css for ok button
      $("#ok").css({
        "text-align": "center",
        "padding-top": "25px",
        "margin-left": "50px",
        "width": "150px",
        "height": "50px",
        "border": "#FFF 1px solid",
        "background-color": "black",
        "color": "white",
      });

      // css for p2overlay
      $("#right").css("position", "relative");

      $("#p2TurnOverlay").css ({
        "padding-top": "100px",
        "box-sizing": "border-box",
        "background-color": "rgba(0, 0, 0, .9)",
        "width": "100%",
        "height": "100%",
        "z-index": "10%",
        "top": "0",
        "left": "0",
        "position": "absolute",
    }); //End function

    //css for text prompting player 2 it is their turn
    $("#p2textInOverlay").css ({
      "font-size": "20px",
      "color": "white",
      "text-align": "center",
      "text-align": "center",
      "margin-bottom": "50px"
      });

  }

  //when you click a character they hide somewhere random in the grid
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

      play = true;
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
        play = false;
        player2Overlay();
        //ADD line that puts overlay over box that prompts player 2 to go. After they press OK then it removes.

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
});
