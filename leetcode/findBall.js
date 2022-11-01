/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const res = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    let x = 0;
    let y = i;
    while (x < m) {
      if (grid[x][y] === 1) {
        if (y === n - 1 || grid[x][y + 1] === -1) break;
        y++;
      } else {
        if (y === 0 || grid[x][y - 1] === 1) break;
        y--;
      }
      x++;
    }
    if (x === m) res[i] = y;
  }
  return res;
};
