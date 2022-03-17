const args = process.argv.slice(2, process.argv.length);
const fs = require("fs");
const request = require("request");
const baseURL = "https://api.thecatapi.com/v1/breeds/search?q=";

// console.log("baseURL", baseURL);
// console.log("args[0]", args[0]);

request(baseURL + args[0], (error, response, body) => {
  if (error) {
    // Print the error if one occurred
    console.log("Error:", error.message);
    return;
  }
  // Checking whether the body is valid
  if (!body) {
    console.log("The response is undefined.");
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Please enter a valid breed");
    return;
  }
  console.log("Description:", data[0].description);
});
