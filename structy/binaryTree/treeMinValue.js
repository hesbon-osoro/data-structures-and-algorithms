// Binary Tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

const treeMinValue = root => {
  if (root === null) return;
  let min = Infinity;
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    min = Math.min(min, current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return min;
};
console.log(treeMinValue(a)); // -> -2
console.log('Short DFS:');
const treeMinValueShortDFS = root => {
  if (root === null) return Infinity;
  return Math.min(
    root.val,
    treeMinValueShortDFS(root.left),
    treeMinValueShortDFS(root.right)
  );
};
console.log(treeMinValueShortDFS(a)); // -> -2
console.log('BFS:');
const treeMinValueBFS = root => {
  if (root === null) return Infinity;
  let min = Infinity;
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    min = Math.min(min, current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return min;
};
module.exports = {
  treeMinValue,
};
