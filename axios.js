const axios = require("axios");

async function axi() {
  await axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    console.log(res);
  });
}

module.exports = axi;
