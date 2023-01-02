/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  return (
    word.toUpperCase() === word ||
    word.toLowerCase() === word ||
    word[0].toUpperCase() + word.slice(1).toLowerCase() === word
  );
};
