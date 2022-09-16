function numIslands(grid) {
  const isOffGrid = (i, j) =>
    i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1;
  const sinkIsland = (i, j) => {
    if (isOffGrid(i, j) || grid[i][j] !== '1') return;
    grid[i][j] = '0';
    sinkIsland(i - 1, j);
    sinkIsland(i, j - 1);
    sinkIsland(i + 1, j);
    sinkIsland(i, j + 1);
  };
  let n = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        sinkIsland(i, j);
        n++;
      }
    }
  }
  return n;
}

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);
