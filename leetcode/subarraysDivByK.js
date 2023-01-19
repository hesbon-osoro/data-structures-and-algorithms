/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = function (nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  for (const num of nums) {
    sum += num;
    let mod = ((sum % k) + k) % k;
    let same = map.get(mod) || 0;
    count += same;
    map.set(mod, same + 1);
  }
  return count;
};
