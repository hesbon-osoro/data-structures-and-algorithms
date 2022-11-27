/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  let map = new Map();
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    map[i] = new Map();
    for (let j = 0; j < i; j++) {
      let diff = nums[i] - nums[j];
      let iMap = map[i].get(diff) || 0;
      let jMap = map[j].get(diff) || 0;
      result += jMap;
      map[i].set(diff, iMap + jMap + 1);
    }
  }
  return result;
};
