/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
  // const set = new Set();
  // for (const char of sentence) {
  //     set.add(char);
  // }
  // return set.size === 26;

  //set one-liner
  return new Set(sentence).size === 26;
};
