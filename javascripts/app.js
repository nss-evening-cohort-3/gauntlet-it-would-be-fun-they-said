/*
  Test code to generate a human player and an orc player
 */
var PlayerOne = new Gauntlet.Combatants.Human();
PlayerOne.setWeapon(new WarAxe());
PlayerOne.generateClass();  // This will be used for "Surprise me" option
console.log("p1", PlayerOne.toString());

var PlayerTwo = new Gauntlet.Combatants.Orc();
PlayerTwo.generateClass();
PlayerTwo.setWeapon(new BroadSword());
console.log("p2", PlayerTwo.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  // Grab value from input for Player Name on click of anchor element "Select Class"
  $('#setName').click(function(){
    PlayerOne.name = $('#player-name').val();
});


  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    // console.log("next", nextCard );
    var moveAlong = null;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});