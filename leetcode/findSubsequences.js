/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function (nums) {
  const result = [];
  const dfs = (index, path) => {
    if (path.length > 1) {
      result.push(path.slice());
    }
    const used = new Set();
    for (let i = index; i < nums.length; i++) {
      if (used.has(nums[i])) {
        continue;
      }
      if (path.length === 0 || nums[i] >= path[path.length - 1]) {
        path.push(nums[i]);
        used.add(nums[i]);
        dfs(i + 1, path);
        path.pop();
      }
    }
  };
  dfs(0, []);
  return result;
};
