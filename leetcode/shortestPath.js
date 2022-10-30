/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const shortestPath = function (grid, k) {
  const visited = new Set();
  // curX, curY, eliminationsRemaining, step
  const queue = [[0, 0, k, 0]];
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  while (queue.length) {
    let [curX, curY, eliminationsRemaining, step] = queue.shift();
    if (visited.has(`${curX}${curY}${eliminationsRemaining}`)) continue;
    if (eliminationsRemaining === -1) continue;
    if (curX === grid.length - 1 && curY === grid[0].length - 1) return step;
    visited.add(`${curX}${curY}${eliminationsRemaining}`);
    for (let [dx, dy] of directions) {
      let nextX = curX + dx;
      let nextY = curY + dy;
      if (
        nextX < 0 ||
        nextX >= grid.length ||
        nextY < 0 ||
        nextY >= grid[0].length
      )
        continue;
      if (grid[nextX][nextY] === 0)
        queue.push([nextX, nextY, eliminationsRemaining, step + 1]);
      else queue.push([nextX, nextY, eliminationsRemaining - 1, step + 1]);
    }
  }
  return -1;
};
