/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  const result = [];
  if (!board || !words || board.length < 1) return result;
  const root = buildTrie(words);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, root, result);
    }
  }
  return result;
};

function dfs(board, i, j, trieNode, result) {
  const c = board[i][j];
  if (!trieNode.children.has(c)) return;
  trieNode = trieNode.children.get(c);
  if (trieNode.word) {
    result.push(trieNode.word);
    trieNode.word = null;
  }
  board[i][j] = '#';
  if (i > 0) dfs(board, i - 1, j, trieNode, result);
  if (j > 0) dfs(board, i, j - 1, trieNode, result);
  if (i < board.length - 1) dfs(board, i + 1, j, trieNode, result);
  if (j < board[0].length - 1) dfs(board, i, j + 1, trieNode, result);
  board[i][j] = c;
}

function buildTrie(words) {
  const root = new TrieNode();
  words.forEach(word => {
    let node = root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.word = word;
  });
  return root;
}

class TrieNode {
  constructor() {
    this.word = null;
    this.children = new Map();
  }
}
