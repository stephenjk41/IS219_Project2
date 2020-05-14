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
  },
  variance (arr) {
    let mean_calc = this.mean(arr);
    return this.mean(arr.map(function(num) {
      return ops.square(num - mean_calc)
    }));
  },
  standard_dev (arr) {
    let variance = this.variance(arr);
    return ops.sqrt(variance);
  },
  quartile (arr,q ) {
    arr = this.arr_sort(arr);
    var pos = ((arr.length) - 1) * q;
    var base = Math.floor(pos);
    var rest = pos - base;
    if( (arr[base+1 !== undefined]) ) {
      return arr[base] + rest * (arr[base+1] - arr[base]);
    } else {
      return arr[base]
    }
  },
  lower_quart(arr) {
    return this.quartile(arr, 0.25);
  },
  upper_quart(arr) {
    return this.quartile(arr, 0.75);
  },
  arr_sort (arr) {
    return arr.sort(function(a, b) {
      return a - b;
    })
  }
}

