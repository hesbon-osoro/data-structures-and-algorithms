/*
counting change
Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.
*/
const countingChange = (amount, coins, i = 0, memo = {}) => {
  const key = `${amount},${i}`;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  if (i === coins.length) return 0;
  const coin = coins[i];
  let count = 0;
  for (let qty = 0; qty * coin <= amount; qty++) {
    const remainder = amount - qty * coin;
    count += countingChange(remainder, coins, i + 1, memo);
  }
  memo[key] = count;
  return count;
};
