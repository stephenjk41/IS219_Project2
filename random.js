module.exports = {
  next (min, max, int = true) {
    const res = Math.random() * (max - min) + min

    return int ? Math.round(res) : res
  },
  nextList (min, max, n = 2, int = true) {
    const res = []

    for (let i = 0; i < n; i++) {
      res.push(this.next(min, max, int))
    }

    return res
  },
  getItem (arr) {
    if (arr.length === 0) throw new Error("Array can't be empty")
    return arr[this.next(0, arr.length)]
  },
  getItems (arr, n) {
    const indxes = new Set()

    if (n > arr.length) throw new Error("Array doesn't have enough items")

    for (;indxes.size !== n;) indxes.add(this.next(0, arr.length))
    console.log(indxes)

    return [...indxes].map((v) => arr[v])
  }
}
