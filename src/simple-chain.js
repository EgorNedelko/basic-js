const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push( `( ${ typeof value === 'undefined' ? '(  )' : `${value}` } )` )
    return this
  },

  removeLink(position) {
    if (isNaN(position) || position <= 0 || position > this.chain.length) {
      this.chain = []
      throw new Error
    } else {
      this.chain.splice(position - 1, 1)
      return this
    }
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let resultChain = this.chain.join(`~~`)
    this.chain = []
    return resultChain
  }
};

module.exports = chainMaker;
