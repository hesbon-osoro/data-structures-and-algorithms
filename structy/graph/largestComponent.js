/*
largest component
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.
*/

const longestComponent = graph => {
  const visited = new Set();
  let maxSize = 0;
  for (let node in graph) {
    if (!visited.has(node)) {
      let size = dfs(graph, node, visited);
      if (size > maxSize) maxSize = size;
    }
  }
  return maxSize;
};
const dfs = (graph, node, visited) => {
  let size = 0;
  const stack = [node];
  while (stack.length) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      size++;
      for (let neighbor of graph[node]) {
        stack.push(neighbor);
      }
    }
  }
  return size;
};

const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2'],
};
console.log(longestComponent(graph)); // ->4
console.log('Recursive:');
const largestComponentRecursive = graph => {
  let visited = new Set();
  let maxSize = 0;
  for (let node in graph) {
    maxSize = Math.max(maxSize, dfsRecursive(graph, node, visited));
  }
  return maxSize;
};
const dfsRecursive = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let size = 1;
  for (const neigh of graph[node]) size += dfsRecursive(graph, neigh, visited);
  return size;
};
console.log(largestComponentRecursive(graph)); // ->4
