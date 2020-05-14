const ops = require('./operations')

module.exports = class {
  constructor () {
    this.result = NaN
  }

  add (...args) {
    this.result = ops.sum(...args)
    return this.result
  }

  subtract (a, ...b) {
    this.result = ops.subtract(a, ...b)
    return this.result
  }

  divide (a, b) {
    this.result = ops.divide(a, b)
    return this.result
  }

  multiply (a, ...b) {
    this.result = ops.multiply(a, ...b)
    return this.result
  }

  square (n) {
    this.result = ops.square(n)
    return this.result
  }

  sqrt (n) {
    this.result = ops.sqrt(n)
    return this.result
  }
}
