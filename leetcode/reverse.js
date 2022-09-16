/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/
const reverse = x => {
  let lower = -(2 ** 31);
  let upper = 2 ** 31 - 1;
  if (x < 0) {
    x = -x;
    let num = rev(x);
    if (num > upper || num < lower) return 0;
    return -x < 0 ? -num : num;
  }
  let num = rev(x);
  if (num > upper || num < lower) return 0;
  return x < 0 ? -num : num;
};

const rev = x => x.toString().split('').reverse().join('');
