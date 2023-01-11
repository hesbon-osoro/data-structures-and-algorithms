/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime = function (n, edges, hasApple) {
  let graph = createGraph(n, edges);
  let visited = new Array(n).fill(false);
  return dfs(graph, 0, visited, hasApple);
};

function createGraph(n, edges) {
  let graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Array();
  }
  for (let edge of edges) {
    let a = edge[0],
      b = edge[1];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function dfs(graph, node, visited, hasApple) {
  visited[node] = true;
  let time = 0;
  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      time += dfs(graph, neighbor, visited, hasApple);
    }
  }
  if ((hasApple[node] || time > 0) && node !== 0) {
    time += 2;
  }
  return time;
}
