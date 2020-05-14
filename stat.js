const ops = require('./operations')
const rand = require('./random')

module.exports = {
  sample (arr, n) {
    return rand.getItems(arr, n)
  },
  sysSample (arr, n) {
    const res = []
    const set = new Set()

    if (n > arr.length) throw new Error("Can't sample more than the population")
    if (n <= 0) throw new Error(`${n} is not a number`)

    const offset = Math.floor(arr.length / n)

    for (let i = offset; res.length !== n; i = (i + offset) % arr.length) {
      if (set.has(i)) {
        i++
        continue
      }

      res.push(arr[i])
      set.add(i)
    }

    return res
  },
  mean (arr) {
    return ops.sum(...arr) / arr.length
  },
  median (arr) {
    const mid = Math.floor(arr.length / 2)
    const nums = [...arr].sort((a, b) => a - b)
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
  },
  mode (arr) {
    const res = []

    const map = arr.reduce(function (map, item) {
      if (!(item in map)) map[item] = 0
      map[item]++
      return map
    }, {})

    const max = Math.max.apply(null, Object.values(map))
    Object.keys(map).forEach((v) => {
      if (map[v] === max) res.push(Number(v))
    })

    return res
  }
}
