class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
// x -> y -> z

const zipperLists = (head1, head2) => {
  let ptr = head1;
  let cur1 = head1.next;
  let cur2 = head2;
  let count = 0;
  while (cur1 !== null && cur2 !== null) {
    if (count % 2 === 0) {
      ptr.next = cur2;
      cur2 = cur2.next;
    } else {
      ptr.next = cur1;
      cur1 = cur1.next;
    }
    ptr = ptr.next;
    count++;
  }
  if (cur1 !== null) ptr.next = cur1;
  if (cur2 !== null) ptr.next = cur2;
  return head1;
};
console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z
console.log(`Recursive:`);
const zipperListsRecursive = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  let next1 = head1.next;
  let next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListsRecursive(next1, next2);
  return head1;
};
console.log(zipperListsRecursive(a, x));
