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

const treeSum = root => {
  let sum = 0;
  if (root === null) return sum;
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    sum += current.val;
  }
  return sum;
};

treeSum(a); // -> 21

module.exports = {
  treeSum,
};
