/*
Design Circular Queue (Medium)
*/
/**
 * @param {number} k
 */
// LinkedList implementation

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class MyCircularQueue {
  constructor(k) {
    this.size = k;
    this.currentSize = 0;
    this.head = null;
    this.tail = null;
  }
  enQueue(value) {
    if (this.isFull()) return false;
    const node = new Node(value, null);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.currentSize++;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) return false;
    this.head = this.head.next;
    this.currentSize--;
    return true;
  }
  Front() {
    return this.isEmpty() ? -1 : this.head.val;
  }
  Rear() {
    return this.isEmpty() ? -1 : this.tail.val;
  }
  isEmpty() {
    return this.currentSize === 0;
  }

  isFull() {
    return this.currentSize === this.size;
  }
}
