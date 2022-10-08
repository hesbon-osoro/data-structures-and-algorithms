class MinStack {
  constructor() {
    this.stack = [];
    this.min_stack = [];
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push = function (val) {
    this.stack.push(val);
    if (!this.min_stack.length) this.min_stack.push(val);
    else
      this.min_stack.push(
        Math.min(this.min_stack[this.min_stack.length - 1], val)
      );
  };

  /**
   * @return {void}
   */
  pop = function () {
    if (!this.stack.length) return;
    this.stack.pop();
    this.min_stack.pop();
  };

  /**
   * @return {number}
   */
  top = function () {
    if (!this.stack.length) return;
    return this.stack[this.stack.length - 1];
  };

  /**
   * @return {number}
   */
  getMin = function () {
    if (!this.stack.length) return;
    return this.min_stack[this.min_stack.length - 1];
  };
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
