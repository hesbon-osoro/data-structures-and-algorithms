/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let need = 1;
    let cur = 0;
    for (const weight of weights) {
      if (cur + weight > mid) {
        need++;
        cur = 0;
      }
      cur += weight;
    }
    if (need > days) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
