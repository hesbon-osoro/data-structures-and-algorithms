/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let zeroes = 0;
  let start;
  let end;

  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) zeroes++;
      else if (grid[i][j] === 1) start = [i, j];
      else if (grid[i][j] === 2) end = [i, j];
    }
  }

  if (!start || !end) return res;

  const traverse = (i, j, pointsCount) => {
    if (i >= m || i < 0 || j >= n || j < 0) {
      return;
    }

    if (i === end[0] && j === end[1]) {
      if (pointsCount === zeroes) res++;
      return;
    }

    if (grid[i][j] === -1 || grid[i][j] === '#') return;

    grid[i][j] = '#';

    traverse(i + 1, j, pointsCount + 1);

    traverse(i, j + 1, pointsCount + 1);

    traverse(i, j - 1, pointsCount + 1);

    traverse(i - 1, j, pointsCount + 1);

    grid[i][j] = 0;
  };

  traverse(start[0], start[1], -1);

  return res;
};
