/*
Recover the Original Array (Hard)
Alice had a 0-indexed array arr consisting of n positive integers. She chose an arbitrary positive integer k and created two new 0-indexed integer arrays lower and higher in the following manner:

lower[i] = arr[i] - k, for every index i where 0 <= i < n
higher[i] = arr[i] + k, for every index i where 0 <= i < n
Unfortunately, Alice lost all three arrays. However, she remembers the integers that were present in the arrays lower and higher, but not the array each integer belonged to. Help Alice and recover the original array.

Given an array nums consisting of 2n integers, where exactly n of the integers were present in lower and the remaining in higher, return the original array arr. In case the answer is not unique, return any valid array.

Note: The test cases are generated such that there exists at least one valid array arr.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const recoverArray = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = [];
  let count = counter(nums);
  for (let i = 1; i < n; i++) {
    let k = nums[i] - nums[0];
    let m = deepCopyMap(count);
    res = [];
    if (greedy(k, nums, m, res)) return res;
  }
  return [];
};

const counter = nums => {
  let map = new Map();
  for (const num of nums) map.set(num, map.get(num) + 1 || 1);
  return map;
};
const removeOneMap = (map, x) => {
  let v = map.get(x);
  v > 1 ? map.set(x, v - 1) : map.delete(x);
};
const deepCopyMap = map => new Map(map);
// Greedy: check each possible k with lower[i]
const greedy = (k, a, map, res) => {
  if (k === 0 || k & 1) return false;
  for (const low of a) {
    if (map.has(low)) {
      // assume the condition
      let mid = low + (k >> 1);
      let high = low + k;
      res.push(mid);
      removeOneMap(map, low);
      if (map.has(high)) {
        removeOneMap(map, high);
      } else {
        return false;
      }
    }
  }
  //   high not exist in original array
  return true;
};
