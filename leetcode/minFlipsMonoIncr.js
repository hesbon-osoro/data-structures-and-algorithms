/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function (s) {
  let ones = 0;
  let flips = 0;
  for (const char of s) {
    if (char === '1') {
      ones++;
    } else {
      flips++;
    }
    if (flips > ones) {
      flips = ones;
    }
  }
  return flips;
};
