"use strict";

var classes = require('./classes');
var spells = require('./spells');
var player = require('./player');
var weapons = require('./weapons');
var combat = require('./combat');
var $ = require("jquery");

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */

var Combatants = {};

Combatants.Orc = function() {
  this.health = this.health + 20;
  this.playerName = "Gobbledeegook";
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new classes.GuildHall[randomClass]();
    return this.class;
  };
};

Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
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

Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};



Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new classes.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */
Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Wizard", "Shaman", "Conjurer", "Sorcerer", "Thief", "Ninja", "Assassin"];
};
Combatants.Human.prototype = new Combatants.Player();


/*
  Define the base properties for a monster in a 
  constructor function.
 */
Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Combatants.Monster.prototype = new Combatants.Player();
Combatants.Orc.prototype = new Combatants.Monster();

var PlayerOne = new Combatants.Human();

// PlayerOne.setWeapon(new weapons.WeaponRack.WarAxe());

// PlayerOne.generateClass();  // This will be used for "Surprise me" option


var PlayerTwo = new Combatants.Orc();
// PlayerTwo.generateClass();
PlayerTwo.setWeapon(new weapons.WeaponRack.BroadSword());

module.exports = {
  Combatants,
  PlayerOne,
  PlayerTwo
};