/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  const memo = new Map();
  function recursive(idx) {
    if (memo.has(idx)) return memo.get(idx);
    if (idx > s.length || s[idx] === '0') return 0;
    if (idx === s.length - 1 || idx === s.length) return 1;
    if (+s.slice(idx, idx + 2) > 26) return recursive(idx + 1);
    const res = recursive(idx + 1) + recursive(idx + 2);
    memo.set(idx, res);
    return res;
  }
  return recursive(0);
};
