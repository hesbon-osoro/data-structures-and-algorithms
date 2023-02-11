/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
const shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const graph = new Map();
  const visited = new Set();
  const queue = [];
  const result = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    graph.set(i, { red: [], blue: [] });
  }

  for (const redEdge of redEdges) {
    const [from, to] = redEdge;
    graph.get(from).red.push(to);
  }

  for (const blueEdge of blueEdges) {
    const [from, to] = blueEdge;
    graph.get(from).blue.push(to);
  }

  queue.push([0, 'red', 0]);
  queue.push([0, 'blue', 0]);

  while (queue.length) {
    const [node, color, distance] = queue.shift();

    if (visited.has(`${node}-${color}`)) {
      continue;
    }

    visited.add(`${node}-${color}`);

    if (result[node] === -1) {
      result[node] = distance;
    }

    const nextColor = color === 'red' ? 'blue' : 'red';

    for (const currNode of graph.get(node)[nextColor]) {
      const nextNode = currNode;
      queue.push([nextNode, nextColor, distance + 1]);
    }
  }

  return result;
};
