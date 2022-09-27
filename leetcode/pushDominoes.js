/*
Push Dominoes (Medium)
*/
/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = dominoes => {
  dominoes = 'L' + dominoes + 'R';
  const arr = dominoes.split('');
  const { length: len } = dominoes;
  for (let l = 0, r = 1; r < len; r++) {
    if (arr[r] === '.') continue;
    if (arr[r] === 'L' && arr[l] === 'R') {
      for (let i = l + 1, j = r - 1; j - i && i < j; i++, j--) {
        arr[i] = 'R';
        arr[j] = 'L';
      }
      // Handle both corner cases
    }
    if (arr[l] === arr[r]) {
      for (let i = l; i < r; i++) arr[i] = arr[r];
    }
    l = r;
  }
  return arr.slice(1, len - 1).join('');
};
