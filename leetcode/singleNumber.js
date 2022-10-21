/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const map = {};
  for (let num of nums) {
    if (map[num] == null) map[num] = 0;
    map[num]++;
  }
  for (let num in map) {
    if (map[num] === 1) return Number(num);
  }
};
