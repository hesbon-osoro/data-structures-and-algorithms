/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {
  // sort the arr based on x
  arr.sort((num1, num2) => Math.abs(num1 - x) - Math.abs(num2 - x));
  // take only k elements
  return arr.slice(0, k).sort((a, b) => a - b);
};
