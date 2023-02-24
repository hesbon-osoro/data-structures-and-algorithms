/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeviation = function (nums) {
  nums.forEach((n, i) => n % 2 && (nums[i] *= 2));
  nums = [...new Set(nums)].sort((n, m) => m - n);
  let l = nums.length - 1,
    dev = nums[0] - nums[l],
    i;
  while (nums[0] % 2 == 0) {
    if ((nums[0] /= 2) < nums[1])
      (i = nums.findIndex(n => n < nums[0])),
        nums.splice(i < 0 ? l : i - 1, 0, nums.shift());
    dev = Math.min(dev, nums[0] - nums[l]);
  }
  return dev;
};
