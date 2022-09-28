/*
Rotate Image(Medium)
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix[0].length; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }
  for (const row of matrix) row.reverse();
};
