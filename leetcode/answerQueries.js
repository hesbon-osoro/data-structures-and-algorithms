/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const answerQueries = function (nums, queries) {
  const result = [];
  nums = nums.sort((a, b) => a - b); // sort nums in non-descending order
  for (const query of queries) {
    let currentSum = 0;
    let size = 0;
    for (const num of nums) {
      if (currentSum + num > query) {
        break;
      }
      currentSum += num;
      size++;
    }
    result.push(size);
  }
  return result;
};
