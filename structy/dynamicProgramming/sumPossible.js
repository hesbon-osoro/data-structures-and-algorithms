/*
sum possible
Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.
*/
const sumPossible = (amount, numbers, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return false;
  if (amount === 0) return true;
  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  return (memo[amount] = false);
};
console.log(sumPossible(7, [5, 3, 4, 7])); // true
