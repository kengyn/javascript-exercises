const ftoc = function (temp) {
  let celcius = (temp - 32) * (5 / 9);
  if (celcius % 1 !== 0) {
    return Math.round(celcius * 10) / 10;
  } else {
    return celcius;
  }
};

const ctof = function (temp) {
  let far = temp * (9 / 5) + 32;
  if (far % 1 !== 0) {
    return Math.round(far * 10) / 10;
  } else {
    return far;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
