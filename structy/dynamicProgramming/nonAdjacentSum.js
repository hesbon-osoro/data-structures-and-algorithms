/*
non adjacent sum
Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.
*/
const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i >= nums.length) return 0;
  const include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  const exclude = nonAdjacentSum(nums, i + 1, memo);
  memo[i] = Math.max(include, exclude);
  return memo[i];
};
