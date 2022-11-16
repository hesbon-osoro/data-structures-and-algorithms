/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
