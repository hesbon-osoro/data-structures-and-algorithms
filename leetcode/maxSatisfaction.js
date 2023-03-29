/**
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => {
    return a - b;
  });
  let result = 0,
    len = satisfaction.length;
  for (let i = 0; i < len; i++) {
    let current = 0;
    for (let j = i; j < len; j++) {
      current += satisfaction[j] * (j - i + 1);
    }
    if (current > result) {
      result = current;
    }
  }
  return result;
};
