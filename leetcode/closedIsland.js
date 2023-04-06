/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let count = 0;

  function dfs(x, y, grid) {
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[0].length ||
      grid[x][y] == 1
    ) {
      return;
    }

    grid[x][y] = 1;
    dfs(x + 1, y, grid);
    dfs(x - 1, y, grid);
    dfs(x, y + 1, grid);
    dfs(x, y - 1, grid);
  }

  // Exclude connected group of 0s on the corners because they are not closed island.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 0 && (i == 0 || i == m - 1 || j == 0 || j == n - 1)) {
        dfs(i, j, grid);
      }
    }
  }
  // Count the number of connected component of 0s on the grid.
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] == 0) {
        dfs(i, j, grid);
        count++;
      }
    }
  }

  return count;
};
