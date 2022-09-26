/*
Generate Parentheses(Medium)
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = [];
  const dfs = (left, right, str) => {
    if (left === 0 && right === 0) return result.push(str);
    if (left > 0) dfs(left - 1, right, str + '(');
    if (right > left) dfs(left, right - 1, str + ')');
  };
  dfs(n, n, '');
  return result;
};
