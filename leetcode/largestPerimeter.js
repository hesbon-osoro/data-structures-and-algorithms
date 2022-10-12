/**
 * @param {number[]} A
 * @return {number}
 */
const largestPerimeter = function (nums) {
  const sorted = nums.sort((a, b) => b - a);
  let perimeter = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (i + 2 >= sorted.length || perimeter) break;
    if (sorted[i] >= sorted[i + 1] + sorted[i + 2]) continue;
    if (sorted[i] && sorted[i + 1] && sorted[i + 2])
      perimeter = sorted[i] + sorted[i + 1] + sorted[i + 2];
  }

  return perimeter;
};
