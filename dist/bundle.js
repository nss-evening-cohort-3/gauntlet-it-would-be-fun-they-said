(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
  Test code to generate a human player and an orc player
 */
var PlayerOne = new Gauntlet.Combatants.Human();

PlayerOne.setWeapon(new Gauntlet.WeaponRack.Dagger());

PlayerOne.generateClass();  // This will be used for "Surprise me" option


var PlayerTwo = new Gauntlet.Combatants.Orc();
PlayerTwo.generateClass();
PlayerTwo.setWeapon(new Gauntlet.WeaponRack.BroadSword());




/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();

$(".className").click(function(e) {
       if (e.target.closest('div').classList.contains("className")) {
     // if (e.target.parentNode.classList.contains("className") || e.target.closest('className')) {
       PlayerOne.class = this.querySelector('.btn__text').innerHTML;
       console.log(this.querySelector('.btn__text').innerHTML);
     }
   })


$('#weapon-select').click(function(e) {
  if (e.target.parentNode.classList.contains("hands") || e.target.parentNode.classList.contains("one")) {
    PlayerOne.setWeapon(new Gauntlet.WeaponRack.Weapon());
    console.log(PlayerOne);
  } else if (e.target.parentNode.classList.contains("dagger") || e.target.parentNode.classList.contains("two")){
    PlayerOne.setWeapon(new Gauntlet.WeaponRack.Dagger());
    console.log(PlayerOne);

  } else if (e.target.parentNode.classList.contains("sword") || e.target.parentNode.classList.contains("three")){
    PlayerOne.setWeapon(new Gauntlet.WeaponRack.BroadSword());

    console.log(PlayerOne);
  } else if (e.target.parentNode.classList.contains("axe") || e.target.parentNode.classList.contains("four")){
    PlayerOne.setWeapon(new Gauntlet.WeaponRack.WarAxe());
    console.log(PlayerOne);
  }
  $("#readyToRumble").show();
})
  
  // // Event listener on Attack Button
  // $('#attackButton').click(function(){

  //   checkHealth();
  // });



// Function to check p1 and p2 current health
function checkHealth(){
  // Checking to see if P1 is dead
  pTwoAttack();
  if (PlayerOne.health <= 0) {
  loseGame();


  }
  // Checking to see if P2 is dead
  else if (PlayerTwo.health <= 0){
  winGame();
  }
  else {
  console.log("p1", PlayerOne );
  console.log("p2", PlayerTwo );
  }

}



// Use if else statement to either call winGame, loseGame function, or calculate damage
function pTwoAttack(){
  p1RemHealth = PlayerOne.health -= PlayerTwo.weapon.damage;
  pOneAttack(p1RemHealth);
}

function pOneAttack(p1RemHealth){
  p2RemHealth = PlayerTwo.health -= PlayerOne.weapon.damage;

  atkStrings(p1RemHealth, p2RemHealth);
}

function atkStrings(p1RemHealth, p2RemHealth){
  p2AtkString = `${PlayerTwo.name} attacks with ${PlayerTwo.weapon} for ${PlayerTwo.weapon.damage} damage! and Health is ${p2RemHealth}`
  p1AtkString = `${PlayerOne.name} attacks with ${PlayerOne.weapon} for ${PlayerOne.weapon.damage} damage! and Health is ${p1RemHealth}`
  atkDisplay(p2AtkString, p1AtkString);
}

function atkDisplay(p2AtkString, p1AtkString){
  p1Div = $("#playerOne");
  p2Div = $("#playerTwo");
  p1Div.html(p1AtkString);
  p2Div.html(p2AtkString);
}


loseGame = function(){
  $(".attackButton").hide();
  p2AtkLoseString = `${PlayerTwo.name} has Defeated ${PlayerOne.name}`;
  p1AtkLoseString = `${""}`;
  atkDisplay(p2AtkLoseString, p1AtkLoseString);
  //alert(`${PlayerTwo.playerName} Wins the Game"`);
}


$(document).ready(function() {

winGame = function (){
 $(".attackButton").hide();
 p2AtkWinString = `${""}`;
 p1AtkWinString = `${PlayerOne.name} has Defeated ${PlayerTwo.playerName}`;
 atkDisplay(p2AtkWinString, p1AtkWinString);
 //alert(`${PlayerOne.name} Wins the Game`);
}

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
    but hides the enter battleground button and battlefield
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
    console.log("next", nextCard );
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        console.log("cardClass", moveAlong );
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        console.log("cardWeapon", moveAlong );
        break;
      case "card--battleground":
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


  $("#readyToRumble").click(function() {
    $("#readyToRumble").hide();
    $("#weapon-select").hide();
    $("#battleground").show();
  });

  $("#attackButton").click(function() {
    checkHealth();
  })










},{}],2:[function(require,module,exports){
/*
  TODO: Modularize this code with IIFE or Browserify
 */
 var Gauntlet = (function(originalGauntlet) {
// var originalGauntlet = originalGauntlet || {};
originalGauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
originalGauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
originalGauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
originalGauntlet.GuildHall.Fighter.prototype = new originalGauntlet.GuildHall.PlayerClass();


originalGauntlet.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
originalGauntlet.GuildHall.Warrior.prototype = new originalGauntlet.GuildHall.Fighter();


originalGauntlet.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
originalGauntlet.GuildHall.Valkyrie.prototype = new originalGauntlet.GuildHall.Fighter();


originalGauntlet.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
originalGauntlet.GuildHall.Berserker.prototype = new originalGauntlet.GuildHall.Fighter();


originalGauntlet.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
originalGauntlet.GuildHall.Monk.prototype = new originalGauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
originalGauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
originalGauntlet.GuildHall.Mage.prototype = new originalGauntlet.GuildHall.PlayerClass();


originalGauntlet.GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
originalGauntlet.GuildHall.Shaman.prototype = new originalGauntlet.GuildHall.Mage();


originalGauntlet.GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
originalGauntlet.GuildHall.Wizard.prototype = new originalGauntlet.GuildHall.Mage();


originalGauntlet.GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
originalGauntlet.GuildHall.Conjurer.prototype = new originalGauntlet.GuildHall.Mage();


originalGauntlet.GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
originalGauntlet.GuildHall.Sorcerer.prototype = new originalGauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

originalGauntlet.GuildHall.Stealth = function() {
  this.name = "Stealth";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
originalGauntlet.GuildHall.Stealth.prototype = new originalGauntlet.GuildHall.PlayerClass();

originalGauntlet.GuildHall.Thief = function() {
  this.name = "Thief";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
originalGauntlet.GuildHall.Thief.prototype = new originalGauntlet.GuildHall.Stealth();

originalGauntlet.GuildHall.Ninja = function() {
  this.name = "Ninja";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
originalGauntlet.GuildHall.Ninja.prototype = new originalGauntlet.GuildHall.Stealth();

originalGauntlet.GuildHall.Assassin = function() {
  this.name = "Assassin";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
originalGauntlet.GuildHall.Assassin.prototype = new originalGauntlet.GuildHall.Stealth();

return originalGauntlet;
} (Gauntlet || {}));

},{}],3:[function(require,module,exports){
Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.name = "Gobbledeegook"
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();


},{}],4:[function(require,module,exports){

var app = require('./app');
var classes = require('./classes');
var enemies = require('./enemies');
var spells = require('./spells');
var player = require('./player');
var weapons = require('./weapons');


},{"./app":1,"./classes":2,"./enemies":3,"./player":5,"./spells":6,"./weapons":7}],5:[function(require,module,exports){
/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      // (this.class.magical) ? "Able to cast " :
      " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};

Gauntlet.Combatants.Player.prototype.setClass = function(newClass) {
  this.class = new Gauntlet.GuildHall[newClass];
};



Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a
  constructor function.
 */
Gauntlet.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Wizard", "Shaman", "Conjurer", "Sorcerer", "Thief", "Ninja", "Assassin"];
};
Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();


/*
  Define the base properties for a monster in a
  constructor function.
 */
Gauntlet.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();


},{}],6:[function(require,module,exports){
/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();

},{}],7:[function(require,module,exports){
// var originalGauntlet()

var Gauntlet = (function(originalGauntlet) {

// var originalGauntlet = originalGauntlet || {};
// originalGauntlet.Combatants = {};
originalGauntlet.WeaponRack = {};

originalGauntlet.WeaponRack.Weapon = function () {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  this.toString = function() {
    return this.name;
  }
};

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};
console.log(originalGauntlet.WeaponRack.Weapon);

originalGauntlet.WeaponRack.Dagger =function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
originalGauntlet.WeaponRack.Dagger.prototype = new originalGauntlet.WeaponRack.Weapon();
console.log(originalGauntlet.WeaponRack.Dagger);

originalGauntlet.WeaponRack.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
originalGauntlet.WeaponRack.BroadSword.prototype = new originalGauntlet.WeaponRack.Weapon();
console.log(originalGauntlet.WeaponRack.BroadSword);

originalGauntlet.WeaponRack.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
originalGauntlet.WeaponRack.WarAxe.prototype = new originalGauntlet.WeaponRack.Weapon();
console.log(originalGauntlet.WeaponRack.WarAxe);

return originalGauntlet;
} (Gauntlet || {}));
},{}]},{},[4])


//# sourceMappingURL=bundle.js.map
