/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
  const map = new Map();
  for (const word of words) map.set(word, (map.get(word) || 0) + 1);
  return [...map]
    .sort((a, b) => (a[1] === b[1] && a[0] > b[0] ? 1 : a[1] < b[1] ? 1 : -1))
    .slice(0, k)
    .map(words => words[0]);
};
