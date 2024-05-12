const fs = require("fs");
const path = require("path");

function readingFile() {
  for (let i = 1; i <= 3; i++) {
    const pathF = path.join("./folder", `text${i}.txt`);
    const data = fs.readFileSync(pathF, "utf8");
    console.log(data);
    let nums = data.split(",").map((num) => parseInt(num));
    let sum = nums.reduce((cur, num) => cur + num, 0);
    let summaa = sum / nums.length;
    console.log(summaa);
    console.log("");
  }
}

module.exports = readingFile;
