const fs = require("fs");
const path = require("path");

fs.mkdirSync("Folder");

function createNum() {
  for (let i = 1; i <= 3; i++) {
    const pathFolder = path.join("./folder", `text${i}.txt`);
    let count = 5;
    const randomNum = [];
    while (count !== 0) {
      randomNum.push(...Math.floor(Math.random() * 9).toString());
      count--;
    }
    setTimeout(() => {
      fs.writeFileSync(pathFolder, randomNum.toString(), "utf8");
    }, 400);
  }
}

module.exports = createNum;
