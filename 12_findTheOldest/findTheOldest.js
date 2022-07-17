const findTheOldest = function (people) {
  people.forEach((person) => {
    if (!person.hasOwnProperty("yearOfDeath")) {
      person.yearOfDeath = 2022;
    }
  });
  return people.sort(
    (a, b) => b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth)
  )[0];
};

// Do not edit below this line
module.exports = findTheOldest;
