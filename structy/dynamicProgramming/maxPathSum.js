/*
max path sum
Write a function, maxPathSum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.

You can assume that all numbers are non-negative.
*/
const maxPathSum = (grid, row = 0, col = 0, memo = {}) => {
  let pos = `${row},${col}`;
  if (pos in memo) return memo[pos];
  if (row === grid.length || col === grid[0].length) return 0;
  if (row === grid.length && col === grid[0].length) return grid[row][col];
  let right = maxPathSum(grid, row, col + 1, memo);
  let down = maxPathSum(grid, row + 1, col, memo);
  memo[pos] = grid[row][col] + Math.max(right, down);
  return memo[pos];
};
