const colors = require("colors/safe");
const rand10 = require("./helper");

const correctValue = rand10();
const guess = Number(process.argv[2]);

if (correctValue === guess) {
  console.log(colors.green("Congrats! 🎉"));
} else {
  console.log(colors.bgRed(`Sorry! It was actually ${correctValue}.`));
}
