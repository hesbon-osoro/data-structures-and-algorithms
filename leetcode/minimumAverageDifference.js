/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = function (nums) {
  let { length: n } = nums;
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }
  let index = 0;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    let left = nums[i];
    let right = nums[n - 1] - left;
    let val = Math.abs(
      parseInt(left / (i + 1)) - parseInt(right / (n - (i + 1)))
    );
    if (val < min) {
      min = val;
      index = i;
    }
  }
  if (parseInt(nums[n - 1] / n) < min) {
    index = n - 1;
  }
  return index;
};
