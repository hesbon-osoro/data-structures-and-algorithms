/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words);
  let res = [];

  let isValid = word => {
    if (word.length == 0) return true;
    for (let i = 1; i <= word.length; i++) {
      let value = word.slice(0, i);
      if (set.has(value)) {
        let check = isValid(word.slice(i));
        if (check) return true;
      }
    }
    return false;
  };

  for (let word of words) {
    set.delete(word);
    if (isValid(word)) res.push(word);
    set.add(word);
  }
  return res;
};
