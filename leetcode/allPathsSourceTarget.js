/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  // Initialize the result array and the stack for the DFS
  const result = [];
  const stack = [[0]];

  // While the stack is not empty
  while (stack.length > 0) {
    // Pop the top path from the stack
    const path = stack.pop();

    // If the last node in the path is the target node, add the path to the result array
    if (path[path.length - 1] === graph.length - 1) {
      result.push(path);
      continue;
    }

    // For each neighbor of the last node in the path
    for (const neighbor of graph[path[path.length - 1]]) {
      // Push a new path with the neighbor appended to the stack
      stack.push([...path, neighbor]);
    }
  }

  return result;
};
