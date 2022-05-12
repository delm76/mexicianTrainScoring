//# Starting as pseudo code.  
//# To be developed as pure javascript.  
//# This is expected to be project to learn git and github collaberation and version control, as well as to improve Javascript skills.

//# To be run from console.

//# Game Initalialization

//# Accept number as input and set as variable.
var numPlayers = prompt("How many players?", "Enter number here.");

const players = [];

if (Number.isInteger(numPlayers) === true){
//instantiate player objects should include string name, int total, array roundScore
  for (i = 0; numPlayers > 0; i++) {
  players[i] = {
    name: prompt("Enter the next player's name.", "name"),
    scoreTotal: 0,
    roundScores: [],
  }
  numPlayers --;
}
}


roundNumber = 12; 
print $roundNumber;
if (roundNumber > 0):{
  //# implement play score math;
  pass;
} else {
print finalScores;
exit 0;
}

//# TODO:

//# Expand to be a web app.

//# Add API.

//# Use this as a starting point for implementation for not pure javascript libraries such as React, jquery.

//# Later to use with frameworks including AngularJS, Angular, and NodeJS.
