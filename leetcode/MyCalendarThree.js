class MyCalendarThree {
  constructor() {
    // we can't use (new Map()) because it doesn't sort the key-value pair
    this.map = {};
  }
  /**
   * @param {number} start
   * @param {number} end
   * @return {number}
   */
  book(start, end) {
    if (!this.map[start]) this.map[start] = 0;
    this.map[start]++;
    if (!this.map[end]) this.map[end] = 0;
    this.map[end]--;
    let answer = 0;
    let cur = 0;
    for (let key in this.map) {
      cur += this.map[key];
      answer = Math.max(answer, cur);
    }
    return answer;
  }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
