/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
const Solution = function (head) {
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let result = this.head.val;
  let node = this.head.next;
  let count = 1;

  while (node !== null) {
    const rand = Math.floor(Math.random() * (count + 1));

    if (rand === 0) {
      result = node.val;
    }

    count++;
    node = node.next;
  }

  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
