const palindromes = function (string) {
  let newString = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase()
    .split("");
  let reverseString = newString.slice().reverse();
  let superString = reverseString.toString();
  let ss2String = newString.toString();
  if (ss2String == superString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
