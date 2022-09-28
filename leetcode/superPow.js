/*
Super Pow(Medium)
Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.
*/

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const superPow = function (a, b) {
  let result = 1;
  for (const num of b) {
    result = (pow(result, 10) * pow(a, num)) % 1337;
  }
  return result;
};
const pow = (a, b) => {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = (result * a) % 1337;
  }
  return result;
};
