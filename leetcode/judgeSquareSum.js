/*
Sum of Square Numbers(Medium)
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.
*/
/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {
  let a = 0;
  let b = Math.floor(Math.sqrt(c));
  while (a <= b) {
    let sum = a * a + b * b;
    if (sum === c) return true;
    else if (sum < c) a++;
    else b--;
  }
  return false;
};
