/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  if (!head || !head.next) return head;
  let first = head;
  let second = head.next;
  let third = head.next.next;
  second.next = first;
  first.next = swapPairs(third);
  return second;
};
