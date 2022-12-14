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
 * @return {number[]}
 */
// const inorderTraversal = root => {
//   if (!root) return [];
//   return [
//     ...inorderTraversal(root.left),
//     root.val,
//     ...inorderTraversal(root.right),
//   ];
// };

// one liner
const inorderTraversal = root =>
  root
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right),
      ]
    : [];
