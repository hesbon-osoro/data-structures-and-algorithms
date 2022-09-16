/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};
