/*
Word Search (Medium)
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const dfs = (i, j, k) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      visited[i][j] ||
      board[i][j] !== word[k]
    ) {
      return false;
    }
    if (k === word.length - 1) {
      return true;
    }
    visited[i][j] = true;
    const res =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1);
    visited[i][j] = false;
    return res;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
