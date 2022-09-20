/*
island count
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
*/
const islandCount = grid => {
  const visited = new Set();
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (isIsland(grid, row, col, visited)) count++;
    }
  }
  return count;
};

const isIsland = (grid, rows, cols, visited) => {
  const rowInBounds = 0 <= rows && rows < grid.length;
  const colsInBound = 0 <= cols && cols < grid[0].length;
  if (!rowInBounds || !colsInBound) return false;
  if (grid[rows][cols] === 'W') return false;
  let position = `${rows},${cols}`;
  if (visited.has(position)) return false;
  visited.add(position);
  // left
  isIsland(grid, rows - 1, cols, visited);
  // right
  isIsland(grid, rows + 1, cols, visited);
  // up
  isIsland(grid, rows, cols + 1, visited);
  // down
  isIsland(grid, rows, cols - 1, visited);

  return true;
};
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];
console.log(islandCount(grid)); // -> 3
