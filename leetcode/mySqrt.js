/*
Sqrt(x)(Easy)
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
*/
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  return Math.floor(Math.sqrt(x)); // Math.floor(x ** .5)
};
