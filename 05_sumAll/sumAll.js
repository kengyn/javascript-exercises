const sumAll = function (first, second) {
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    return "ERROR";
  }
  if (first < 0 || second < 0) {
    return "ERROR";
  }
  if (first > second) {
    const temp = first;
    first = second;
    second = temp;
  }

  let result = 0;
  for (i = first; i <= second; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
