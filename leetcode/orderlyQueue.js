/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const orderlyQueue = function (s, k) {
  if (k === 1) {
    let min = s;
    for (let i = 1; i < s.length; i++) {
      const sub = s.substring(i) + s.substring(0, i);
      if (sub < min) {
        min = sub;
      }
    }
    return min;
  }
  return s.split('').sort().join('');
};
