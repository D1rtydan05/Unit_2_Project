"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Daniel Garcia
   Date:   2-6-20
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/


// the report variable
var reportHTML = "<h1>" +raceTitle+ "</h1>"

// unfinishes loop :(
for(var i = 0; i < race.length; i++){
var totalVotes = 0;
reportHTML += "<table>"
reportHTML += "<caption>" + race[i] + "</caption>"
reportHTML += "<tr><th>Canidate</th><th>Votes</th></tr>"
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

