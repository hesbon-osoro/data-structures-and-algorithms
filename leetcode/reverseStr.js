/*
 Reverse String II (Easy)
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
*/

const reverseStr = (s, k) => {
  return s
    .match(new RegExp(`.{1,${k}}`, 'g'))
    .map((s, i) => (i % 2 === 0 ? s.split('').reverse().join('') : s))
    .join('');
};
console.log(reverseStr('abcdefg', 2)); // -> "bacdfeg"
console.log('abcdefg'.match(/.{1,2}/g)); // -> ["ab", "cd", "ef", "g"]
