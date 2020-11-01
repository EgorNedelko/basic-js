const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'

  // if (!date instanceof Date) throw Error
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error

  const month = date.getMonth()

  if (month == 11 || month == 01 || month == 0) return 'winter'
  if (month == 02 || month == 03 || month == 04) return 'spring'
  if (month == 05 || month == 06 || month == 07) return 'summer'
  if (month == 08 || month == 09 || month == 10) return 'fall'
};
