const Stats = require('../stat');

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
const systematic_sample = [
    47, 15, 22, 0,
    35, 21,  1, 8
  ]

const mode = [ 42, 47 ]
const mean = 26.98;
const median = 29.5;
const variance = 223.77960000000002;
const standard_dev = 14.959264687811364;
const lower_quart = 14;
const upper_quart = 39;

  test('Can calculate systematic_sample', () => {
      let test_sys = Stats.sysSample(sample_set, 8);
      expect(test_sys.toString()).toBe(systematic_sample.toString());
  })

  test('Can calculate mode', () => {
    let test_mode = Stats.mode(sample_set);
    expect(test_mode.toString()).toBe(mode.toString());
})

test('Can calculate mean', () => {
    let test_mean = Stats.mean(sample_set);
    expect(test_mean.toString()).toBe(mean.toString());
})

test('Can calculate median', () => {
    let test_median = Stats.median(sample_set);
    expect(test_median.toString()).toBe(median.toString());
})

test('Can calculate variance', () => {
    let test_variance = Stats.variance(sample_set);
    expect(test_variance.toString()).toBe(variance.toString());
})

test('Can calculate standard deviation', () => {
    let test_standard_dev = Stats.standard_dev(sample_set);
    expect(test_standard_dev.toString()).toBe(standard_dev.toString());
})

test('Can calculate lower quartile', () => {
    let test_lower_quart = Stats.lower_quart(sample_set);
    expect(test_lower_quart.toString()).toBe(lower_quart.toString());
})

test('Can calculate upper quartile', () => {
    let test_upper_quart = Stats.upper_quart(sample_set);
    expect(test_upper_quart.toString()).toBe(upper_quart.toString());
})