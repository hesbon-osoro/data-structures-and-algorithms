/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
const earliestFullBloom = function (plantTime, growTime) {
  let next = 0;
  return growTime
    .map((time, idx) => [time, idx])
    .sort((a, b) => b[0] - a[0])
    .reduce((acc, cur) => {
      next += plantTime[cur[1]];
      return Math.max(acc, next + cur[0]);
    }, 0);
};
