"use strict";

let app = require('./app');
let classes = require('./classes');
let spells = require('./spells');
let player = require('./player');
let weapons = require('./weapons');
// let combat = require('./combat');


// $(document).ready(function() {
  // Function to check p1 and p2 current health
  function checkHealth(){
    // Checking to see if P1 is dead
    if (player.PlayerOne.health <= 0) {
    // loseGame();
    
    }
    // Checking to see if P2 is dead
    else if (player.PlayerTwo.health <= 0){
    // winGame();
    }
    else {
    // Call to function that calculate attack damages
    pTwoAttack();
    console.log("p1", player.PlayerOne );
    console.log("p2", player.PlayerTwo );

    }
  }

  function pTwoAttack(){
    p1RemHealth = player.PlayerOne.health -= player.PlayerTwo.weapon.damage;
    pOneAttack(p1RemHealth);
  } 

  
  function pOneAttack(p1RemHealth){
    p2RemHealth = player.PlayerTwo.health -= player.PlayerOne.weapon.damage;

    atkStrings(p1RemHealth, p2RemHealth);
  } 

  function atkStrings(p1RemHealth, p2RemHealth){
    p2AtkString = `${PlayerTwo.playerName} attacks with ${PlayerTwo.weapon} for ${PlayerTwo.weapon.damage} damage!`;
    p1AtkString = `${PlayerOne.name} attacks with ${PlayerOne.weapon} for ${PlayerOne.weapon.damage} damage!`;
    

    atkDisplay(p2AtkString, p1AtkString);
  }

module.exports = {
    atkStrings,
    pOneAttack,
    pTwoAttack,
    checkHealth
};