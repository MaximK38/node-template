const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const create = rl.question("Введите данные: ", (answer) => {
  fs.writeFile("file.txt", answer, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Файл создан:", answer);
    }
  });
  rl.close();
});

module.exports = create;
