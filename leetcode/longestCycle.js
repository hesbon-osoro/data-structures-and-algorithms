/**
 * @param {number[]} edges
 * @return {number}
 */
const longestCycle = function (edges) {
  const visited = new Set();
  let maxCyclePath = -1;

  for (let i = 0; i < edges.length; i++) {
    if (visited.has(i)) continue;
    const paths = new Map();
    let j = i,
      distance = 0;
    while (j !== -1) {
      if (paths.has(j)) {
        maxCyclePath = Math.max(maxCyclePath, distance - paths.get(j));
        break;
      }
      if (visited.has(j)) break;
      visited.add(j);
      paths.set(j, distance);
      distance++;
      j = edges[j];
    }
  }

  return maxCyclePath;
};
