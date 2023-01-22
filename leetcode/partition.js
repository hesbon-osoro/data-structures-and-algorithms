/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const result = [];
  const len = s.length;
  const isPalindrome = str => {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - i - 1]) {
        return false;
      }
    }
    return true;
  };
  const dfs = (str, path) => {
    if (str.length === 0) {
      result.push(path);
      return;
    }
    for (let i = 1; i <= str.length; i++) {
      const subStr = str.slice(0, i);
      if (isPalindrome(subStr)) {
        dfs(str.slice(i), path.concat([subStr]));
      }
    }
  };
  dfs(s, []);
  return result;
};
