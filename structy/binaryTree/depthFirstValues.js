// Binary Tree
// Depth First Search
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

const depthFirstValues = root => {
  let result = [];
  let stack = [root];
  if (root === null) return result;
  while (stack.length) {
    let cur = stack.pop();
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
    result.push(cur.val);
  }
  return result;
};

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
console.log(`Recursive:`);
const depthFirstValuesRecursive = root => {
  let result = [];
  const dfs = node => {
    if (node === null) return;
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return result;
};
console.log(depthFirstValuesRecursive(a));
console.log(`Recursive2:`);
const depthFirstValuesRecursive2 = root => {
  if (root === null) return [];
  return [
    root.val,
    ...depthFirstValuesRecursive2(root.left),
    ...depthFirstValuesRecursive2(root.right),
  ];
};
console.log(depthFirstValuesRecursive2(a));

module.exports = {
  depthFirstValues,
};
