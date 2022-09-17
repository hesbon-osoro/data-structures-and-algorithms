// LinkedList find
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

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d
const linkedListFind = (head, target) => {
  while (head !== null) {
    if (head.val === target) return true;
    head = head.next;
  }
  return false;
};
console.log(linkedListFind(a, 'c'));
console.log(`Recursive:`);
const linkedListFindRecursive = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFindRecursive(head.next, target);
};
console.log(linkedListFindRecursive(a, 'c'));
module.exports = {
  linkedListFind,
};
