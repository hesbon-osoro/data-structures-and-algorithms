/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  for (const num of nums) {
    let n = num;
    if (!set.has(n - 1)) {
      let count = 1;
      while (set.has(n + 1)) {
        count++;
        n++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
};
