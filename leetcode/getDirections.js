/*
Step-By-Step Directions From a Binary Tree Node to Another(Medium)
You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

'L' means to go from a node to its left child node.
'R' means to go from a node to its right child node.
'U' means to go from a node to its parent node.
Return the step-by-step directions of the shortest path from node s to node t.
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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
const getDirections = (root, startValue, destValue) => {
  let startPath, destPath;
  const common = lca(root, startValue, destValue);
  dfs(common, startValue, destValue, '');
  const res = 'U'.repeat(startPath.length) + destPath;
  return res;

  function dfs(node, startValue, destValue, path) {
    if (!node || (startPath && destPath)) return;
    if (node.val === startValue) startPath = path;
    else if (node.val === destValue) destPath = path;
    dfs(node.left, startValue, destValue, path + 'L');
    dfs(node.right, startValue, destValue, path + 'R');
  }
  function lca(node, n1, n2) {
    if (!node) return;
    const left = lca(node.left, n1, n2);
    const right = lca(node.right, n1, n2);
    if ((left && right) || node.val === n2 || node.val === n1) return node;
    return left || right;
  }
};
