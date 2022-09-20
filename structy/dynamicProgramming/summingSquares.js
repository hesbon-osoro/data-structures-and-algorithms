/*
summing squares
Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.
*/
const summingSquares = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  let min = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const square = i * i;
    const noOfSquares = 1 + summingSquares(n - square, memo);
    min = Math.min(min, noOfSquares);
  }
  memo[n] = min;
  return memo[n];
};
