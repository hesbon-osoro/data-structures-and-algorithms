/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  const dp = new Array(366).fill(0);
  for (let i = 1; i < 366; i++) {
    if (days.includes(i)) {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2]
      );
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[365];
};
