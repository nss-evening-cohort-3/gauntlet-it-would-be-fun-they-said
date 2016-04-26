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
