# Protypal Inheritance Team Project

# Team Name: gauntlet-it-would-be-fun-they-said

## Contributors:
-[Matt Bruton](https://gtihub.com/mattbruton)-- Team Leader
-[Dan Ventura](https://github.com/danwventura)
-[Odigene Joseph](https://github.com/Odigene12)
-[Bradley Guthrie](https://github.com/guthb)


### Setup

You will need a simple web server to host this, Node.js worked well for us:
1. For Macintosh systems, at the termial promt: ``` $ npm install http-server -g ```
1. at the prompt make a directory for hosting ``` $ mkdir gauntlet
1. Change to the directory you plan to host the application ``` $ cd IDK/ ```
1. Now start your web server ```` http-server -p ```

### Description:

Time to use protypal inheritance to build a game.

Some enterprising, young, software developer decided to build a simple web-based RPG that lets a human player fight against an array of different enemies. Unfortunately, there wasn't enough time to finish the project because aliens took over the Earth and everyone was shipped off to the plutonium mines.

Your job is to finish the game.

To do so, you need a firm understanding of prototypal inheritance. Start by examining the files `player.js`, `classes.js`, and `enemies.js` to see how the prototype chains were initially set up.

The game now belongs to you, intrepid adventurer. You can change the theme completely (aliens vs. undead, or axis vs. allies), style it however you want, but you need to have:
 multiple classes, weapons, and enemies that the player can fight against.

### Requirements for the effort:

Once the player has chosen all options for class, weapon, etc., you need to have a battlefield view that fulfills the following criteria.

1. Display the initial statistics for the player and the enemy.

2. Have a button with the label "Attack".

3. Each time the attack button is clicked, the player's chosen character and the generated enemy should attack with their weapon, and once the damage is calculated, subtract that from the opponents' health.

4. As soon as either combatant reaches health of 0, disable the attack button and annouce the winner.


### Screenshot of Game Load ![Screenshot](/img/rpgstart.png)

### Screenshot of Player Class ![Screenshot](/img/rpgclass.png)

### Screenshot of Weapon Choice ![Screenshot](/img/rpgweapon.png)

### Screenshot of Battlefield ![Screenshot](/img/rpgload.png)

### Screenshot of Game End ![Screenshot](/img/rpgend.png)