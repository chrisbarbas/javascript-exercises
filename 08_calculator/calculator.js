const add = ((x, y) => x + y);

const subtract = ((x, y) => x - y);

const sum = ((nums) => {
  let sum = 0;
  for (item of nums) {
    sum += item;
  }
  return sum;
});

const multiply = ((nums) => {
  let x = 1;
  for (item of nums) {
    x *= item;
  }
  return x;
});

const power = ((x, y) => x ** 3);

const factorial = x => {
  if (x === 0 || x === 1) {
    return 1;
  }
  for (let i = x - 1; i >= 1; i--) {
    x *= i;
  }
  return x;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};