/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function (points) {
  const n = points.length;
  if (n < 3) return n;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const map = new Map();
    let same = 0;
    let localMax = 0;
    for (let j = i + 1; j < n; j++) {
      if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
        same++;
        continue;
      }
      const slope = getSlope(points[i], points[j]);
      map.set(slope, (map.get(slope) || 0) + 1);
      localMax = Math.max(localMax, map.get(slope));
    }
    max = Math.max(max, localMax + same + 1);
  }
  return max;
};

function getSlope(p1, p2) {
  const dx = p1[0] - p2[0];
  const dy = p1[1] - p2[1];
  if (dx === 0) return Infinity;
  if (dy === 0) return 0;
  return dy / dx;
}
