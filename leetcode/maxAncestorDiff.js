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
const maxAncestorDiff = function (root) {
  const dfs = (node, max, min) => {
    if (!node) return max - min;
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    return Math.max(dfs(node.left, max, min), dfs(node.right, max, min));
  };
  return dfs(root, root.val, root.val);
};
