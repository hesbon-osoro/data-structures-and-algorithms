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
const widthOfBinaryTree = function (root) {
  let max = 0;
  const queue = [[root, 0]]; // [node, index]

  if (!root) return 0;

  while (queue.length) {
    const len = queue.length;
    let first = queue[0][1]; // 1st idx
    let last = queue[len - 1][1]; // last idx

    for (let i = 0; i < len; i++) {
      const [node, idx] = queue.shift();
      const subIdx = idx - first; // normalize index to handle Big numbers

      if (node.left) queue.push([node.left, subIdx * 2 + 1]); // find next left idx & node
      if (node.right) queue.push([node.right, subIdx * 2 + 2]); // find next right idx & node
    }

    const width = last - first + 1; // add 1, 0-index based
    max = Math.max(max, width);
  }

  return max;
};
