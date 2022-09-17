// LinkedList Sum List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
const sumList = head => {
  let sum = 0;
  while (head !== null) {
    sum += head.val;
    head = head.next;
  }
  return sum;
};
console.log(sumList(a));
// Recursive:
console.log(`Recursive:`);
const sumListRecursive = (head, sum = 0) => {
  if (head === null) return sum;
  sum += head.val;
  return sumListRecursive(head.next, sum);
};
console.log(sumListRecursive(a));
module.exports = {
  sumList,
};
