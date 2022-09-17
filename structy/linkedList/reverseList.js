// LinkedList
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f
const reverseList = head => {
  let prev = null;
  let current = head;
  let next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

console.log(reverseList(a));
const reverseListRecursive = (head, prev = null) => {
  if (head === null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseListRecursive(next, head);
};
console.log(`Recursive:`);
console.log(reverseListRecursive(a));
module.exports = {
  reverseList,
};
