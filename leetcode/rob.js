/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length === 0) return 0;

  const n = nums.length;
  const dp = Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[n - 1];
};
