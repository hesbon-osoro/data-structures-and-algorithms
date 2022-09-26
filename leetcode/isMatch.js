/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  return new RegExp(`^${p}$`).test(s);
};
