/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = function (nums1, nums2) {
  const dp = new Array(nums1.length + 1)
    .fill(0)
    .map(() => new Array(nums2.length + 1).fill(0));
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      dp[i][j] =
        nums1[i - 1] === nums2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[nums1.length][nums2.length];
};
