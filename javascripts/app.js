/*
  Test code to generate a human player and an orc player
 */
var PlayerOne = new Gauntlet.Combatants.Human();
PlayerOne.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

var PlayerTwo = new Gauntlet.Combatants.Orc();
PlayerTwo.generateClass();
PlayerTwo.setWeapon(new BroadSword());
// console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$('#weapon-select').click(function(e) {     
  if(e.target.parentNode.classList.contains('bareHands')){       
    PlayerOne.setWeapon(new Weapon());       
    console.log(PlayerOne);       
  } else if (e.target.parentNode.classList.contains('dagger')){         
    PlayerOne.setWeapon(new Dagger());         
    console.log(PlayerOne);       
  } else if (e.target.parentNode.classList.contains('broadsword')){         
    PlayerOne.setWeapon(new BroadSword());         
    console.log(PlayerOne);       
  } else if (e.target.parentNode.classList.contains('waraxe')){         
    PlayerOne.setWeapon(new WarAxe());         
    console.log(PlayerOne);       
  }    
})

$(document).ready(function() {
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
    var moveAlong = false;

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