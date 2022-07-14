const repeatString = function (string, num) {
  let result = "";
  if (num < 0 || num == null || num == undefined) {
    return "ERROR";
  } else {
    for (let index = 0; index < num; index++) {
      result = result.concat(string);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
