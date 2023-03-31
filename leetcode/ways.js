/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
const ways = function (pizza, k) {
  const m = pizza.length;
  const n = pizza[0].length;
  const mod = 1e9 + 7;
  const dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => Array(k).fill(0))
  );
  const sum = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      sum[i][j] =
        sum[i + 1][j] +
        sum[i][j + 1] -
        sum[i + 1][j + 1] +
        (pizza[i][j] === 'A');
    }
  }
  const dfs = (i, j, t) => {
    if (dp[i][j][t] > 0) return dp[i][j][t];
    if (t === 0) {
      return (dp[i][j][t] = sum[i][j] > 0 ? 1 : 0);
    }
    for (let r = i + 1; r < m; r++) {
      if (sum[i][j] - sum[r][j] > 0) {
        dp[i][j][t] = (dp[i][j][t] + dfs(r, j, t - 1)) % mod;
      }
    }
    for (let c = j + 1; c < n; c++) {
      if (sum[i][j] - sum[i][c] > 0) {
        dp[i][j][t] = (dp[i][j][t] + dfs(i, c, t - 1)) % mod;
      }
    }
    return dp[i][j][t];
  };
  return dfs(0, 0, k - 1);
};
