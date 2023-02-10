/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function (grid) {
  const n = grid.length;
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }
  if (queue.length === 0 || queue.length === n * n) {
    return -1;
  }
  let distance = -1;
  while (queue.length) {
    distance++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      for (let j = 0; j < 4; j++) {
        const newX = x + dx[j];
        const newY = y + dy[j];
        if (
          newX >= 0 &&
          newX < n &&
          newY >= 0 &&
          newY < n &&
          grid[newX][newY] === 0
        ) {
          grid[newX][newY] = 1;
          queue.push([newX, newY]);
        }
      }
    }
  }
  return distance;
};

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
