/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  // return index if 'target' is available
  if (nums.includes(target)) return nums.indexOf(target);
  // sort and include 'target' to the array
  // then it gives returns index where it is expected to be
  return [...nums, target].sort((a, b) => a - b).indexOf(target);
};
