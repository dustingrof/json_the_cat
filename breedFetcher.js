// const args = process.argv.slice(2, process.argv.length);
// const fs = require("fs");
const request = require("request");
const baseURL = "https://api.thecatapi.com/v1/breeds/search?q=";

// console.log("baseURL", baseURL);
// console.log("args[0]", args[0]);
const fetchBreedDescription = function(breedName, callback) {
  request(baseURL + breedName, (error, response, body) => {
    //removed response from the callback cause don't think I need it....
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Please enter a valid breed");
      // console.log("Please enter a valid breed");
      return;
    }
    // console.log("body", typeof body);
    const catDescription = data[0].description;
    callback(null, catDescription);
  });
};

module.exports = { fetchBreedDescription };
