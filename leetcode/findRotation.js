/*

*/

const findRotation = function (mat, target) {
  for (let i = 0; i < 4; i++) {
    if (JSON.stringify(mat) === JSON.stringify(target)) return true;
    rotate(mat);
  }
  return false;
};

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
