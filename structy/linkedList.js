class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
// Linking the nodes
a.next = b;
b.next = c;
c.next = d;
// A->B->C->D->null

// Traversing the linked list
const printLinkedList = head => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};
printLinkedList(a);

console.log(`Recursive:`);
// ReWriting the same function using recursion
const printLinkedListRecursively = head => {
  if (head === null) return;
  console.log(head.val);
  printLinkedListRecursively(head.next);
};
printLinkedListRecursively(a);
