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