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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  const map = new Map();
  const res = [];
  const dfs = root => {
    if (!root) return '#';
    const left = dfs(root.left);
    const right = dfs(root.right);
    const subTree = left + ',' + right + ',' + root.val;
    const freq = map.get(subTree) || 0;
    if (freq === 1) res.push(root);
    map.set(subTree, freq + 1);
    return subTree;
  };
  dfs(root);
  return res;
};
