/**
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;
  const dp = new Array(sLen + 1)
    .fill(null)
    .map(() => new Array(pLen + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= pLen; i++) {
    if (p[i - 1] === '*') {
      dp[0][i] = dp[0][i - 1];
    }
  }
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[sLen][pLen];
};
