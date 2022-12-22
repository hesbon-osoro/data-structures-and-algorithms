/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const sumOfDistancesInTree = function (n, edges) {
  const graph = Array(n)
    .fill(0)
    .map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const count = Array(n).fill(1);
  const ans = Array(n).fill(0);

  const dfs = (node, parent) => {
    for (const child of graph[node]) {
      if (child === parent) continue;
      dfs(child, node);
      count[node] += count[child];
      ans[node] += ans[child] + count[child];
    }
  };
  dfs(0, -1);

  const dfs2 = (node, parent) => {
    for (const child of graph[node]) {
      if (child === parent) continue;
      ans[child] = ans[node] - count[child] + n - count[child];
      dfs2(child, node);
    }
  };
  dfs2(0, -1);

  return ans;
};
