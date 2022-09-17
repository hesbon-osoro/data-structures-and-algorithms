// Binary Tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const treeIncludes = (root, target) => {
  if (root === null) return false;
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    if (current.val === target) return true;
  }
  return false;
};
console.log(treeIncludes(a, 'e')); // -> true
console.log(`Short DFS:`);
const treeIncludesShortDFS = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    treeIncludesShortDFS(root.left, target) ||
    treeIncludesShortDFS(root.right, target)
  );
};
console.log(treeIncludesShortDFS(a, 'e')); // -> true
console.log(`BFS:`);
const treeIncludesBFS = (root, target) => {
  if (root === null) return false;
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    if (current.val === target) return true;
  }
  return false;
};
module.exports = {
  treeIncludes,
};
