/*
Design Circular Queue (Medium)
*/
/**
 * @param {number} k
 */

const MyCircularQueue = function (k) {
  this.queue = [];
  this.rear = -1;
  this.front = 0;
  this.size = k;
  this.currentSize = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.currentSize >= this.size) {
    return false;
  }

  this.rear = (this.rear + 1) % this.size;
  this.queue[this.rear] = value;
  this.currentSize++;

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (!this.currentSize) {
    return false;
  }

  this.front = (this.front + 1) % this.size;
  this.currentSize--;

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.currentSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.currentSize === this.size;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
