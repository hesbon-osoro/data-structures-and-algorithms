/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  const result = [];
  const dfs = (s, path, index) => {
    if (index === 4) {
      if (s.length === 0) {
        result.push(path.join('.'));
      }
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (s.length < i) {
        break;
      }
      const part = s.slice(0, i);
      if ((part.length > 1 && part[0] === '0') || Number(part) > 255) {
        continue;
      }
      dfs(s.slice(i), [...path, part], index + 1);
    }
  };
  dfs(s, [], 0);
  return result;
};
