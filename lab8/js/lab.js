// index.js - lab 8 Anon Functions and Callbacks
// Author: chloe silva
// Date: oct 31 2024


//function
function isEven(x){
  return (x % 2 == 0);
}

//testing function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
//should return [true false true true true true]
console.log("Test of eveness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
//should return [10 9 4 6.48070698... 12 100]
console.log("Squareroot of array:", result);












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
