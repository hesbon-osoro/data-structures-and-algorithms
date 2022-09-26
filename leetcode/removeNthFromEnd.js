/*
Remove Nth Node From End of List(Medium)
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = function (head, n) {
  let node = head;
  let count = 1;
  let result = new ListNode(0);
  let resultList = result;
  while (node.next) {
    node = node.next;
    count++;
  }
  count = count - n + 1;
  while (count > 1) {
    resultList.next = new ListNode(head.val);
    head = head.next;
    resultList = resultList.next;
    count--;
  }
  if (head.next) resultList.next = head.next;
  return result.next;
};
