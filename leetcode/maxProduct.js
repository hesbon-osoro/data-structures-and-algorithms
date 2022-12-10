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
const maxProduct = function (root) {
  const sum = node => {
    if (!node) return 0;
    return node.val + sum(node.left) + sum(node.right);
  };

  const total = sum(root);
  let max = 0;

  const dfs = node => {
    if (!node) return 0;
    const s = node.val + dfs(node.left) + dfs(node.right);
    max = Math.max(max, s * (total - s));
    return s;
  };

  dfs(root);
  return max % (1e9 + 7);
};
