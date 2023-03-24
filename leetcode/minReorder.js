/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function (n, connections) {
  let ans = 0;
  let graph = new Array(n).fill().map(_ => new Array());
  let inverse = new Array(n).fill().map(_ => new Array());
  let visited = new Array(n).fill(0);
  for (const connection of connections) {
    let [from, to] = connection;
    graph[from].push(to);
    inverse[to].push(from);
  }

  let queue = [0];

  visited[0] = 1;
  while (queue.length > 0) {
    let val = queue.pop();
    visited[val] = 1;
    for (const element of inverse[val]) {
      let node = element;
      if (visited[node] !== 1) {
        queue.push(node);
        visited[node] = 1;
      }
    }
    for (const element of graph[val]) {
      let node = element;
      if (visited[node] !== 1) {
        queue.push(node);
        visited[node] = 1;
        ans++;
      }
    }
  }

  return ans;
};
