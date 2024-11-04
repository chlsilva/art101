// index.js - pThis simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
// Author: chloe silva
// Date: nov 04 2024

// add button to challenge, problem, reflection, and results
$("#challenge").append("<button id='button-challenge'>Make Challenge</button>");
$("#problem").append("<button id='button-problem'>Make Problem</button>");
$("#reflection").append("<button id='button-reflection'>Make Reflection</button>");
$("#results").append("<button id='button-results'>Make Results</button>");

// add a click listener to the challenge
$("#button-challenge").click(function() {
  $("#challenge").toggleClass("special");
});

//""problem
$("#button-problem").click(function() {
  $("#problem").toggleClass("special");
});

//""reflection
$("#button-reflection").click(function() {
  $("#reflection").toggleClass("special");
});

//""results
$("#button-results").click(function() {
  $("#results").toggleClass("special");
});
