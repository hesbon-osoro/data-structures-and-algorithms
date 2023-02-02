/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
  const map = {};
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (!isSorted(words[i], words[i + 1], map)) {
      return false;
    }
  }
  return true;
};

function isSorted(word1, word2, map) {
  const len = Math.min(word1.length, word2.length);
  for (let i = 0; i < len; i++) {
    if (word1[i] !== word2[i]) {
      return map[word1[i]] < map[word2[i]];
    }
  }
  return word1.length <= word2.length;
}
