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

const linkedListValues = head => {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};

console.log(linkedListValues(a));

console.log(`Recursive:`);
const linkedListValuesRecursive = (head, result = []) => {
  if (head === null) return;
  result.push(head.val);
  linkedListValuesRecursive(head.next, result);
  return result;
};
console.log(linkedListValuesRecursive(a));

module.exports = {
  linkedListValues,
};
