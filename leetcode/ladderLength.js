/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList);
  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [currentWord, step] = queue.shift();
    if (currentWord === endWord) return step;
    for (let word of wordList) {
      if (diffBySingleLetter(currentWord, word)) {
        queue.push([word, step + 1]);
        wordList.delete(word);
      }
    }
  }
  return 0;
};

const diffBySingleLetter = (str1, str2) => {
  let diff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diff++;
    }
  }
  return diff <= 1;
};
