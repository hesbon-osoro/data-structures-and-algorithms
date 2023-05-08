/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
  let sum = 0;
  let i = 0;
  let j = 0;
  while (i < mat.length) {
    sum += mat[i][j];
    i++;
    j++;
  }
  i = 0;
  j = mat.length - 1;
  while (i < mat.length) {
    if (i !== j) {
      sum += mat[i][j];
    }
    i++;
    j--;
  }
  return sum;
};
