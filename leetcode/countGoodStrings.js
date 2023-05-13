/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
const countGoodStrings = function (low, high, zero, one) {
  const dp = Array(high + 1).fill(0),
    mod = 1e9 + 7;
  dp[0] = 1;

  for (let i = 1; i <= high; ++i) {
    // Explanation given below
    const z = i - zero,
      o = i - one;
    if (z >= 0) (dp[i] += dp[z]), (dp[i] %= mod);
    if (o >= 0) (dp[i] += dp[o]), (dp[i] %= mod);
  }

  // Sum of all dp[low] to dp[high]
  let ans = 0;
  for (i = low; i <= high; ++i) (ans += dp[i]), (ans %= mod);
  return ans;
};
