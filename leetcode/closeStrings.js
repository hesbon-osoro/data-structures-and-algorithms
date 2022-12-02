/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const chars = new Array(26).fill(0);
  const used = new Array(26).fill(false);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < word1.length; i++) {
    chars[word1.charCodeAt(i) - a]++;
    used[word1.charCodeAt(i) - a] = true;
  }
  let countMap = {};
  for (let n of chars) {
    if (countMap[n] === undefined) countMap[n] = 0;
    countMap[n]++;
  }
  chars.fill(0);
  for (let i = 0; i < word2.length; i++) {
    if (!used[word2.charCodeAt(i) - a]) return false;
    chars[word2.charCodeAt(i) - a]++;
  }
  for (let n of chars) {
    if (countMap[n] === undefined) return false;
    countMap[n]--;
    if (countMap[n] < 0) return false;
  }
  return true;
};
