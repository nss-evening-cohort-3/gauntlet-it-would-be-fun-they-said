// var originalGauntlet()

var Gauntlet = (function(originalGauntlet) {

// var originalGauntlet = originalGauntlet || {};
// originalGauntlet.Combatants = {};
originalGauntlet.WeaponRack = {};

Gauntlet.WeaponRack.Weapon = function () {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  this.toString = function() {
    return this.name;
  }
};
console.log(Gauntlet.WeaponRack.Weapon);

Gauntlet.WeaponRack.Dagger =function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.WeaponRack.Dagger.prototype = new Gauntlet.WeaponRack.Weapon();
console.log(Gauntlet.WeaponRack.Dagger);

Gauntlet.WeaponRack.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.WeaponRack.BroadSword.prototype = new Gauntlet.WeaponRack.Weapon();
console.log(Gauntlet.WeaponRack.BroadSword);

Gauntlet.WeaponRack.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.WeaponRack.WarAxe.prototype = new Gauntlet.WeaponRack.Weapon();
console.log(Gauntlet.WeaponRack.WarAxe);

return originalGauntlet;
} (Gauntlet || {}));