/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = words => {
  const map = new Map();
  let finalLength = 0;
  let oneDouble = 0;
  // insert word into map, e.g. key is 'lc', value is its number of occurance
  for (const word of words) {
    if (!map.has(word)) map.set(word, 1);
    else {
      const currCount = map.get(word);
      map.set(word, currCount + 1);
    }
  }
  for (const [key, value] of map) {
    // if the key has 2 same letters,
    // e.g 'gg', even number 'gg' can form a palindrome
    if (key.charAt(0) === key.charAt(1)) {
      if (value % 2 === 0) finalLength = finalLength + value;
      else {
        finalLength = finalLength + value - 1;
        oneDouble = 1;
      }
    } else {
      // if the key has 2 different letters,
      // e.g 'lc', reverse it to 'cl' check if 'cl' exists
      const reverse = `${key.charAt(1)}${key.charAt(0)}`;
      if (map.has(reverse)) {
        const reverseValue = map.get(reverse);
        finalLength = finalLength + Math.min(value, reverseValue);
      }
    }
  }
  return (finalLength + oneDouble) * 2;
};
