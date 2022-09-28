/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
  while ((a & b) !== 0) {
    [a, b] = [a ^ b, (a & b) << 1];
  }
  return a ^ b;
};
