const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } ) {
  let additionString = new Array(additionRepeatTimes).fill(`${addition}`).join(additionSeparator)
  return new Array(repeatTimes).fill(`${str}${additionString}`).join(separator)
};
