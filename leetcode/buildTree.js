/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;
  const root = new TreeNode(postorder[postorder.length - 1]);
  const rootIndex = inorder.indexOf(root.val);
  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    inorder.slice(rootIndex + 1),
    postorder.slice(rootIndex, postorder.length - 1)
  );
  return root;
};
