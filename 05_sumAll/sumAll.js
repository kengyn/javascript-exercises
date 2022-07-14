const sumAll = function (first, second) {
  let result = 0;
  if (
    first < 0 ||
    second < 0 ||
    typeof second == "string" ||
    Array.isArray(second)
  ) {
    return "ERROR";
  } else if (first > second) {
    for (i = second; i <= first; i++) {
      result += i;
    }
  } else if (second > first) {
    for (i = first; i <= second; i++) {
      result += i;
    }
  } else {
    ("ERROR");
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
