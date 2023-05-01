/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  let min = salary[0];
  let max = salary[0];
  let sum = 0;
  for (const amount of salary) {
    if (amount < min) {
      min = amount;
    }
    if (amount > max) {
      max = amount;
    }
    sum += amount;
  }
  return (sum - min - max) / (salary.length - 2);
};
