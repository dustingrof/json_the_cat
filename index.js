const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

const myCallback = (error, desc) => {
  if (error) {
    // Print the error if one occurred
    console.log("Error:", error);
    return;
  }
  console.log("Description:", desc);
  // console.log("Data:", data);
};

fetchBreedDescription(breedName, myCallback);

  
