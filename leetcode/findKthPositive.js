/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
  let count = 0;
  let i = 1;
  let j = 0;
  while (count < k) {
    if (arr[j] !== i) {
      count++;
    } else {
      j++;
    }
    i++;
  }
  return i - 1;
};
