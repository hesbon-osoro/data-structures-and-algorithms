/**
 * @param {string[]} arr
 * @return {number}
 */
const maxLength = function (arr) {
  const dfs = (index, cur) => {
    if (index === arr.length) {
      return cur.length;
    }
    let max = 0;
    if (isUnique(cur + arr[index])) {
      max = Math.max(max, dfs(index + 1, cur + arr[index]));
    }
    max = Math.max(max, dfs(index + 1, cur));
    return max;
  };
  return dfs(0, '');
};

const isUnique = str => {
  const set = new Set();
  for (const c of str) {
    if (set.has(c)) {
      return false;
    }
    set.add(c);
  }
  return true;
};
