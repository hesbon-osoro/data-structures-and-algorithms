/*
max palin subsequence
Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/
const maxPalinSubsequence = (
  str,
  left = 0,
  right = str.length - 1,
  memo = {}
) => {
  const key = `${left},${right}`;
  if (key in memo) return memo[key];
  if (left === right) return 1;
  if (left > right) return 0;
  if (str[left] === str[right]) {
    memo[key] = 2 + maxPalinSubsequence(str, left + 1, right - 1, memo);
  } else {
    memo[key] = Math.max(
      maxPalinSubsequence(str, left + 1, right, memo),
      maxPalinSubsequence(str, left, right - 1, memo)
    );
  }
  return memo[key];
};
