const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strArr = []
  let addArr = []

  if (options.separator == undefined) options.separator = '+'
  if (options.additionSeparator == undefined) options.additionSeparator = '|'

  for (let i = 0; i < options.repeatTimes; i++) {
    strArr.push(str)
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addArr.push(options.addition)
  }

  const addendum = options.additionSeparator + addArr.join(options.additionSeparator)

  for (item in strArr) {
    item += addendum
  }

  return strArr.join(options.separator)
};
  