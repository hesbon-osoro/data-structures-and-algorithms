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
 * @return {number}
 */
const longestZigZag = function (root) {
  let longestPath = 0;
  const dfs = (node, len, prevDirection) => {
    // prevDirection, 0 for left, 1 for right
    if (!node) return;
    longestPath = Math.max(longestPath, len);
    dfs(node.left, prevDirection == 1 ? len + 1 : 1, 0);
    dfs(node.right, prevDirection == 0 ? len + 1 : 1, 1);
  };

  dfs(root, 0, -1);

  return longestPath;
};
