/*
Concatenation of Consecutive Binary Numbers(Medium)
Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 10^9 + 7.
*/
/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = n => {
  const mod = Math.pow(10, 9) + 7;
  let result = 1;
  let bits = 4;
  for (let i = 2; i <= n; i++) {
    if (i == bits) bits *= 2;
    result = (result * bits + i) % mod;
  }
  return result;
};
