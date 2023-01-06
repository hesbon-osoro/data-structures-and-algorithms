/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function (costs, coins) {
  // sort the array of costs in ascending order
  costs.sort((a, b) => a - b);

  // initialize the counter
  let counter = 0;

  // iterate through the sorted array of costs
  for (const cost of costs) {
    // check if the boy has enough coins to buy the ice cream bar
    if (coins >= cost) {
      // decrement the number of coins by the cost and increment the counter
      coins -= cost;
      counter++;
    } else {
      // the boy does not have enough coins, so return the counter
      return counter;
    }
  }

  return counter;
};
