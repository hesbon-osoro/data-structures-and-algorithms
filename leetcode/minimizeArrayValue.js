/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeArrayValue = (nums, min = 0) => {
  for (let i = 0, sum = 0; i < nums.length; i++)
    min = Math.max(min, Math.ceil((sum += nums[i]) / (i + 1)));
  return min;
};
