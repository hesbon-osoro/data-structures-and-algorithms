/*
/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
  const trib = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
  }
  return trib[n];
};
