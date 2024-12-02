// index.js - lab 16: JSON and APIs
// Author: chloe silva
// Requirements: jQuery must be loaded for this script to work.
// Date: nov 29 2024

$(document).ready(function () {
    const apiKey = "LKzwgsNmBCc24namABcGYgv7v8MFAxc0PUGBltOr"; // Replace with your API key
    const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    $.ajax({
        url: endpoint,
        method: "GET",
        success: function (data) {
            console.log(JSON.stringify(data)); // Print JSON to console
            // Parse and display data
            $("#output").append(`
                <h2>${data.title}</h2>
                <p>${data.date}</p>
                <img src="${data.url}" alt="${data.title}" style="max-width:100%;"/>
                <p>${data.explanation}</p>
            `);
        },
        error: function (error) {
            console.log("Error:", error);
            $("#output").text("Failed to load the Astronomy Picture of the Day.");
        }
    });
});