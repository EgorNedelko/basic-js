const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr instanceof Array) {
     throw new Error
  }
   
  let toDouble = false
  let resultArr = []  
  for (let i = 0; i < arr.length; i++) {
     switch(arr[i]) {
        case '--discard-next':
            i++
            break;
        case '--discard-prev':
            if (resultArr.length) {
               resultArr.pop()
            }
            break;
        case '--double-next':
           toDouble = true
           break;
        case '--double-prev':
           if (resultArr.length) {
              resultArr.push(arr[i-1])
           }
           break;
        default:
           if (toDouble) {
            resultArr.push(arr[i])
            resultArr.push(arr[i])
            toDouble = false
           }
           resultArr.push(arr[i])
           break;
     }
  }
  return resultArr
};
