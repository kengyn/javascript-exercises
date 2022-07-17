const add = function (num, ber) {
  return num + ber;
};

const subtract = function (num, ber) {
  return num - ber;
};

const sum = function (number) {
  return number.reduce((total, num) => total + num, 0);
};

const multiply = function (number) {
  return number.reduce((total, num) => total * num, 1);
};

const power = function (num, exp) {
  return Math.pow(num, exp);
};

const factorial = function (number) {
  let result = number;
  if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
