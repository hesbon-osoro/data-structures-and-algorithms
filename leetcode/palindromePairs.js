/**
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = function (words) {
  let map = new Map();
  let ans = [];
  for (let i = 0; i < words.length; i++) map.set(words[i], i);
  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') {
      for (let j = 0; j < words.length; j++)
        if (isPalindrome(words[j]) && j !== i) ans.push([i, j], [j, i]);
      continue;
    }
    let bw = words[i].split('').reverse().join('');
    let res = map.get(bw);
    if (res !== undefined && res !== i) ans.push([i, res]);
    for (let j = 1; j < bw.length; j++) {
      if (isPalindrome(bw, 0, j - 1)) {
        let res = map.get(bw.slice(j));
        if (res !== undefined) ans.push([i, res]);
      }
      if (isPalindrome(bw, j)) {
        let res = map.get(bw.slice(0, j));
        if (res !== undefined) ans.push([res, i]);
      }
    }
  }
  return ans;
};

const isPalindrome = (word, i = 0, j = word.length - 1) => {
  while (i < j) if (word[i++] !== word[j--]) return false;
  return true;
};

console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));
console.log(palindromePairs(['bat', 'tab', 'cat']));
console.log(palindromePairs(['a', '']));
