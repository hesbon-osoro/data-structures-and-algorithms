/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
*/

const MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const binarySearch = n => {
    let start = 0;
    let end = this.arr.length;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (this.arr[mid] < n) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    this.arr.splice(start, 0, n);
  };
  if (this.arr.length === 0) {
    this.arr.push(num);
  } else {
    binarySearch(num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.arr.length / 2);
  return this.arr.length % 2 === 0
    ? (this.arr[mid] + this.arr[mid - 1]) / 2
    : this.arr[mid];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
