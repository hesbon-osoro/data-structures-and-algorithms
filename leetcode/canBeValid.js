/*
Check if a Parentheses String Can Be Valid(Medium)
A parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of the following conditions is true:

It is ().
It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
It can be written as (A), where A is a valid parentheses string.
You are given a parentheses string s and a string locked, both of length n. locked is a binary string consisting only of '0's and '1's. For each index i of locked,

If locked[i] is '1', you cannot change s[i].
But if locked[i] is '0', you can change s[i] to either '(' or ')'.
Return true if you can make s a valid parentheses string. Otherwise, return false.
*/
/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
const canBeValid = function (s, locked) {
  let a = s.split(''),
    n = s.length,
    left = 0,
    right = 0,
    immutable = '1';
  if (n & 1) return false;
  let half = n / 2;
  // calculate immutable '(' and ')'
  for (let i = 0; i < n; i++) {
    if (locked[i] === immutable) {
      a[i] === '(' ? left++ : right++;
    }
  }
  if (left > half || right > half) return false;
  for (let i = 0; i < n; i++) {
    if (locked[i] !== immutable) {
      // modify string to valid until left ===right===half
      if (left < half) {
        a[i] = '(';
        left++;
      } else {
        a[i] = ')';
        // right++
      }
    }
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    a[i] === '(' ? count++ : count--;
    if (count < 0) return false;
  }
  return true;
};
