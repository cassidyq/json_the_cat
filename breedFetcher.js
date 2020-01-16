const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
  request(URL, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);

      if (data.length === 0) {
        callback("Breed was not found.", null);
        return;
      } else {
        callback(null, data[0]["description"]);
      }
    } else {
      callback(error, null);
    }
  });
};

module.exports = fetchBreedDescription;
