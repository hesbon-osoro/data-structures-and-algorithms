/*
minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
*/
const minimumIsland = grid => {
  let min = Infinity;
  let visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let size = islandSize(grid, row, col, visited);
      if (size > 0 && size < min) min = size;
    }
  }
  return min;
};
const islandSize = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;
  if (grid[row][col] === 'W') return 0;
  let pos = row + ',' + col;
  if (visited.has(`${pos}`)) return 0;
  visited.add(`${pos}`);
  let size = 1;
  size += islandSize(grid, row + 1, col, visited);
  size += islandSize(grid, row - 1, col, visited);
  size += islandSize(grid, row, col + 1, visited);
  size += islandSize(grid, row, col - 1, visited);
  return size;
};
console.log(
  minimumIsland([
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ])
); // 2
