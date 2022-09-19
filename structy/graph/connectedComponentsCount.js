/*
connected components count
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
*/
const connectedComponentsCount = graph => {
  let count = 0;
  let visited = new Set();
  for (let node in graph) {
    if (dfs(graph, node, visited)) count++;
  }
  return count;
};
const dfs = (graph, node, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node));
  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
  return true;
};
const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};
console.log(connectedComponentsCount(graph)); // -> 2
