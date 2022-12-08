/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
  const leafs1 = [];
  const leafs2 = [];
  const dfs = (node, leafs) => {
    if (!node) return;
    if (!node.left && !node.right) {
      leafs.push(node.val);
    }
    dfs(node.left, leafs);
    dfs(node.right, leafs);
  };
  dfs(root1, leafs1);
  dfs(root2, leafs2);
  return (
    leafs1.length === leafs2.length && leafs1.every((v, i) => v === leafs2[i])
  );
};
