const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let nestedDepth = 1

    for (let i = 0; i < arr.length; i++) {
      let flatDepth = 1
      if (Array.isArray(arr[i])) {
        flatDepth += this.calculateDepth(arr[i])
        nestedDepth = Math.max(nestedDepth, flatDepth)
      }
    }
    return nestedDepth
  }
}