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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const addOneRow = function (root, val, depth) {
  const dfs = (node, d, dir) => {
    if (d === depth) {
      if (dir === 'L') return new TreeNode(val, node, null);
      else return new TreeNode(val, null, node);
    }
    if (!node) return null;
    node.left = dfs(node.left, d + 1, 'L');
    node.right = dfs(node.right, d + 1, 'R');
    return node;
  };
  return dfs(root, 1, 'L');
};
