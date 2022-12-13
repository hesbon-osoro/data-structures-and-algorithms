/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function (matrix) {
  const len = matrix.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
  }
  for (let i = 0; i < len; i++) {
    dp[0][i] = matrix[0][i];
  }
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      dp[i][j] =
        matrix[i][j] +
        Math.min(
          dp[i - 1][j],
          dp[i - 1][j - 1] || Infinity,
          dp[i - 1][j + 1] || Infinity
        );
    }
  }
  return Math.min(...dp[len - 1]);
};
