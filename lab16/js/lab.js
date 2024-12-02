// index.js - lab 16: JSON and APIs
// Author: chloe silva
// Requirements: jQuery must be loaded for this script to work.
// Date: nov 29 2024

$(document).ready(function () {
  // API Endpoint
  const url = "https://xkcd.com/info.0.json";

  // AJAX Request
  $.ajax({
      url: "https://xkcd.com/info.0.json",
      type: "GET",
      dataType: "json",

      success: function (comicObj) {
          // Log data for debugging
          console.log(comicObj);

          // Build HTML output
          const comicHTML = `
              <h3>${comicObj.title}</h3>
              <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
          `;

          // Append to output div
          $("#output").html(comicHTML);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error:", textStatus, errorThrown);
          $("#output").html("<p>Failed to fetch comic.</p>");
      }
  });
});
