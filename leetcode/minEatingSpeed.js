/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles);
  let min = 1;
  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    const hours = piles.reduce((acc, cur) => acc + Math.ceil(cur / mid), 0);
    if (hours > h) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  return min;
};
