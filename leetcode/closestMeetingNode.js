/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
const closestMeetingNode = function (edges, node1, node2) {
  // Create a map of edges connecting the nodes
  const edgeMap = {};
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] !== -1) {
      edgeMap[i] = edges[i];
    }
  }

  // Find the distance from node1 to every other node
  const node1Distances = findNodeDistances(edgeMap, node1);
  // Find the distance from node2 to every other node
  const node2Distances = findNodeDistances(edgeMap, node2);

  // Initialize variables to keep track of the closest meeting point
  let closestMeetingNode = -1;
  let closestDistance = null;

  // Iterate through all the nodes
  for (let i = 0; i < edges.length; i++) {
    // Check if we have found the distance from both node1 and node2 to this node
    if (node1Distances[i] !== undefined && node2Distances[i] !== undefined) {
      // Find the maximum distance from either node
      const maxDistance = Math.max(node1Distances[i], node2Distances[i]);
      // Check if this is the closest meeting point we've found so far
      if (closestDistance === null || maxDistance < closestDistance) {
        closestDistance = maxDistance;
        closestMeetingNode = i;
      }
    }
  }

  // Return the closest meeting point
  return closestMeetingNode;
};

function findNodeDistances(edgeMap, startingNode) {
  // Initialize an empty object to store distances
  const nodeDistances = {};
  // Initialize a variable to keep track of distance
  let distance = 0;

  // Keep looping until we reach the end of the path or we've already found the distance for this node
  while (
    startingNode !== undefined &&
    nodeDistances[startingNode] === undefined
  ) {
    // Assign the current distance to the current node
    nodeDistances[startingNode] = distance;
    // Move to the next node
    startingNode = edgeMap[startingNode];
    // Increment distance by 1
    distance += 1;
  }

  // Return the list of distances
  return nodeDistances;
}
