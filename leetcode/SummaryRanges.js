const SummaryRanges = function () {
  this.arr = [];
};

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  let valIsInside = false;
  for (let i = 0; i < this.arr.length; i++) {
    let [x, y] = this.arr[i];
    if (val >= x && val <= y) {
      valIsInside = true;
      break;
    } else if (val === y + 1) {
      this.arr[i][1] = val;
      if (val + 1 === this.arr[i + 1]?.[0]) {
        this.arr[i][1] = this.arr[i + 1][1];
        this.arr.splice(i + 1, 1);
      }
      valIsInside = true;
      break;
    } else if (val < x) {
      if (val + 1 == x) {
        this.arr[i][0] = val;
      } else this.arr.splice(i, 0, [val, val]);
      valIsInside = true;
      break;
    }
  }
  if (!valIsInside) this.arr.push([val, val]);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  return this.arr;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */
