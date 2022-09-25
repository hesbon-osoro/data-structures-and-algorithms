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
const sumNumbers = function (root) {
  let sum = 0;
  const dfs = (node, num) => {
    if (!node) return;
    num = num * 10 + node.val;
    if (!node.left && !node.right) {
      sum += num;
      return;
    }
    dfs(node.left, num);
    dfs(node.right, num);
  };
  dfs(root, 0);
  return sum;
};
