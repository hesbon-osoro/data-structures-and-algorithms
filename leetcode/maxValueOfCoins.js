/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
const maxValueOfCoins = function (piles, k) {
  let dp = new Array(k + 1).fill(0);

  for (const pile of piles) {
    for (let j = k; j > 0; --j) {
      // "sum" is a count of k from piles[i]
      let sum = 0;

      for (let k = 1; k <= Math.min(j, pile.length); k++) {
        sum += pile[k - 1];

        // take "k" k from piles[i] and the previous best "j-k" k
        dp[j] = Math.max(dp[j], dp[j - k] + sum);
      }
    }
  }

  return dp[k];
};
