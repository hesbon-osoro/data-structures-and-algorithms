/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = function (nums) {
  let count = 0;
  let zeroCount = 0;
  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
      count += zeroCount;
    } else {
      zeroCount = 0;
    }
  }
  return count;
};
