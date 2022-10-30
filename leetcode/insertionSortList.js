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
const insertionSortList = function (head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0, head);
  let cur = head;
  while (cur.next) {
    if (cur.val <= cur.next.val) {
      cur = cur.next;
      continue;
    }
    let prev = dummy;
    while (prev.next.val <= cur.next.val) prev = prev.next;
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }
  return dummy.next;
};
