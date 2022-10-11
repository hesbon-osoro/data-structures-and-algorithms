/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  return (BigInt(digits.join('')) + 1n).toString().split('');
};
