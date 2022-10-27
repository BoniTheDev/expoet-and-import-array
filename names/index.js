const namesArray = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");

const getPeopleInCity = (namesArray) => {
  return getFirstName(namesArray);
};

module.exports = getPeopleInCity;
