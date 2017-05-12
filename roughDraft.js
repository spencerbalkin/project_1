document.addEventListener("DOMContentLoaded", function() {

// useful variables
var $box = $(".box");
var $row = $(".row");
var $grid = $("#grid")
var $addPic = $("#addPic")
var $sidebar = $("#right")
var $sidebarHeader = $("#sidebarHeader")
var $backOfCards = $(".back")

//characters
var $cheech = $("#cheech")
var $spencer = $("#spencer")
var $troy = $("#troy")
var $mark = $("#mark")

//cardIds
var $card1 = $("#card1");
var $card1Back = $("#card1Back");

var $card2 = $("#card2");
var $card3 = $("#card3");
var $card4 = $("#card4");
var $card5 = $("#card5");
var $card6 = $("#card6");
var $card7 = $("#card7");
var $card8 = $("#card8");
var $card9 = $("#card9");


//got this from stackoverflow
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
}


for (var i = 0; i < $box.length; i++) {
  var $tryThis = shuffle($box)
  $grid.append($tryThis)
}

$cheech.on("click", function(){
  $addPic.append($cheech);
  $sidebarHeader.css("display", "none")
  $spencer.css("display", "none");
  $troy.css("display", "none")
  $mark.css("display", "none")
});

$spencer.on("click", function(){
  $addPic.append($spencer)
  $cheech.css("display", "none");
  $sidebarHeader.css("display", "none")
  $cheech.css("display", "none");
  $troy.css("display", "none")
  $mark.css("display", "none")
});

$mark.on("click", function(){
  $addPic.append($mark)
  $sidebarHeader.css("display", "none")
  $spencer.css("display", "none");
  $troy.css("display", "none")
  $cheech.css("display", "none")
});

$troy.on("click", function(){
  $addPic.append($troy)
  $sidebarHeader.css("display", "none")
  $spencer.css("display", "none");
  $cheech.css("display", "none")
  $mark.css("display", "none")
});

$card1Back.on("click", function() {
  $(this).css("display", "none")
  $box.css("display", "block")
});


});
