/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const numberOfArrays = function (s, k) {
  const n = s.length;
  const MOD = 10 ** 9 + 7;

  const memo = new Array(n + 1).fill(-1);

  function dp(ind) {
    if (ind === n) return 1;
    if (s[ind] === '0') return 0;

    if (memo[ind] !== -1) return memo[ind];

    let count = 0;
    for (let i = ind; i < n; i++) {
      const num = Number(s.substring(ind, i + 1));
      if (num > k) break;
      count += dp(i + 1);
    }
    return (memo[ind] = count % MOD);
  }
  return dp(0);
};
