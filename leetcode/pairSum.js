/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function (head) {
  let maxSum = 0;
  let curr = head;
  recurse(head);
  return maxSum;

  function recurse(node) {
    if (node === null) return;
    recurse(node.next);
    const matchingNode = curr;
    const sum = matchingNode.val + node.val;
    maxSum = Math.max(maxSum, sum);
    curr = curr.next;
  }
};
