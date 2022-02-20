const colors = require("colors/safe");
const rand10 = require("./helper");

for (let i = 0; i < 10; i++) {
  const str = `Random number: ${rand10()}`;
  console.log(colors.rainbow(str));
}
