/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
  let result = [];

  const dfs = (i = 0, sum = 0, arr = []) => {
    if (sum > target) return;
    if (sum === target) return result.push([...arr]);
    for (let j = i; j < candidates.length; j++) {
      arr.push(candidates[j]);
      dfs(j, sum + candidates[j], arr);
      arr.pop();
    }
  };
  dfs();
  return result;
};
