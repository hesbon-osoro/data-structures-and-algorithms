/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function (maze, entrance) {
  const m = maze.length;
  const n = maze[0].length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [entrance];
  let step = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
        if (x !== entrance[0] || y !== entrance[1]) {
          return step;
        }
      }
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && maze[nx][ny] === '.') {
          queue.push([nx, ny]);
          maze[nx][ny] = '+';
        }
      }
    }
    step++;
  }
  return -1;
};
