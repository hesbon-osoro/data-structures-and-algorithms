/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
const findMaximizedCapital = function (k, w, profits, capital) {
  // exclude the circumstance that the initial capital can afford the maximum cost
  if (Math.max(...capital) < w) {
    return profits
      .sort((a, b) => b - a)
      .slice(0, k)
      .reduce((accu, curr) => accu + curr, w);
  }

  /**
   * combine profits and capitals together, and sort them by:
   * 1. profit descending
   * 2. capital ascending
   */
  const combinedList = capital
    .map((capital, index) => ({ capital, profit: profits[index] }))
    .sort((a, b) => b.profit - a.profit || a.capital - b.capital);

  // find the maximum profit which its capital is affordable
  function findMaxProfitIndex() {
    return combinedList.findIndex(({ capital }) => capital <= w);
  }

  let finished = false;
  while (k > 0 && !finished) {
    const index = findMaxProfitIndex();
    if (index > -1) {
      w += combinedList[index].profit;
      combinedList.splice(index, 1);
      k--;
    } else {
      finished = true;
    }
  }

  return w;
};
