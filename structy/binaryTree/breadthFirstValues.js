// Binary Tree
// Breadth First Search
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

const breadthFirstValues = root => {
  let result = [];
  if (root === null) return result;
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current === null) return;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    result.push(current.val);
  }
  return result;
};
console.log(breadthFirstValues(a));
console.log(`Recursive:`);
const breadthFirstValuesRecursive = root => {
  let result = [];
  if (root === null) return result;
  let queue = [root];
  const bfs = () => {
    if (!queue.length) return;
    let current = queue.shift();
    if (current === null) return;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    result.push(current.val);
    bfs();
  };
  bfs();
  return result;
};
console.log(breadthFirstValuesRecursive(a));
module.exports = {
  breadthFirstValues,
};
