/*
Smallest String Starting From Leaf(Medium)
You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is lexicographically smaller.

For example, "ab" is lexicographically smaller than "aba".
A leaf of a node is a node that has no children.
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */

const smallestFromLeaf = function (root) {
  let prevMax;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const dfs = (node, prevStr) => {
    if (!node) return;
    const str = `${alphabet[node.val]}${prevStr}`;
    if (!node.left && !node.right) {
      prevMax = !prevMax || prevMax > str ? str : prevMax;
    }
    if (node.left) dfs(node.left, str);
    if (node.right) dfs(node.right, str);
  };
  dfs(root, '');
  return prevMax || '';
};
