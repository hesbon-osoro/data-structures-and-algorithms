/*
Path Sum (Easy)
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
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
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  return dfs(root, 0, targetSum);
};
const dfs = (node, sum, targetSum) => {
  if (node === null) return false;
  sum += node.val;
  if (node.left === null && node.right === null) return sum === targetSum;
  return dfs(node.left, sum, targetSum) || dfs(node.right, sum, targetSum);
};
