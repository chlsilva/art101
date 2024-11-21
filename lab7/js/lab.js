// index.js - lab7 functions
// Author: chloe silva
// Date: oct 28, 2024

// Constants

// Functions that take user input and sorts the letter of the name
function sortUserName() {
  var userName = window.prompt("Hi, please tell me your name so I can fix it.");
  console.log("userName =", userName);
  
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  //Join the array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

//output
document.writeln("Oh hey I fixed your name: ",
  sortUserName(), "</br>");
