/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function (nums) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  let curMax = 0;
  let curMin = 0;

  for (const num of nums) {
    sum += num;
    curMax = Math.max(curMax + num, num);
    max = Math.max(max, curMax);
    curMin = Math.min(curMin + num, num);
    min = Math.min(min, curMin);
  }

  return max > 0 ? Math.max(max, sum - min) : max;
};
