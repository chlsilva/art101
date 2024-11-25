// index.js - lab 15: AJAX
// Author: chloe silva
// Requirements: jQuery must be loaded for this script to work.
// Date: nov 25 2024


//functions
$(document).ready(function () {

//wait for button to press
  $("#activate").click(function () {
      // AJAX request to fetch data from the API
      $.ajax({

      //api url
          url: "https://api.chucknorris.io/jokes/random",

      //type
          type: "GET",
          dataType: "json",
          success: function (data) {
              // Display the joke in the output div
              $("#output").html(`<p>${data.value}</p>`);
              console.log(data); // For debugging
          },
// print on console error
          error: function (jqXHR, textStatus, errorThrown) {
              $("#output").html("<p>That didnt work :( </p>");
              console.error("Error:", textStatus, errorThrown);
          }
      });
  });
});