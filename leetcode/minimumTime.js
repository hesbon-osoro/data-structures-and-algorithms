/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
const minimumTime = function (time, totalTrips) {
  let left = 0;
  let right = totalTrips * Math.max(...time);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let trips = 0;
    for (const t of time) {
      trips += Math.floor(mid / t);
    }
    if (trips < totalTrips) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
