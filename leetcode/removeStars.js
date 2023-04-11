/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function (s) {
  const stack = [];
  for (const char of s) {
    if (char === '*') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};
