/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const result = [];
  const dfs = (index, str) => {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    for (const element of map[digits[index]]) {
      dfs(index + 1, str + element);
    }
  };
  if (digits.length !== 0) {
    dfs(0, '');
  }
  return result;
};
