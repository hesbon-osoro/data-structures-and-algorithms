/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const dp = Array(prices.length).fill(null);

  function run(idx, bal) {
    if (idx >= prices.length) return 0;
    if (dp[idx] !== null && bal === -Infinity) return dp[idx];
    // if balance is empty buy stock OR do nothing
    if (bal === -Infinity)
      return (dp[idx] = Math.max(run(idx + 1, prices[idx]), run(idx + 1, bal)));
    // if you have balance sell stock OR do nothing
    return Math.max(
      run(idx + 2, -Infinity) + (prices[idx] - bal),
      run(idx + 1, bal)
    );
  }
  return run(0, -Infinity);
};
