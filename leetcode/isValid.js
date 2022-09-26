/*
Valid Parentheses(Easy)
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (!s || s.length <= 1) return false;

  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (const bracket of s) {
    if (brackets[bracket]) {
      stack.push(bracket);
    } else {
      if (brackets[stack.pop()] !== bracket) return false;
    }
  }
  return stack.length === 0;
};
