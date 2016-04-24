"use strict";

var classes = require('./classes');
var spells = require('./spells');
var player = require('./player');
var weapons = require('./weapons');
var combat = require('./combat');
let $ = require("jquery");

/*
  TODO: Modularize this code with IIFE or Browserify
 */
var GuildHall = {};
/*
  Base function for a player, or enemy, class (profession)
 */
GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  };
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
GuildHall.Fighter.prototype = new GuildHall.PlayerClass();


GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
GuildHall.Warrior.prototype = new GuildHall.Fighter();


GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
GuildHall.Valkyrie.prototype = new GuildHall.Fighter();


GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
GuildHall.Berserker.prototype = new GuildHall.Fighter();


GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
GuildHall.Monk.prototype = new GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
GuildHall.Mage.prototype = new GuildHall.PlayerClass();


GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
GuildHall.Shaman.prototype = new GuildHall.Mage();


GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
GuildHall.Wizard.prototype = new GuildHall.Mage();


GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
GuildHall.Conjurer.prototype = new GuildHall.Mage();


GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
GuildHall.Sorcerer.prototype = new GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

GuildHall.Stealth = function() {
  this.name = "Stealth";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
GuildHall.Stealth.prototype = new GuildHall.PlayerClass();

GuildHall.Thief = function() {
  this.name = "Thief";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
GuildHall.Thief.prototype = new GuildHall.Stealth();

GuildHall.Ninja = function() {
  this.name = "Ninja";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
GuildHall.Ninja.prototype = new GuildHall.Stealth();

GuildHall.Assassin = function() {
  this.name = "Assassin";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
GuildHall.Assassin.prototype = new GuildHall.Stealth();

module.exports = {
  GuildHall
};
