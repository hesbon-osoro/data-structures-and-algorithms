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
 * @param {number} k
 * @return {boolean}
 */
// BFS
const findTarget = function (root, k) {
  const set = new Set();
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
};

// DFS
// const findTarget = function (root, k) {
//     const set = new Set();
//     const dfs = (node) => {
//         if (!node) return false;
//         if (set.has(k - node.val)) return true;
//         set.add(node.val);
//         return dfs(node.left) || dfs(node.right);
//     };
//     return dfs(root) || false;
// }
