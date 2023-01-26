/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, k) {
  let map = {};

  for (let [x, y, z] of flights) {
    if (!map[y]) map[y] = [];
    map[y].push([x, y, z]);
  }

  let min = Infinity;

  let iterate = (end, sum, count) => {
    if (count > k || sum > min) return;

    if (end == src) {
      min = Math.min(min, sum);
      return;
    }
    if (!map[end]) return;

    for (let [x, y, z] of map[end]) {
      iterate(x, sum + z, count + 1);
    }
  };
  iterate(dst, 0, -1);
  return min == Infinity ? -1 : min;
};
