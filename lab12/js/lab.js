// index.js - lab12 JConditionals
// Author: chloe silva
// Requirements: jQuery must be loaded for this script to work.
// Date: nov 12 2024


// Functions
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "$1.50 All Beef Hotdog"
  }
  else if (mod == 1) {
    return "$3.99 Chickenbake"
  }
  else if (mod == 2) {
    return "$1.99 Cheese Pizza Slice"
  }
  else if (mod == 3) {
    return "$6.99 Rotisserie Chicken Caesar Salad"
  }
}


var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>You are a " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})




