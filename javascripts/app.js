"use strict";

var classes = require('./classes');
var spells = require('./spells');
var player = require('./player');
var weapons = require('./weapons');
var combat = require('./combat');
var $ = require("jquery");

/*
  Test code to generate a human player and an orc player
 */




/*
  Test code to generate a spell
 */
// var spell = new SpellBook.Sphere();

$(".className").click(function(e) {
       if (e.target.closest('div').classList.contains("className")) {
     // if (e.target.parentNode.classList.contains("className") || e.target.closest('className')) {
       PlayerOne.class = this.querySelector('.btn__text').innerHTML;
       console.log(this.querySelector('.btn__text').innerHTML);
    $('#battleground').show();
     }
   });
 

$('#weapon-select').click(function(e) {     
  if(e.target.parentNode.classList.contains('barehands') || e.target.closest(".barehands")){       
    PlayerOne.setWeapon(new Weapon());       
    console.log(PlayerOne);       
  } else if (e.target.parentNode.classList.contains('dagger') || e.target.closest(".dagger")){  
    PlayerOne.setWeapon(new Dagger());         
    console.log(PlayerOne);       
  } else if (e.target.parentNode.classList.contains('broadsword') || e.target.closest(".broadsword")){PlayerOne.setWeapon(new BroadSword());         
    console.log(PlayerOne);       
  } else if (e.target.parentNode.classList.contains('waraxe') || e.target.closest(".waraxe")){      
    PlayerOne.setWeapon(new WarAxe());         
    console.log(PlayerOne);       
  }    
});

  // Use if else statement to either call winGame, loseGame function, or calculate damage
  




  // Grab value from input for Player Name on click of anchor element "Select Class"



  $('#setName').click(function(){
    PlayerOne.name = $('#player-name').val();
});

  $("#class-select").click(function(e) {
    if (e.target.parentNode.classList.contains("className")) {
      PlayerOne.class = e.target.innerHTML;
    }
  });
// var app = require('./app');

  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();
  $("#readyToRumble").hide();
  $("#battleground").hide();

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
combat.checkHealth();
// });

module.exports = {
  
};