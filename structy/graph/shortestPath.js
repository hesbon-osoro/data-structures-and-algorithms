/*
shortest path
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.
*/
const shortestPath = (edges, nodeA, nodeB) => {
  // Solving using BFS
  const graph = graphBuilder(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];
  while (queue.length) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    for (const neigh of graph[node]) {
      if (!visited.has(neigh)) {
        visited.add(neigh);
        queue.push([neigh, distance + 1]);
      }
    }
  }
  return -1;
};
const graphBuilder = edges => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

console.log(shortestPath(edges, 'w', 'z')); // -> 2
