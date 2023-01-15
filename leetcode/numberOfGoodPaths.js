/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
const numberOfGoodPaths = function (vals, edges) {
  const n = vals.length;
  let res = n;
  const graph = getGraph(edges, n, vals);
  const f = new Array(n).fill(0).map((_, index) => index);
  const count = vals.map(item => ({ [item]: 1 }));
  const sortVals = vals
    .map((val, index) => ({ val, index }))
    .sort((a, b) => a.val - b.val);

  const find = x => {
    if (f[x] != x) {
      f[x] = find(f[x]);
    }
    return f[x];
  };

  for (let { val, index } of sortVals) {
    const children = graph[index];
    for (const child of children) {
      const f1 = find(index);
      const c1 = count[f1][val] ?? 0;
      const f2 = find(child);
      const c2 = count[f2][val] ?? 0;
      res += c1 * c2;
      count[f1][val] = c1 + c2;
      f[f2] = f1;
    }
  }

  return res;
};

var getGraph = (edges, n, vals) => {
  const graph = new Array(n).fill(0).map(_ => []);
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    if (vals[from] > vals[to]) {
      graph[from].push(to);
    } else {
      graph[to].push(from);
    }
  }
  return graph;
};
