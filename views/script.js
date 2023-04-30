const { Console } = require("console");

// Add an event listener to the button
Console.console.log("Hello World");
document.getElementById("load-button").addEventListener("click", function() {
    // Make an AJAX request to fetch the new content
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/content", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Update the content with the new data
        document.getElementById("content").innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });