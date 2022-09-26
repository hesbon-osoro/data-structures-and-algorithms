/*
Path Sum III (Medium)
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function (root, targetSum) {
  let result = 0;
  const dfs = (node, targetSum, currSum, map) => {
    if (node === null) return;
    currSum += node.val;
    if (currSum === targetSum) result++;
    // update result
    if (map.has(currSum - targetSum)) result += map.get(currSum - targetSum);
    // update map
    map.set(currSum, (map.get(currSum) || 0) + 1);
    dfs(node.left, targetSum, currSum, map);
    dfs(node.right, targetSum, currSum, map);
    //backtrack
    map.set(currSum, map.get(currSum) - 1);
  };
  const map = new Map();
  dfs(root, targetSum, 0, map);
  return result;
};
