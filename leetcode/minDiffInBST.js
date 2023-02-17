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
const minDiffInBST = function (root) {
  let min = Infinity;
  let prev = null;
  const traverse = node => {
    if (node.left) {
      traverse(node.left);
    }
    if (prev !== null) {
      min = Math.min(min, node.val - prev);
    }
    prev = node.val;
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(root);
  return min;
};
