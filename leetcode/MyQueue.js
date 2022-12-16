const MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};
/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // Push the new element onto the inStack
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // If the outStack is empty, move all the elements from the inStack to the outStack
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }

  // Pop the top element from the outStack
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // If the outStack is empty, move all the elements from the inStack to the outStack
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }

  // Return the top element of the outStack
  return this.outStack[this.outStack.length - 1];
};
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // The queue is empty if both stacks are empty
  return this.inStack.length === 0 && this.outStack.length === 0;
};
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
