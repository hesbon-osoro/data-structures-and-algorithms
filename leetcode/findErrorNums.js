/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  let dup, missing;
  let sum = 0;
  let times = new Array(nums.length).fill(0);
  for (let num of nums) {
    sum += num;
    times[num - 1]++;
    if (times[num - 1] === 2) dup = num;
  }
  missing = ((nums.length + 1) * nums.length) / 2 + dup - sum;
  return [dup, missing];
};
