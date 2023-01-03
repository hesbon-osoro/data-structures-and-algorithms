/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = function (strs) {
  let count = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        count++;
        break;
      }
    }
  }
  return count;
};
