/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  // split the string into an array of words
  const words = s.split(' ');

  // check if the number of words and the number of letters in the pattern are different
  if (words.length !== pattern.length) {
    return false;
  }

  // create a hash map to store the mappings
  const map = {};

  // iterate through the pattern
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    const word = words[i];

    // check if the letter has already been mapped to a word
    if (letter in map) {
      // check if the word is the same as the previously mapped word
      if (map[letter] !== word) {
        return false;
      }
    } else {
      // check if the word has already been mapped to a letter
      if (Object.values(map).includes(word)) {
        return false;
      }

      // add the mapping to the hash map
      map[letter] = word;
    }
  }

  return true;
};
