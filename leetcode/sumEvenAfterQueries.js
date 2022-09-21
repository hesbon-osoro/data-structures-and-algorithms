/*
Sum of Even Numbers After Queries(Medium)
You are given an integer array nums and an array queries where queries[i] = [vali, indexi].

For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums.

Return an integer array answer where answer[i] is the answer to the ith query.
*/
const sumEvenAfterQueries = (nums, queries) => {
  let result = [];
  let evenSum = nums.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
  for (const query of queries) {
    let [val, index] = query;
    if (nums[index] % 2 === 0) evenSum -= nums[index];
    nums[index] += val;
    if (nums[index] % 2 === 0) evenSum += nums[index];
    result.push(evenSum);
  }
  return result;
};
