/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // Initialize a map from each vertex to its neighboring vertices
  let map = new Map();
  edges.forEach(edge => {
    const srcEdges = map.has(edge[0]) ? map.get(edge[0]) : [],
      destEdges = map.has(edge[1]) ? map.get(edge[1]) : [];

    srcEdges.push(edge[1]);
    destEdges.push(edge[0]);
    map.set(edge[0], srcEdges);
    map.set(edge[1], destEdges);
  });
  // Initialize a set to store the visited vertices
  let visited = new Set();

  // Recursive function to perform DFS
  function dfs(v) {
    // If the current vertex is the destination vertex, return true
    if (v == destination) {
      return true;
    }
    // If the current vertex has already been visited, return false
    if (visited.has(v)) {
      return false;
    }
    // Mark the current vertex as visited
    visited.add(v);
    // For each neighbor of the current vertex
    for (let i = 0; i < map.get(v).length; i++) {
      // If the neighbor can be reached from the current vertex, return true
      if (dfs(map.get(v)[i])) {
        return true;
      }
    }
    // If the destination vertex is not reached from the current vertex, return false
    return false;
  }

  // Return the result of the DFS starting from the source vertex
  return dfs(source);
};
