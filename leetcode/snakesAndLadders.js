/**
 * @param {number[][]} board
 * @return {number}
 */
const snakesAndLadders = function (board) {
  const n = board.length;
  const visited = new Set();
  const queue = [[1, 0]];
  while (queue.length) {
    const [curr, moves] = queue.shift();
    if (curr === n * n) return moves;
    for (let i = curr + 1; i <= Math.min(curr + 6, n * n); i++) {
      const [r, c] = getRC(i, n);
      const next = board[r][c] === -1 ? i : board[r][c];
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, moves + 1]);
      }
    }
  }
  return -1;
};

const getRC = function (i, n) {
  const r = Math.floor((i - 1) / n);
  const c = (i - 1) % n;
  return [n - 1 - r, r % 2 === 0 ? c : n - 1 - c];
};
