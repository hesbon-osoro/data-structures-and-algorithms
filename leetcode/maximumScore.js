/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
const maximumScore = function (nums, multipliers) {
  const { length: n } = nums;
  const { length: m } = multipliers;
  let memo = Array.from({ length: m }, v => Array.from({ length: m }));

  // Dynamic Programming for Optimization
  function dp(start, times) {
    if (times === m) return 0;
    if (memo[start][times]) return memo[start][times];
    let pickStart = dp(start + 1, times + 1) + nums[start] * multipliers[times];
    let pickEnd =
      dp(start, times + 1) + nums[n - (times - start) - 1] * multipliers[times];
    return (memo[start][times] = Math.max(pickStart, pickEnd));
  }
  return dp(0, 0);
};
