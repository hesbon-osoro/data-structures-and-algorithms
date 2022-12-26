/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(false);
  dp[n - 1] = true;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= nums[i] && i + j < n; j++) {
      if (dp[i + j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[0];
};
