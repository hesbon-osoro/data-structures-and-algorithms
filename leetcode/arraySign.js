/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
  let product = 1;
  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) product *= -1;
  }
  return product;
};
