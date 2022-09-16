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

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d
const getNodeValue = (head, index) => {
  // Reasoning 1
  // let result = []
  // if(head === null) return
  // while(head!==null){
  //   result.push(head.val)
  //   head = head.next
  // }
  // for(let i=0; i<result.length;i++){
  //   if(i===index) return result[index]
  // }
  // return null
  //   Reasoning 2

  let count = 0;
  if (head === null) return null;
  while (head !== null) {
    if (count === index) return head.val;
    count++;
    head = head.next;
  }
  return null;
};

console.log(getNodeValue(a, 2));
const getNodeValueRecursive = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValueRecursive(head.next, index - 1);
};
console.log(`Recursive:`);
console.log(getNodeValueRecursive(a, 2));
module.exports = {
  getNodeValue,
};
