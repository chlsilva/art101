// index.js - Lab 6: Arrays and Objects
// Author: chloe silva
// Date: oct 22 2024

//define varables
myTransport = ["Chevy Volt", " bus", " rides from friends", " and walking."];

//create an object for my ride
myMainRide = {
  make:"Chevy",
  madel: "Volt",
  color: "red",
  year: 2013,

  age: function() {
    return 2024 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");




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
