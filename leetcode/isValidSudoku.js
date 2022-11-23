/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === '.') continue;
      const k = (((i / 3) | 0) * 3 + j / 3) | 0;
      const n = num - 1;
      if (rows[i][n] || cols[j][n] || boxes[k][n]) return false;
      rows[i][n] = cols[j][n] = boxes[k][n] = 1;
    }
  }
  return true;
};
