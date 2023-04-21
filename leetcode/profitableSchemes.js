/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
const profitableSchemes = function (n, minProfit, group, profit) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(minProfit + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < group.length; i++) {
    const members = group[i];
    const earn = profit[i];
    for (let j = n; j >= members; j--) {
      for (let k = minProfit; k >= 0; k--) {
        dp[j][k] = (dp[j][k] + dp[j - members][Math.max(0, k - earn)]) % MOD;
      }
    }
  }
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = (ans + dp[i][minProfit]) % MOD;
  }
  return ans;
};
