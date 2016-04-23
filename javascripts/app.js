/*
  Test code to generate a human player and an orc player
 */
var PlayerOne = new Gauntlet.Combatants.Human();

PlayerOne.setWeapon(new WarAxe());

PlayerOne.generateClass();  // This will be used for "Surprise me" option


var PlayerTwo = new Gauntlet.Combatants.Orc();
PlayerTwo.generateClass();
PlayerTwo.setWeapon(new BroadSword());




/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();

$(".className").click(function(e) {
       if (e.target.closest('div').classList.contains("className")) {
     // if (e.target.parentNode.classList.contains("className") || e.target.closest('className')) {
       PlayerOne.class = this.querySelector('.btn__text').innerHTML;
       console.log(this.querySelector('.btn__text').innerHTML);
    $('#battleground').show();
     }
   })
 

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
})

// $(document).ready(function() {
  // Function to check p1 and p2 current health
  function checkHealth(){
    // Checking to see if P1 is dead
    if (PlayerOne.health <= 0) {
    // loseGame();
    
    }
    // Checking to see if P2 is dead
    else if (PlayerTwo.health <= 0){
    // winGame();
    }
    else {
    // Call to function that calculate attack damages
    pTwoAttack();

    }
  }


  function pTwoAttack(){
    p1RemHealth = PlayerOne.health -= PlayerTwo.weapon.damage;
    pOneAttack(p1RemHealth);

    playerOne.health = p1RemHealth;
  } 

  
  function pOneAttack(p1RemHealth){
    p2RemHealth = PlayerTwo.health -= PlayerOne.weapon.damage;

    atkStrings(p1RemHealth, p2RemHealth);
  } 

  function atkStrings(p1RemHealth, p2RemHealth){
    p2AtkString = `${PlayerTwo.playerName} attacks with ${PlayerTwo.weapon} for ${PlayerTwo.weapon.damage} damage!`
    p1AtkString = `${PlayerOne.name} attacks with ${PlayerOne.weapon} for ${PlayerOne.weapon.damage} damage!`
    

    atkDisplay(p2AtkString, p1AtkString);
  }

  function atkDisplay(p2AtkString, p1AtkString){
    p1Div = $('#playerOne')
    p2Div = $('#playerTwo')
    
    p1Div.html(p1AtkString);
    p2Div.html(p2AtkString);
   
    

  }







  // Use if else statement to either call winGame, loseGame function, or calculate damage
  




  // Grab value from input for Player Name on click of anchor element "Select Class"



  $('#setName').click(function(){
    PlayerOne.name = $('#player-name').val();
});

  $("#class-select").click(function(e) {
    if (e.target.parentNode.classList.contains("className")) {
      PlayerOne.class = e.target.innerHTML;
    }
  })


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
checkHealth();
// });