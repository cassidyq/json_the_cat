const request = require("request");
const name = process.argv.slice(2)[0];

const URL = `https://api.thecatapi.com/v1/breeds/search?name=${name}`;

const breedFetcher = () => {
  request(URL, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);

      if (data.length === 0) {
        console.log("Error requesting data. Breed was not found.");
        return;
      } else {
        console.log(data[0]["description"]);
      }
    } else {
      console.log("Error requesting data. Check URL.");
    }
  });
};

breedFetcher();
