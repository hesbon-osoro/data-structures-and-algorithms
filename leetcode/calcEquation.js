/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function (equations, values, queries) {
  const graph = buildGraph(equations, values);
  const result = [];
  for (const query of queries) {
    const [start, end] = query;
    if (!graph[start] || !graph[end]) {
      result.push(-1);
    } else {
      result.push(dfs(graph, start, end, new Set()));
    }
  }
  return result;
};

function dfs(graph, start, end, visited) {
  if (start === end) return 1;
  visited.add(start);
  for (const [next, val] of graph[start]) {
    if (visited.has(next)) continue;
    const result = dfs(graph, next, end, visited);
    if (result !== -1) return val * result;
  }
  return -1;
}

function buildGraph(equations, values) {
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [start, end] = equations[i];
    const val = values[i];
    if (!graph[start]) graph[start] = [];
    if (!graph[end]) graph[end] = [];
    graph[start].push([end, val]);
    graph[end].push([start, 1 / val]);
  }
  return graph;
}
