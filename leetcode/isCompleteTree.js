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
 * @return {boolean}
 */
const isCompleteTree = function (root) {
  const queue = [root];
  let isEnd = false;
  while (queue.length) {
    const node = queue.shift();
    if (node === null) {
      isEnd = true;
    } else {
      if (isEnd) {
        return false;
      }
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return true;
};
