/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = function (colors, neededTime) {
  let result = 0;
  let max = neededTime[0];
  let sum = neededTime[0];

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] !== colors[i - 1]) {
      result += sum - max;
      sum = neededTime[i];
      max = neededTime[i];
    } else {
      sum += neededTime[i];
      max = Math.max(max, neededTime[i]);
    }
  }
  result += sum - max;
  return result;
};
