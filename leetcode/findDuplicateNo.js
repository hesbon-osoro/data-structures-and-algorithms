/**
 * @param {number[]} nums
 * @return {number}
 */
// Floyd's Cycle Finding Algorithm (Tortoise and Hare)
const findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

// using set
// const findDuplicate = function (nums) {
//   const set = new Set();
//   for (const num of nums) {
//     if (set.has(num)) return num;
//     set.add(num);
//   }
// };
