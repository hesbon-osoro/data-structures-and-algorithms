/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
const numRollsToTarget = function (n, k, target) {
  return dfs(n, k, target);
};

const dfs = (n, k, target, memo = new Map()) => {
  if (n === 0 && target === 0) return 1;
  if (n === 0 || target <= 0) return 0;
  const key = `${n}-${target}`;
  if (memo.has(key)) return memo.get(key);
  let res = 0,
    mod = 10 ** 9 + 7;
  for (let i = 1; i <= k; i++) {
    res += dfs(n - 1, k, target - i, memo);
  }
  memo.set(key, res % mod);
  return res % mod;
};
