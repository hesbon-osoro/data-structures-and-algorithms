/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let num = 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      num++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num++;
    }
    left++;
  }
  return matrix;
};
