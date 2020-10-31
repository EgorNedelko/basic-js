const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = []
  if (!Array.isArray(members)) return false
  
  for (let i = 0; i < members.length; i++) {

    if (typeof members[i] == 'string') {
      result.push((members[i].trim().substring(0,1).toLowerCase()))
    }
  }
  return result.sort().join('').trim().toUpperCase()
}
