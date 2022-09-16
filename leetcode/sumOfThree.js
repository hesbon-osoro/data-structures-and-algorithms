/**
 * Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.
 */
/**
 * @param {number} num
 * @return {number[]}
 */
const sumOfThree = function (num) {
  return num % 3 === 0 ? [num / 3 - 1, num / 3, num / 3 + 1] : [];
};
