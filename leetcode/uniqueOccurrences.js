/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const set = new Set();
  for (const [key, value] of map) {
    if (set.has(value)) {
      return false;
    }
    set.add(value);
  }
  return true;
};
