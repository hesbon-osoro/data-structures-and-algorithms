/**
 * @param {string[]} board
 * @return {boolean}
 */
const validTicTacToe = function (board) {
  return checkMoves(board) && checkWinner(board);
};

function checkMoves(board) {
  const [x, o] = countMoves(board);
  const diff = x - o;
  return diff === 0 || diff === 1;
}
function countMoves(board) {
  let x = 0;
  let o = 0;
  for (let row of board) {
    for (let c of row) {
      if (c === 'X') x++;
      if (c === 'O') o++;
    }
  }
  return [x, o];
}
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

function getMove(board, coord) {
  const row = Math.floor(coord / 3);
  const col = coord % 3;
  return board[row][col];
}
function isWinner(board, coords) {
  const firstMove = getMove(board, coords[0]);
  if (firstMove === ' ') return false;
  return coords.every(coord => getMove(board, coord) === firstMove);
}
function checkWinner(board) {
  const winners = winningPatterns.filter(pattern => isWinner(board, pattern));
  // no winner is ok
  if (winners.length === 0) return true;
  const winnerMove = getMove(board, winners[0][0]);
  if (!checkLastMove(board, winnerMove)) return false;
  // one winner is ok
  if (winners.length < 2) return true;
  // two winners is ok if they are the same
  return winnerMove === getMove(board, winners[1][0]);
}
function checkLastMove(board, winnerMove) {
  const [x, o] = countMoves(board);
  if (winnerMove === 'X') return x > o;
  return x === o;
}
