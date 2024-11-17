// index.js - lab 13: Loops
// Author: chloe silva
// Requirements: jQuery must be loaded for this script to work.
// Date: nov 16 2024



// Function to run the dynamic FizzBuzz logic
function dynamicFizzBuzz() {
  // Clear any previous output
  $("#output").html("");

  // Get the maximum number from user input
  const max = parseInt($("#max").val());

  // Initialize an array to store the factors and their outputs
  let factors = [];
  for (let i = 0; i < 4; i++) {
      const factor = parseInt($(`#num${i}`).val());
      const text = $(`#text${i}`).val();
      if (!isNaN(factor) && text) {
          factors.push({ factor, text });
      }
  }

  // Check if valid input is provided
  if (isNaN(max) || factors.length === 0) {
      $("#output").html("<p>Please provide valid input for maximum number and at least one factor!</p>");
      return;
  }

  // Build the output
  let oneLongString = "";
  for (let num = 1; num <= max; num++) {
      let output = "";

      // Check each factor
      factors.forEach((item) => {
          if (num % item.factor === 0) {
              output += item.text;
          }
      });

      // If no match, use the number itself
      if (output === "") output = num;

      // Add the output to the string
      oneLongString += output + "<br>";
  }

  // Display the result
  $("#output").html(oneLongString);
}

// Attach event listener to the "Run" button
$(document).ready(function () {
  $("#submit").click(dynamicFizzBuzz);
});





////////////////////////////////////////////////////////////////
// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
