/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let temp = arr[k - 1];
  arr[k - 1] = arr[arr.length - k];
  arr[arr.length - k] = temp;
  curr = head;
  let i = 0;
  while (curr) {
    curr.val = arr[i];
    curr = curr.next;
    i++;
  }
  return head;
};
