const removeFromArray = function (array, ...num) {
  let newArray = [];
  array.forEach((target) => {
    if (!num.includes(target)) {
      newArray.push(target);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
