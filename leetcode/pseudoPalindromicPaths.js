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
const pseudoPalindromicPaths = function (root) {
  let count = 0;
  const dfs = (node, path) => {
    if (!node) return;
    path ^= 1 << node.val;
    if (!node.left && !node.right) {
      if (path & (path - 1)) return;
      count++;
    }
    dfs(node.left, path);
    dfs(node.right, path);
  };
  dfs(root, 0);
  return count;
};
