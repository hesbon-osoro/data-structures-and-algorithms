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
const deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  else if (head.val === head.next.val) {
    head.next = head.next.next;
    deleteDuplicates(head);
  }
  deleteDuplicates(head.next);
  return head;
};
