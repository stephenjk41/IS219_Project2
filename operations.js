module.exports = {
  sum (...args) {
    return args.reduce((prev, cur) => {
      if (typeof (cur) !== 'number') throw new Error(`${cur} is not a number`)

      return prev + cur
    }, 0)
  },
  subtract (a, ...b) {
    if (typeof (a) !== 'number') throw new Error(`${a} is not a number`)

    return a - this.sum(...b)
  },
  divide (a, b) {
    if (typeof (a) !== 'number') throw new Error(`${a} is not a number`)
    if (typeof (b) !== 'number' || b === 0) throw new Error(`${b} is not a valid number`)

    return a / b
  },
  multiply (a, ...b) {
    if (typeof (a) !== 'number') throw new Error(`${a} is not a number`)

    return a * b.reduce((prev, cur) => {
      if (typeof (cur) !== 'number') throw new Error(`${cur} is not a number`)

      return prev * cur
    })
  },
  square (n) {
    if (typeof (n) !== 'number') throw new Error(`${n} is not a number`)

    return n ** 2
  },
  sqrt (n) {
    if (typeof (n) !== 'number' || n < 0) throw new Error(`${n} is not a valid number`)

    return Math.sqrt(n)
  }
}
