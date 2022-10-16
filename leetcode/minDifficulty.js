/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
const minDifficulty = function (jobDifficulty, d) {
  const n = jobDifficulty.length;
  if (n < d) return -1;
  const dp = Array.from({ length: d + 1 }, () => Array(n + 1).fill(Infinity));
  dp[0][0] = 0;
  for (let i = 1; i <= d; i++) {
    for (let j = i; j <= n; j++) {
      let max = 0;
      for (let k = j; k >= i; k--) {
        max = Math.max(max, jobDifficulty[k - 1]);
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k - 1] + max);
      }
    }
  }
  return dp[d][n];
};
