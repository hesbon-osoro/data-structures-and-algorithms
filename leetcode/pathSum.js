/*
Path Sum II (Medium)
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
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
 * @return {number[][]}
 */
const pathSum = (root, targetSum) => {
  const result = [];
  if (!root) return result;
  const dfs = (node, target, prevPaths) => {
    prevPaths.push(node.val);
    if (!node.left && !node.right && node.val === target)
      result.push(prevPaths);
    if (node.left) dfs(node.left, target - node.val, prevPaths.slice());
    if (node.right) dfs(node.right, target - node.val, prevPaths.slice());
  };
  dfs(root, targetSum, []);
  return result;
};
