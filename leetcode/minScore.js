/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = function (n, roads) {
  const adjacent = new Map();

  for (const [u, v, d] of roads) {
    if (adjacent.has(u)) {
      const arr = adjacent.get(u);
      arr.push([v, d]);
      adjacent.set(u, arr);
    } else {
      adjacent.set(u, [[v, d]]);
    }

    if (adjacent.has(v)) {
      const arr = adjacent.get(v);
      arr.push([u, d]);
      adjacent.set(v, arr);
    } else {
      adjacent.set(v, [[u, d]]);
    }
  }

  let ans = Infinity;
  const visited = new Set();

  function dfs(node) {
    visited.add(node);

    for (const [neighbor, distance] of adjacent.get(node)) {
      ans = Math.min(ans, distance);

      if (visited.has(neighbor)) {
        continue;
      }

      dfs(neighbor);
    }
  }

  dfs(1);

  return ans;
};
