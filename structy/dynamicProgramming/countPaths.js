/*
count paths
Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.
*/
const countPaths = (grid, row = 0, col = 0, memo = {}) => {
  let pos = row + ',' + col;
  if (pos in memo) return memo[pos];
  // Check bounds
  if (row >= grid.length || col >= grid[0].length) return 0;
  // Check if we are at the end
  if (row === grid.length - 1 && col === grid[0].length - 1) return 1;
  // Check if we are on a wall
  if (grid[row][col] === 'X') return 0;
  // Recurse
  const downCount = countPaths(grid, row + 1, col, memo);
  const rightCount = countPaths(grid, row, col + 1, memo);
  memo[pos] = downCount + rightCount;
  return memo[pos];
};
console.log(
  countPaths([
    ['O', 'O', 'O'],
    ['O', 'X', 'O'],
    ['O', 'O', 'O'],
  ])
); // 2
