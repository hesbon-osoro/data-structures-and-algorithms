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
const deleteMiddle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;
  let lastPointer;
  let len = 0;

  while (fast.next) {
    if (len % 2 === 0) {
      lastPointer = slow;
      slow = slow.next;
    }
    fast = fast.next;
    len++;
  }

  lastPointer.next = slow.next;
  return head;
};
