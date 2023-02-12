/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
const minimumFuelCost = function (roads, seats) {
  let cars = 0;
  let graph = new Array(roads.length + 1).fill().map(() => []);
  for (let road of roads) {
    graph[road[0]].push(road[1]);
    graph[road[1]].push(road[0]);
  }
  function dfs(node, parent) {
    let people = 1;
    for (let child of graph[node]) {
      if (child === parent) continue;
      people += dfs(child, node);
    }
    if (node != 0) cars += Math.ceil(people / seats);
    return people;
  }
  dfs(0, -1);
  return cars;
};
