/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
  let result = [];
  let carry = 0;
  let i = num.length - 1;
  while (i >= 0 || k > 0) {
    let sum = carry;
    if (i >= 0) {
      sum += num[i];
      i--;
    }
    if (k > 0) {
      sum += k % 10;
      k = Math.floor(k / 10);
    }
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
  }
  if (carry > 0) {
    result.push(carry);
  }
  return result.reverse();
};
