/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  const map = new Map();
  for (const char of s) {
    const c = char;
    map.set(c, (map.get(c) || 0) + 1);
  }
  const arr = [...map.entries()];
  arr.sort((a, b) => b[1] - a[1]);
  let result = '';
  for (const char of arr) {
    const [c, count] = char;
    result += c.repeat(count);
  }
  return result;
};
