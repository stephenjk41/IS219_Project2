const rand = require('./random')
const stats = require('./stat')
const Calculator = new (require('./calculator'))()



// const sample = rand.nextList(0, 50, 100)
// console.log("Sample Set:\n")
// console.log(sample)
// console.log("Systematic Sample:\n")
// console.log(stats.sysSample(sample, 8))
// console.log("Mode:\n")
// console.log(stats.mode(sample))
const sample_set = [
    43, 47,  1, 25, 30, 41, 23,  1, 37, 22, 39,  7,
    47, 33,  2, 11, 48, 47, 41, 42, 33, 49, 39,  6,
    15, 13, 37, 29, 32, 15, 39,  8, 10, 27,  0, 35,
    22, 16, 47, 50, 27, 43, 41, 35, 20, 19, 47, 42,
     0, 38,  2, 11, 45, 36, 10, 22, 31,  4, 42, 42,
    35, 32, 11, 42, 14, 37, 46, 39, 17,  8, 36, 29,
    21, 33, 49, 14, 32, 19, 16,  5, 26, 23,  4,  1,
     1, 42, 18, 34, 38, 10, 23, 24, 12, 50, 38, 31,
     8, 40, 27, 47
  ]
  const systematic_sample = [47, 15, 22, 0, 35, 21, 1, 8]

 const mode = [ 42, 47 ]
console.log(stats.median(sample_set));
console.log(stats.variance(sample_set));
console.log(stats.standard_dev(sample_set));
console.log(stats.lower_quart(sample_set));
console.log(stats.upper_quart(sample_set));
 