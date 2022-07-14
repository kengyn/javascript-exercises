const ftoc = function (temp) {
  return Math.round((temp - 32) * (5 / 9) * 10) / 10;
  // if (celcius % 1 !== 0) {
  //   return ;
  // } else {
  //   return celcius;
  // }
};

const ctof = function (temp) {
  return Math.round((temp * (9 / 5) + 32) * 10) / 10;
  // let far = ;
  // if (far % 1 !== 0) {
  //   ;
  // } else {
  //   return far;
  // }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
