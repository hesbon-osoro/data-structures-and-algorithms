/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  if (divisor === 1) return dividend;
  let limit = Math.pow(2, 31);
  let low = -limit;
  let high = limit - 1;
  let quotient = 0;
  if (dividend === low && divisor === -1) return high;
  quotient = Math.exp(
    Math.log(Math.abs(dividend)) - Math.log(Math.abs(divisor))
  );
  quotient = Math.floor(quotient);
  return Math.sign(dividend * divisor) * Math.floor(quotient);
};
