/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = function (n, dislikes) {
  const graph = new Map();
  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }
  for (const [a, b] of dislikes) {
    graph.get(a).push(b);
    graph.get(b).push(a);
  }
  const colors = new Map();
  for (let i = 1; i <= n; i++) {
    if (!colors.has(i) && !dfs(i, 0)) {
      return false;
    }
  }
  return true;

  function dfs(node, color) {
    if (colors.has(node)) {
      return colors.get(node) === color;
    }
    colors.set(node, color);
    for (const next of graph.get(node)) {
      if (!dfs(next, color ^ 1)) {
        return false;
      }
    }
    return true;
  }
};
