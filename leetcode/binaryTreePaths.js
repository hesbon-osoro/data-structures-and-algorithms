/*
Binary Tree Paths (Easy)

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.
*/
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
 * @return {string[]}
 */
const binaryTreePaths = root => {
  const result = [];
  const traverse = (node, path) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) {
      result.push(path.join('->'));
    }
    traverse(node.left, path);
    traverse(node.right, path);
    path.pop();
  };
  traverse(root, []);
  return result;
};
// First Approach
// const binaryTreePaths = root => {
//      if(!root) return
//     let result = []

//     const dfs = (node,prevPaths)=>{
//         prevPaths.push(node.val)
//         if(node.left===null && node.right===null) result.push(stringFormatter(prevPaths))
//         if(node.left) dfs(node.left,prevPaths.slice())
//         if(node.right) dfs(node.right, prevPaths.slice())
//     }
//     dfs(root,[])
//     return result
// };
// const stringFormatter = arr => {
//   let result = '';
//   if (arr.length === 1) result = `${arr[0]}`;
//   result = `${arr[0]}`;
//   let len = arr.length;
//   for (let i = 1; i < len; i++) {
//     result += `->${arr[i]}`;
//   }
//   return result;
// };
