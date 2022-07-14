const reverseString = function (string) {
  let newString = "";
  for (i = 0; i < string.length; i++) {
    newString += string[string.length - 1 - i];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
