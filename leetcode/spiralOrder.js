/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const result = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // right
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;

    // down
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    // left
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    // up
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }

  return result;
};
