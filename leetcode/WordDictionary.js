const TrieNode = function () {
  this.children = {};
  this.isEndOfWord = false;
};

const WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const searchHelper = (node, index) => {
    if (index === word.length) {
      return node.isEndOfWord;
    }
    const char = word.charAt(index);
    if (char !== '.') {
      if (!node.children[char]) {
        return false;
      }
      return searchHelper(node.children[char], index + 1);
    } else {
      for (const child of Object.values(node.children)) {
        if (searchHelper(child, index + 1)) {
          return true;
        }
      }
      return false;
    }
  };
  return searchHelper(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
