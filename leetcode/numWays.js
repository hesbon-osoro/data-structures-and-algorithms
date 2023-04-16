/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
  const memo = Array(words[0].length)
    .fill(0)
    .map(e => Array(target.length).fill(null).slice());
  const wordLength = words[0].length;
  const mod = Math.pow(10, 9) + 7;
  const list = [];

  for (let i = 0; i < wordLength; i++) {
    list.push(new Map());
    for (const w of words) {
      const c = w[i];
      const prev = list[i].get(c) || 0;
      list[i].set(c, prev + 1);
    }
  }

  const solve = (ti, wi) => {
    if (ti >= target.length) return 1;
    if (wi >= wordLength) return 0;

    if (memo[wi][ti] != null) return memo[wi][ti];

    let count = 0;

    if (list[wi].has(target[ti])) {
      count += (list[wi].get(target[ti]) * solve(ti + 1, wi + 1)) % mod;
    }

    count += solve(ti, wi + 1) % mod;

    memo[wi][ti] = count;

    return count % mod;
  };

  return solve(0, 0) % mod;
};
