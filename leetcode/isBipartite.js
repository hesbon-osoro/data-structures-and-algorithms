/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function (graph) {
  const visited = new Map();
  const queue = [];
  for (let i = 0; i < graph.length; i++) {
    if (visited.has(i)) continue;
    queue.push(i);
    visited.set(i, 0);
    while (queue.length) {
      const node = queue.shift();
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.set(neighbor, visited.get(node) ^ 1);
        } else if (visited.get(neighbor) === visited.get(node)) {
          return false;
        }
      }
    }
  }
  return true;
};
