/*
Maximum Length of Repeated Subarray (Medium)
Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = (nums1, nums2) => {
  let max = 0;
  let { length: rows } = nums1;
  let { length: cols } = nums2;
  // Creating a Grid using Dynamic Programming
  let dp = Array.from({ length: rows }, v =>
    Array.from({ length: cols }, v => 0)
  );
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) dp[i][j] = 1;
        else dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max;
};
console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])); // -> 3
console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0])); // -> 5
