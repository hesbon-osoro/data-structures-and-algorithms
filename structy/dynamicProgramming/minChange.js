/*
min change
Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

If it is not possible to create the amount, then return -1.
*/
const minChange = (amount, coins) => {
  return dp(amount, coins) === Infinity ? -1 : dp(amount, coins);
};
const dp = (amount, coins, memo = {}) => {
  let min = Infinity;
  if (amount in memo) return memo[amount];
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;
  for (let coin of coins) {
    let noOfCoins = 1 + dp(amount - coin, coins, memo);
    min = Math.min(min, noOfCoins);
  }
  return (memo[amount] = min);
};
console.log(minChange(12, [1, 2, 5]));
