/*
Time Based Key-Value Store(Medium)
*/
/**
 * Initialize your data structure here.
 */
const TimeMap = function () {
  this.hashMap = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.hashMap.has(key)) {
    let arr = this.hashMap.get(key);
    arr.push([timestamp, value]);
    this.hashMap.set(key, arr);
  } else {
    let arr = [timestamp, value];
    this.hashMap.set(key, [arr]);
  }
  return null;
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.hashMap.has(key)) return '';
  let arr = this.hashMap.get(key);
  if (arr[0][0] > timestamp) return '';
  let index = binarySearch(arr, timestamp);
  if (arr[index][0] > timestamp) return arr[index - 1][1];
  return arr[index][1];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

function binarySearch(arr, timestamp) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid][0] === timestamp) return mid;
    else if (arr[mid][0] < timestamp) start = mid + 1;
    else end = mid - 1;
  }
  return mid;
}
