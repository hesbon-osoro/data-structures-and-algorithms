/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function (obstacles) {
  let dp = [],
    res = [];
  for (const obstacle of obstacles) {
    let j = binarySearch(dp, obstacle);
    if (j == dp.length) {
      dp.push(obstacle);
    } else {
      dp[j] = obstacle;
    }
    res.push(j + 1);
  }
  return res;
};

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
