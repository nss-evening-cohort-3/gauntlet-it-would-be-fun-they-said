"use strict";

var classes = require('./classes');
var spells = require('./spells');
var player = require('./player');
var weapons = require('./weapons');
var combat = require('./combat');
var $ = require("jquery");

var WeaponRack = {};

WeaponRack.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};

WeaponRack.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
WeaponRack.Dagger.prototype = new WeaponRack.Weapon();

WeaponRack.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
WeaponRack.BroadSword.prototype = new WeaponRack.Weapon();

WeaponRack.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};

WeaponRack.WarAxe.prototype = new WeaponRack.Weapon();

module.exports = {
  WeaponRack
};
