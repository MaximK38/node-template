const fetch = require("node-fetch");

function fetchGet() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      posts.slice(0, 10).map((item) => {
        const a = item.body.split(" ").slice(0, 20).join(" ");
        console.log(" ");
        console.log(`${a}`);
      });
    });
}

module.exports = fetchGet;
